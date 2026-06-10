'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GlassmorphismCard } from '@/components/cards/GlassmorphismCard'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useCounter } from '@/hooks/useCounter'
import { staggerContainer, staggerItem } from '@/lib/animations'

interface StatItem {
  label: string
  value: number
  suffix?: string
  icon?: string
}

interface AnimatedStatsProps {
  stats: StatItem[]
  title?: string
}

export function AnimatedStats({ stats, title }: AnimatedStatsProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <motion.div ref={ref} className="space-y-8">
      {title && (
        <h3 className="text-2xl font-bold text-white text-center">{title}</h3>
      )}
      <motion.div
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, i) => (
          <motion.div key={i} variants={staggerItem}>
            <StatCard stat={stat} shouldAnimate={isVisible} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

interface StatCardProps {
  stat: StatItem
  shouldAnimate: boolean
}

function StatCard({ stat, shouldAnimate }: StatCardProps) {
  const count = useCounter(stat.value, 2000, 0)

  return (
    <GlassmorphismCard className="p-8 text-center">
      {stat.icon && <div className="mb-4 text-4xl">{stat.icon}</div>}
      <motion.div
        initial={{ scale: 0 }}
        animate={shouldAnimate ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-2"
      >
        <p className="text-4xl font-bold text-[#00F5A0]">
          {count.toLocaleString()}
          {stat.suffix}
        </p>
      </motion.div>
      <p className="text-gray-400 text-sm">{stat.label}</p>
    </GlassmorphismCard>
  )
}
