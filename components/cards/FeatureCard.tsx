'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GlassmorphismCard } from './GlassmorphismCard'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  index?: number
}

export function FeatureCard({
  icon,
  title,
  description,
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <GlassmorphismCard className="p-6 sm:p-8 h-full flex flex-col gap-4">
        <div className="text-4xl sm:text-5xl">{icon}</div>
        <h3 className="text-xl sm:text-2xl font-bold text-white">{title}</h3>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-grow">
          {description}
        </p>
      </GlassmorphismCard>
    </motion.div>
  )
}
