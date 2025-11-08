'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { chapterMap } from '@/data/chapterDetails'
import { useUser } from '@clerk/nextjs'
import { getUserIdByClerkId } from '@/actions/UserActions'
import Headerfordash from "@/components/Headerfordash"

export default function InteractivePracticePage() {
  const router = useRouter()
  const { user } = useUser()
  const [progress, setProgress] = useState({})

  useEffect(() => {
    if (user) {
      loadProgress()
    }
  }, [user])

  const loadProgress = async () => {
    const uid = await getUserIdByClerkId(user.id)
    if (uid) {
      // For now, use localStorage for client-side progress tracking
      // TODO: Implement server-side progress tracking with API routes
      const storedProgress = localStorage.getItem(`progress_${uid}`)
      if (storedProgress) {
        setProgress(JSON.parse(storedProgress))
      }
    }
  }

  return (
    <section>
      <Headerfordash />
      <div className="min-h-screen bg-[#1E2235] text-[#D4D4D4] p-8 font-sans">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-emerald-300">Interactive Practice</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(chapterMap).map(([id, chapter]) => (
              <div key={id} className="bg-[#2A2F45] p-6 rounded-lg hover:bg-[#3A3F55] transition">
                <h2 className="text-xl font-bold mb-2 text-emerald-300">{chapter.title}</h2>
                <p className="mb-4 text-gray-300">{chapter.description}</p>
                <div className="flex justify-between items-center">
                  <span className={`px-2 py-1 rounded text-sm ${progress[id] ? 'bg-green-600' : 'bg-gray-600'}`}>
                    {progress[id] ? 'Completed' : 'Not Started'}
                  </span>
                  <button
                    onClick={() => router.push(`/interactivepractice/practice/${id}`)}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded"
                  >
                    Practice
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
