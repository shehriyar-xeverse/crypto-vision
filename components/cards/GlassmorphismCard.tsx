'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { glowOnHover } from '@/lib/animations'

interface GlassmorphismCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: 'green' | 'cyan' | 'purple'
  animated?: boolean
}

export function GlassmorphismCard({
  children,
  className,
  glowColor = 'green',
  animated = true,
}: GlassmorphismCardProps) {
  const glowClasses = {
    green: 'hover:shadow-[0_0_30px_rgba(0,245,160,0.4)]',
    cyan: 'hover:shadow-[0_0_30px_rgba(0,217,255,0.4)]',
    purple: 'hover:shadow-[0_0_30px_rgba(110,86,207,0.4)]',
  }

  const baseClasses =
    'backdrop-blur-md bg-white/[0.05] border border-white/10 rounded-2xl smooth-transition'

  const Component = animated ? motion.div : 'div'

  return (
    <Component
      initial={animated ? 'rest' : undefined}
      whileHover={animated ? 'hover' : undefined}
      variants={animated ? glowOnHover : undefined}
      className={cn(baseClasses, glowClasses[glowColor], className)}
    >
      {children}
    </Component>
  )
}
