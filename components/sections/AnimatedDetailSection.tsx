'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/lib/animations'

interface AnimatedDetailSectionProps {
  title: string
  description: string
  imagePlaceholder?: string
  imageLeft?: boolean
  imageAlt?: string
  children?: React.ReactNode
}

export function AnimatedDetailSection({
  title,
  description,
  imagePlaceholder = 'Feature Image',
  imageLeft = false,
  imageAlt = 'Feature visualization',
  children,
}: AnimatedDetailSectionProps) {
  const textVariant = imageLeft ? slideInFromLeft : slideInFromRight
  const imageVariant = imageLeft ? slideInFromRight : slideInFromLeft

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Text content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariant}
        custom={0.1}
        className={imageLeft ? 'lg:order-2' : ''}
      >
        <h3 className="text-4xl font-bold text-white mb-6 leading-tight">{title}</h3>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">{description}</p>
        {children}
      </motion.div>

      {/* Image placeholder */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={imageVariant}
        custom={0.1}
        className={imageLeft ? 'lg:order-1' : ''}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00F5A0]/20 to-[#00D9FF]/20 rounded-2xl blur-2xl -z-10" />
          <div className="bg-gradient-to-br from-[#00F5A0]/10 to-[#00D9FF]/10 border border-[#00F5A0]/20 rounded-2xl p-8 h-80 lg:h-96 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-400 text-lg">{imagePlaceholder}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
