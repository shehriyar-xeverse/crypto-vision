'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GlassmorphismCard } from '@/components/cards/GlassmorphismCard'
import { staggerContainer, staggerItem, liftOnHover } from '@/lib/animations'

interface Feature {
  id: string
  icon: string
  title: string
  description: string
}

interface FeatureGridAnimatedProps {
  features: Feature[]
  columns?: number
}

export function FeatureGridAnimated({
  features,
  columns = 3,
}: FeatureGridAnimatedProps) {
  const gridClass = {
    1: 'grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'md:grid-cols-2 lg:grid-cols-3'

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className={`grid grid-cols-1 ${gridClass} gap-6`}
    >
      {features.map((feature) => (
        <motion.div
          key={feature.id}
          variants={staggerItem}
          whileHover="hover"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="h-full"
        >
          <motion.div variants={liftOnHover}>
            <GlassmorphismCard className="p-8 h-full flex flex-col">
              {/* Icon */}
              <motion.div
                className="mb-6 text-4xl"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {feature.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm flex-grow">{feature.description}</p>

              {/* Accent line */}
              <motion.div
                className="mt-4 h-1 bg-gradient-to-r from-[#00F5A0] to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                style={{ transformOrigin: 'left' }}
              />
            </GlassmorphismCard>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}
