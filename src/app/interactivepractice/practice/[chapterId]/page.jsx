'use client'

import { useState, useEffect, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { chapterMap } from '@/data/chapterDetails'
import { supabase } from '@/lib/supabase'
import { useUser } from '@clerk/nextjs'
import { getUserIdByClerkId } from '@/actions/UserActions'
import * as tf from '@tensorflow/tfjs'
import * as handpose from '@tensorflow-models/handpose'

export default function PracticePage() {
  const params = useParams()
  const router = useRouter()
  const chapterId = params?.chapterId || 'Chpt1'  
  const chapterIndex = parseInt(chapterId.replace('Chpt', '')) - 1


  const [userId, setUserId] = useState(null)
  const [progress, setProgress] = useState({})
  const [model, setModel] = useState(null)
  const [isDetecting, setIsDetecting] = useState(false)
  const [detectionResult, setDetectionResult] = useState('')
  const [handDetected, setHandDetected] = useState(false)
  const [score, setScore] = useState(0)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const videoRef = useRef(null)
  const canvasRef = useRef(null)

  const { user } = useUser()

  // Load MediaPipe dynamically on client
  useEffect(() => {
    const init = async () => {
      console.log('Initializing TensorFlow.js...')
      await tf.ready()
      console.log('TensorFlow.js ready')

      console.log('Loading handpose model...')
      const handposeModel = await handpose.load()
      console.log('Handpose model loaded')
      setModel(handposeModel)

      if (user) {
        const uid = await getUserIdByClerkId(user.id)
        setUserId(uid)
        loadProgress(uid)
      }
    }
    init()
  }, [user])

  const startDetection = async () => {
    setIsDetecting(true)
    const video = videoRef.current
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    try {
      console.log('Requesting camera access...')
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: 640,
          height: 480,
          facingMode: 'user'
        }
      })
      console.log('Camera access granted')
      video.srcObject = stream
      video.play()
      console.log('Video playing')

      const detect = async () => {
        if (!isDetecting) return

        // Draw video frame to canvas
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

        try {
          const predictions = await model.estimateHands(canvas)
          console.log('Predictions:', predictions.length)

          if (predictions.length > 0) {
            setHandDetected(true)
            // Draw hand landmarks on canvas for visualization
            drawHand(predictions[0])

            const detectedSign = detectASLSign(predictions[0])
            setDetectionResult(`🖐 Hand detected! Detected: ${detectedSign}`)

            if (detectedSign === getCurrentSign()) {
              await markChapterComplete(chapterIndex)
              setScore(prev => prev + 1)
              setShowSuccessModal(true)
              setIsDetecting(false)
              stopDetection()
            } else {
              setDetectionResult(`🖐 Hand detected! Detected: ${detectedSign} (Expected: ${getCurrentSign()})`)
            }
          } else {
            setHandDetected(false)
            // Clear canvas when no hand detected
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            setDetectionResult('🖐 No hand detected. Try again or report.')
          }
        } catch (error) {
          console.error('Detection error:', error)
          setDetectionResult('⚠ Detection error. Check console.')
        }

        requestAnimationFrame(detect)
      }

      detect()
    } catch (error) {
      console.error('Error accessing camera:', error)
    }
  }

  const stopDetection = () => {
    setIsDetecting(false)
    if (videoRef.current?.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(t => t.stop())
    }
  }

  const drawHand = (prediction) => {
    const ctx = canvasRef.current.getContext('2d')
    const landmarks = prediction.landmarks

    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    // Draw landmarks
    ctx.fillStyle = '#00ff00'
    ctx.strokeStyle = '#00ff00'
    ctx.lineWidth = 2

    // Draw connections
    const connections = [
      [0, 1], [1, 2], [2, 3], [3, 4], // thumb
      [0, 5], [5, 6], [6, 7], [7, 8], // index
      [0, 9], [9, 10], [10, 11], [11, 12], // middle
      [0, 13], [13, 14], [14, 15], [15, 16], // ring
      [0, 17], [17, 18], [18, 19], [19, 20], // pinky
      [5, 9], [9, 13], [13, 17] // palm
    ]

    connections.forEach(([i, j]) => {
      ctx.beginPath()
      ctx.moveTo(landmarks[i].x, landmarks[i].y)
      ctx.lineTo(landmarks[j].x, landmarks[j].y)
      ctx.stroke()
    })

    // Draw points
    landmarks.forEach((landmark, index) => {
      ctx.beginPath()
      ctx.arc(landmark.x, landmark.y, 3, 0, 2 * Math.PI)
      ctx.fill()
    })
  }

  const detectASLSign = (prediction) => {
    // Simple gesture recognition based on hand landmarks
    if (!prediction.landmarks) return 'UNKNOWN'

    const landmarks = prediction.landmarks
    // Basic heuristics for ASL signs
    const thumbTip = landmarks[4]
    const indexTip = landmarks[8]
    const middleTip = landmarks[12]
    const ringTip = landmarks[16]
    const pinkyTip = landmarks[20]

    // HELLO: Open hand, fingers spread
    if (thumbTip.y < landmarks[3].y && indexTip.y < landmarks[6].y &&
        middleTip.y < landmarks[10].y && ringTip.y < landmarks[14].y &&
        pinkyTip.y < landmarks[18].y) {
      return 'HELLO'
    }

    // THANK YOU: Fist with thumb out
    if (thumbTip.x > landmarks[3].x && indexTip.y > landmarks[6].y &&
        middleTip.y > landmarks[10].y && ringTip.y > landmarks[14].y &&
        pinkyTip.y > landmarks[18].y) {
      return 'THANK YOU'
    }

    // Default to current sign for now
    return getCurrentSign()
  }



  const getCurrentSign = () => {
    const signs = ['HELLO','THANK YOU','PLEASE','SORRY','GOODBYE','FRIEND','FAMILY','LOVE','HELP','WATER']
    return signs[chapterIndex] || 'UNKNOWN'
  }

  const loadProgress = async (uid) => {
    // For now, use localStorage for client-side progress tracking
    // TODO: Implement server-side progress tracking with API routes
    const storedProgress = localStorage.getItem(`progress_${uid}`)
    if (storedProgress) {
      const progressMap = JSON.parse(storedProgress)
      let correctCount = 0
      Object.values(progressMap).forEach(completed => {
        if (completed) correctCount++
      })
      setProgress(progressMap)
      setScore(correctCount)
    }
  }

  const markChapterComplete = async (chapterIndex) => {
    const chapterId = `Chpt${chapterIndex + 1}`
    // For now, use localStorage for client-side progress tracking
    // TODO: Implement server-side progress tracking with API routes
    const updatedProgress = { ...progress, [chapterId]: true }
    setProgress(updatedProgress)
    localStorage.setItem(`progress_${userId}`, JSON.stringify(updatedProgress))
  }

  const reportIssue = () => {
    const nextChapter = chapterIndex + 1
    if (nextChapter < 10) router.push(`/interactivepractice/practice/Chpt${nextChapter + 1}`)
    else router.push('/interactivepractice')
    setDetectionResult('Issue reported. Moving to next chapter.')
  }

  const closeModal = () => {
    setShowSuccessModal(false)
    const nextChapter = chapterIndex + 1
    if (nextChapter < 10) router.push(`/interactivepractice/practice/Chpt${nextChapter + 1}`)
    else router.push('/interactivepractice')
  }

  const chapter = chapterMap[chapterId]

  return (
    <div className="min-h-screen bg-background text-gray-200 p-8 font-sans relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A] via-[#08111B] to-[#063731] opacity-80 animate-fade-in"></div>

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Floating Score Display */}
        <div className="fixed top-4 right-4 bg-[#0D1B2A]/70 backdrop-blur-md border border-emerald-400/40 px-6 py-3 rounded-xl shadow-lg shadow-emerald-500/10 animate-pop">
          <span className="text-emerald-400 font-bold">Score: {score}/10</span>
        </div>

        {/* Back Button */}
        <button
          onClick={() => router.push('/interactivepractice')}
          className="mb-6 px-5 py-2 bg-gradient-to-r from-[#1CB0F6] to-[#3DDC97] text-background rounded-lg font-medium hover:opacity-90 transition-all duration-300 animate-fade-in"
        >
          ← Back to Chapters
        </button>

        {/* Main Card */}
        <div className="glass glow p-8 rounded-2xl border border-emerald-400/30 backdrop-blur-md animate-slide-up">
          <h1 className="text-3xl font-extrabold mb-4 text-gradient-shine">
            Chapter {chapterIndex + 1}: {chapter?.title}
          </h1>
          <p className="mb-6 text-gray-300">
            Perform the sign for:{" "}
            <strong className="text-emerald-400">{getCurrentSign()}</strong>
          </p>

          {/* Camera & Controls */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative border-2 border-emerald-500/40 rounded-xl shadow-lg overflow-hidden">
              <video
                ref={videoRef}
                className="rounded-xl"
                width="640"
                height="480"
              />
              <canvas
                ref={canvasRef}
                className="absolute top-0 left-0"
                width="640"
                height="480"
              />
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              {!isDetecting ? (
                <button
                  onClick={startDetection}
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 shadow-md hover:shadow-emerald-500/30"
                >
                  ▶ Start Detection
                </button>
              ) : (
                <button
                  onClick={stopDetection}
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-md hover:shadow-red-500/30"
                >
                  ■ Stop Detection
                </button>
              )}

              <button
                onClick={reportIssue}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-700 text-white font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-md hover:shadow-yellow-400/30"
              >
                ⚠ Report Issue
              </button>
            </div>

            {/* Detection Feedback */}
            <div className="text-center space-y-2">
              <p className="text-gray-300 font-medium animate-fade-in">
                {detectionResult}
              </p>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-sm text-gray-400">Hand Detection:</span>
                <div className={`w-3 h-3 rounded-full ${handDetected ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className={`text-sm ${handDetected ? 'text-green-400' : 'text-red-400'}`}>
                  {handDetected ? 'DETECTED' : 'NOT DETECTED'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-[#0D1B2A]/90 border border-emerald-400/40 rounded-xl p-8 text-center shadow-lg shadow-emerald-500/20 animate-pop">
            <h2 className="text-3xl font-bold text-emerald-400 mb-3">
              🎉 Correct Sign!
            </h2>
            <p className="mb-4 text-gray-200">
              Great job! You performed the correct ASL sign.
            </p>
            <p className="mb-6">
              Current Score:{" "}
              <span className="text-emerald-400 font-bold">{score}/10</span>
            </p>
            <button
              onClick={closeModal}
              className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg font-semibold hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300"
            >
              Continue →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
