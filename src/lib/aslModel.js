import * as tf from '@tensorflow/tfjs'
import { Hands } from '@mediapipe/hands'
import { Camera } from '@mediapipe/camera_utils'

class ASLModel {
  constructor() {
    this.hands = null
    this.camera = null
    this.model = null
    this.isInitialized = false
    this.onResultsCallback = null
  }

  async initialize() {
    if (this.isInitialized) return

    try {
      // Initialize MediaPipe Hands
      this.hands = new Hands({
        locateFile: (file) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
        }
      })

      this.hands.setOptions({
        maxNumHands: 1,
        modelComplexity: 1,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
      })

      // Set up results callback
      this.hands.onResults((results) => {
        if (this.onResultsCallback) {
          this.onResultsCallback(results)
        }
      })

      // Initialize TensorFlow.js
      await tf.ready()

      // Create a simple classification model
      this.model = tf.sequential()
      this.model.add(tf.layers.dense({ inputShape: [63], units: 128, activation: 'relu' })) // 21 landmarks * 3 coordinates
      this.model.add(tf.layers.dropout({ rate: 0.2 }))
      this.model.add(tf.layers.dense({ units: 64, activation: 'relu' }))
      this.model.add(tf.layers.dropout({ rate: 0.2 }))
      this.model.add(tf.layers.dense({ units: 10, activation: 'softmax' })) // 10 ASL signs

      // Compile the model
      this.model.compile({
        optimizer: tf.train.adam(0.001),
        loss: 'categoricalCrossentropy',
        metrics: ['accuracy']
      })

      this.isInitialized = true
      console.log('ASL Model initialized successfully')
    } catch (error) {
      console.error('Failed to initialize ASL model:', error)
      throw error
    }
  }

  setOnResultsCallback(callback) {
    this.onResultsCallback = callback
  }

  async startCamera(videoElement) {
    if (!this.hands) {
      throw new Error('Hands not initialized')
    }

    this.camera = new Camera(videoElement, {
      onFrame: async () => {
        await this.hands.send({ image: videoElement })
      },
      width: 640,
      height: 480
    })

    await this.camera.start()
  }

  stopCamera() {
    if (this.camera) {
      this.camera.stop()
    }
  }

  // Extract landmarks from MediaPipe results
  extractLandmarks(results) {
    if (!results.multiHandLandmarks || results.multiHandLandmarks.length === 0) {
      return null
    }

    const landmarks = results.multiHandLandmarks[0]
    const flattened = []

    for (const landmark of landmarks) {
      flattened.push(landmark.x, landmark.y, landmark.z)
    }

    return tf.tensor2d([flattened])
  }

  // Predict ASL sign from landmarks
  async predictSign(landmarks) {
    if (!this.model || !landmarks) {
      return null
    }

    try {
      const prediction = this.model.predict(landmarks)
      const result = await prediction.data()

      // Get the index of the highest probability
      const maxIndex = result.indexOf(Math.max(...result))

      // Map index to ASL sign
      const signs = ['HELLO', 'THANK YOU', 'PLEASE', 'SORRY', 'GOODBYE', 'FRIEND', 'FAMILY', 'LOVE', 'HELP', 'WATER']
      return signs[maxIndex]
    } catch (error) {
      console.error('Prediction error:', error)
      return null
    }
  }

  // Train the model with sample data (placeholder - would need real training data)
  async trainModel() {
    // This is a placeholder for training
    // In a real implementation, you would need:
    // 1. Collect training data for each ASL sign
    // 2. Preprocess the data
    // 3. Train the model
    // 4. Save/load the trained model

    console.log('Training placeholder - model needs real ASL training data')
  }

  dispose() {
    if (this.model) {
      this.model.dispose()
    }
    this.stopCamera()
    this.isInitialized = false
  }
}

// Export singleton instance
export const aslModel = new ASLModel()
