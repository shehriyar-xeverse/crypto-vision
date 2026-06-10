'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function AnimatedButton({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: AnimatedButtonProps) {
  const baseClasses = 'font-semibold rounded-lg smooth-transition relative'

  const variantClasses = {
    primary:
      'bg-[#00F5A0] text-[#050816] hover:shadow-[0_0_30px_rgba(0,245,160,0.4)]',
    secondary:
      'bg-[#6E56CF] text-white hover:shadow-[0_0_30px_rgba(110,86,207,0.4)]',
    outline:
      'border border-[#00F5A0] text-[#00F5A0] hover:bg-[#00F5A0] hover:text-[#050816]',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
