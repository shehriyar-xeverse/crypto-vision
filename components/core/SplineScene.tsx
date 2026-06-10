'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-b from-[#0D1B2A] to-[#050816] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-[#00F5A0] border-t-transparent mx-auto mb-4"></div>
        <p className="text-[#A0A0A0] text-sm">Loading scene...</p>
      </div>
    </div>
  ),
})

interface SplineSceneProps {
  scene: string
  className?: string
  fallback?: React.ReactNode
}

export function SplineScene({ scene, className = 'w-full h-[500px]', fallback }: SplineSceneProps) {
  return (
    <div className={className}>
      <Suspense fallback={fallback}>
        <Spline scene={scene} />
      </Suspense>
    </div>
  )
}
