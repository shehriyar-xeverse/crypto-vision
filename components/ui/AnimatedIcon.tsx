'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface AnimatedIconProps {
  icon: LucideIcon
  size?: number
  className?: string
  animate?: boolean
  hoverScale?: number
  hoverRotate?: number
  glowColor?: 'neon' | 'cyan' | 'purple'
}

export function AnimatedIcon({
  icon: Icon,
  size = 24,
  className = '',
  animate = true,
  hoverScale = 1.2,
  hoverRotate = 10,
  glowColor = 'neon',
}: AnimatedIconProps) {
  const glowClasses = {
    neon: 'text-[#00F5A0]',
    cyan: 'text-[#00D9FF]',
    purple: 'text-[#6E56CF]',
  }

  return (
    <motion.div
      whileHover={animate ? { scale: hoverScale, rotate: hoverRotate } : {}}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      className="inline-flex items-center justify-center cursor-pointer"
    >
      <Icon
        size={size}
        className={`${glowClasses[glowColor]} transition-all duration-300 ${className}`}
      />
    </motion.div>
  )
}
