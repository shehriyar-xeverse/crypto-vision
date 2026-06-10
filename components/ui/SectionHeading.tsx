'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeInUp } from '@/lib/animations'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  gradient?: boolean
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  gradient = true,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
      className={cn('space-y-4', centered && 'text-center', className)}
    >
      <h2
        className={cn(
          'text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight',
          gradient &&
            'bg-gradient-to-r from-[#00F5A0] via-[#00D9FF] to-[#6E56CF] bg-clip-text text-transparent',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
