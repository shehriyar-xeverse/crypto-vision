'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GlassmorphismCard } from '@/components/cards/GlassmorphismCard'

interface Testimonial {
  id: string
  feedback: string
  name: string
  role: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoPlayInterval?: number
}

export function TestimonialCarousel({
  testimonials,
  autoPlayInterval = 5000,
}: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [isPaused, testimonials.length, autoPlayInterval])

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <div
      className="space-y-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel container */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
              {/* Previous card (blurred) */}
              <motion.div
                animate={{ opacity: 0.4, scale: 0.95 }}
                className="md:flex hidden"
              >
                <GlassmorphismCard className="p-8 h-full flex flex-col justify-between w-full opacity-50">
                  <p className="text-gray-400 mb-6 italic text-sm">
                    {
                      testimonials[
                        (activeIndex - 1 + testimonials.length) % testimonials.length
                      ].feedback
                    }
                  </p>
                  <div>
                    <p className="text-sm font-bold text-white">
                      {
                        testimonials[
                          (activeIndex - 1 + testimonials.length) %
                            testimonials.length
                        ].name
                      }
                    </p>
                  </div>
                </GlassmorphismCard>
              </motion.div>

              {/* Active card */}
              <motion.div
                animate={{ scale: 1.05 }}
                className="md:col-span-1 col-span-1"
              >
                <GlassmorphismCard className="p-8 h-full flex flex-col justify-between bg-gradient-to-br from-[#00F5A0]/20 to-[#00D9FF]/20">
                  <p className="text-gray-200 mb-6 italic leading-relaxed text-lg">
                    "{testimonials[activeIndex].feedback}"
                  </p>
                  <div>
                    <p className="text-lg font-bold text-white">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-sm text-[#00F5A0]">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </GlassmorphismCard>
              </motion.div>

              {/* Next card (blurred) */}
              <motion.div
                animate={{ opacity: 0.4, scale: 0.95 }}
                className="md:flex hidden"
              >
                <GlassmorphismCard className="p-8 h-full flex flex-col justify-between w-full opacity-50">
                  <p className="text-gray-400 mb-6 italic text-sm">
                    {testimonials[(activeIndex + 1) % testimonials.length].feedback}
                  </p>
                  <div>
                    <p className="text-sm font-bold text-white">
                      {testimonials[(activeIndex + 1) % testimonials.length].name}
                    </p>
                  </div>
                </GlassmorphismCard>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={prev}
          className="px-6 py-2 rounded-full bg-[#00F5A0]/20 border border-[#00F5A0]/40 text-[#00F5A0] text-sm font-medium hover:bg-[#00F5A0]/30 transition-colors"
        >
          Previous
        </motion.button>

        {/* Indicators */}
        <div className="flex gap-2 items-center">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === activeIndex
                  ? 'bg-[#00F5A0] w-8'
                  : 'bg-gray-600 w-2 hover:bg-gray-400'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={next}
          className="px-6 py-2 rounded-full bg-[#00F5A0]/20 border border-[#00F5A0]/40 text-[#00F5A0] text-sm font-medium hover:bg-[#00F5A0]/30 transition-colors"
        >
          Next
        </motion.button>
      </div>
    </div>
  )
}
