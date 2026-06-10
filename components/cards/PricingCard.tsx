'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GlassmorphismCard } from './GlassmorphismCard'
import { AnimatedButton } from '@/components/ui/AnimatedButton'

interface PricingCardProps {
  name: string
  price: number | null
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
  index?: number
}

export function PricingCard({
  name,
  price,
  description,
  features,
  cta,
  highlighted = false,
  index = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-full"
    >
      <GlassmorphismCard
        glowColor={highlighted ? 'cyan' : 'green'}
        className={cn(
          'p-8 h-full flex flex-col gap-6',
          highlighted && 'ring-2 ring-[#00D9FF] transform scale-105',
        )}
      >
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex items-baseline gap-2 mb-2">
            {price ? (
              <>
                <span className="text-4xl font-bold text-[#00F5A0]">
                  ${price}
                </span>
                <span className="text-gray-400">/month</span>
              </>
            ) : (
              <span className="text-3xl font-bold text-white">
                Custom Pricing
              </span>
            )}
          </div>
        </div>

        <ul className="space-y-3 flex-grow">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-gray-300">
              <span className="text-[#00F5A0] mt-1">✓</span>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <AnimatedButton
          variant={highlighted ? 'primary' : 'outline'}
          size="md"
          className="w-full"
        >
          {cta}
        </AnimatedButton>
      </GlassmorphismCard>
    </motion.div>
  )
}

import { cn } from '@/lib/utils'
