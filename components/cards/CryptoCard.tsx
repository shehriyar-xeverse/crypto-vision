'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GlassmorphismCard } from './GlassmorphismCard'

interface CryptoCardProps {
  name: string
  symbol: string
  price: number
  change24h: number
  volume: string
  icon?: string
}

export function CryptoCard({
  name,
  symbol,
  price,
  change24h,
  volume,
  icon,
}: CryptoCardProps) {
  const isPositive = change24h >= 0

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <GlassmorphismCard className="p-6 text-center min-w-max">
        {icon && <div className="text-4xl mb-3">{icon}</div>}
        <h3 className="text-lg font-bold text-white mb-1">{name}</h3>
        <p className="text-[#00F5A0] font-semibold mb-4">{symbol}</p>

        <div className="space-y-2">
          <div>
            <p className="text-2xl font-bold text-white">
              ${price.toLocaleString('en-US', { maximumFractionDigits: 2 })}
            </p>
          </div>

          <div
            className={`inline-block px-3 py-1 rounded-lg font-semibold ${
              isPositive
                ? 'bg-[#00F5A0]/20 text-[#00F5A0]'
                : 'bg-[#FF6B6B]/20 text-[#FF6B6B]'
            }`}
          >
            {isPositive ? '+' : ''}{change24h.toFixed(2)}%
          </div>

          <p className="text-sm text-gray-400 mt-2">Vol: {volume}</p>
        </div>
      </GlassmorphismCard>
    </motion.div>
  )
}
