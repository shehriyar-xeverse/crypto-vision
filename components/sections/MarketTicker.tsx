'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CryptoCard } from '@/components/cards/CryptoCard'
import { Section } from '@/components/core/Section'
import { Container } from '@/components/core/Container'

interface Crypto {
  id: string
  name: string
  symbol: string
  price: string
  change24h: number
  volume: string
  icon: string
}

interface MarketTickerProps {
  cryptos: Crypto[]
  duration?: number
}

export function MarketTicker({ cryptos, duration = 30 }: MarketTickerProps) {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <Section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-white">
            Live Market Prices
          </h2>
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              animate={{ x: [0, -2000] }}
              transition={{
                duration,
                repeat: Infinity,
                ease: 'linear',
                paused: isPaused,
              }}
              className="flex gap-4 pb-4"
            >
              {[...cryptos, ...cryptos].map((crypto, i) => (
                <motion.div
                  key={`${crypto.id}-${i}`}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <CryptoCard
                    name={crypto.name}
                    symbol={crypto.symbol}
                    price={crypto.price}
                    change24h={crypto.change24h}
                    volume={crypto.volume}
                    icon={crypto.icon}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
