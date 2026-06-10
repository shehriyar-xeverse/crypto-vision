'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface LinkButtonProps {
  href: string
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
  target?: string
  rel?: string
}

export function LinkButton({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  target,
  rel,
}: LinkButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 cursor-pointer'

  const variantClasses = {
    primary:
      'bg-[#00F5A0] text-[#050816] hover:shadow-[0_0_30px_rgba(0,245,160,0.4)]',
    outline:
      'border border-[#00F5A0] text-[#00F5A0] hover:bg-[#00F5A0]/10 hover:shadow-[0_0_20px_rgba(0,245,160,0.3)]',
    ghost:
      'text-[#00F5A0] hover:bg-[#00F5A0]/10 hover:shadow-[0_0_15px_rgba(0,245,160,0.2)]',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
      <Link
        href={href}
        target={target}
        rel={rel}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  )
}
