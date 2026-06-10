'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GlassmorphismCard } from '@/components/cards/GlassmorphismCard'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { lineGrowthAnimation, pulseGlow, staggerItem } from '@/lib/animations'

interface TimelineStep {
  id: string
  step: number
  title: string
  description: string
}

interface AnimatedTimelineProps {
  steps: TimelineStep[]
}

export function AnimatedTimeline({ steps }: AnimatedTimelineProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div ref={ref} className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="relative"
          >
            {/* Connecting line */}
            {i < steps.length - 1 && (
              <motion.div
                className="hidden md:block absolute top-12 left-[60%] w-[40%] h-0.5 bg-gradient-to-r from-[#00F5A0] to-transparent"
                initial={{ scaleX: 0 }}
                animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
                style={{ transformOrigin: 'left' }}
              />
            )}

            <GlassmorphismCard className="p-8 relative z-10">
              {/* Step number with pulse */}
              <motion.div
                className="mb-6"
                animate={isVisible ? 'animate' : 'rest'}
                variants={pulseGlow}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#00F5A0] to-[#00D9FF]">
                  <span className="text-2xl font-bold text-[#050816]">
                    {step.step}
                  </span>
                </div>
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.description}</p>
            </GlassmorphismCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
