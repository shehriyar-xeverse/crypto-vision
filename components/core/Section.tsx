import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeIn } from '@/lib/animations'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  darkBg?: boolean
}

export function Section({
  children,
  className,
  id,
  darkBg = false,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeIn}
      className={cn(
        'w-full py-16 sm:py-20 lg:py-24',
        darkBg && 'bg-gradient-to-b from-[#050816] to-[#0D1B2A]',
        className,
      )}
    >
      {children}
    </motion.section>
  )
}
