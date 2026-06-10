'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/core/HeroSection'
import { Section } from '@/components/core/Section'
import { Container } from '@/components/core/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CryptoCard } from '@/components/cards/CryptoCard'
import { GlassmorphismCard } from '@/components/cards/GlassmorphismCard'
import { AnimatedButton } from '@/components/ui/AnimatedButton'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { AnimatedCardGrid } from '@/components/sections/AnimatedCardGrid'
import { cryptocurrencies } from '@/lib/constants'
import { staggerContainer, staggerItem, fadeInUp, slideInUp } from '@/lib/animations'

export default function MarketsPage() {
  const marketStats = [
    { label: 'Total Market Cap', value: '$2.4T', icon: '💰' },
    { label: '24h Volume', value: '$98.5B', icon: '📊' },
    { label: 'Active Cryptocurrencies', value: '10,000+', icon: '🪙' },
    { label: 'Market Dominance BTC', value: '42.3%', icon: '₿' },
  ]

  const categories = [
    { name: 'Layer 1 Blockchains', count: 150, icon: '⛓️' },
    { name: 'DeFi Tokens', count: 280, icon: '🏦' },
    { name: 'AI & ML', count: 85, icon: '🤖' },
    { name: 'Gaming & Metaverse', count: 120, icon: '🎮' },
    { name: 'Stablecoins', count: 45, icon: '💵' },
    { name: 'Layer 2 Solutions', count: 95, icon: '🔗' },
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Global Crypto Markets"
        subtitle="Track 10,000+ cryptocurrencies with real-time data. Monitor market trends, volume, and price movements across all major exchanges."
      />

      {/* Global Stats Section */}
      <Section darkBg>
        <Container>
          <div className="space-y-8">
            <SectionHeading
              title="Market Overview"
              subtitle="Global cryptocurrency market statistics"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max"
            >
              {marketStats.map((stat) => (
                <motion.div key={stat.label} variants={staggerItem} className="h-full">
                  <GlassmorphismCard className="p-8 text-center space-y-3 h-full flex flex-col items-center justify-center hover:shadow-[0_0_40px_rgba(0,245,160,0.15)] transition-shadow duration-300">
                    <motion.div
                      className="text-4xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                    <p className="text-3xl font-bold text-[#00F5A0]">
                      {stat.value}
                    </p>
                  </GlassmorphismCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Top Cryptocurrencies */}
      <Section>
        <Container>
          <div className="space-y-8">
            <SectionHeading
              title="Top Cryptocurrencies"
              subtitle="Leading digital assets by market capitalization"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max"
            >
              {cryptocurrencies.map((crypto, i) => (
                <motion.div
                  key={crypto.id}
                  variants={staggerItem}
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="h-full"
                >
                  <GlassmorphismCard className="p-8 space-y-4 h-full hover:shadow-[0_10_40px_rgba(0,245,160,0.2)] transition-shadow duration-300">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className="text-4xl"
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          transition={{ type: 'spring', stiffness: 400 }}
                        >
                          {crypto.icon}
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-bold text-white">
                            {crypto.name}
                          </h3>
                          <p className="text-[#00F5A0] text-sm font-semibold">
                            {crypto.symbol}
                          </p>
                        </div>
                      </div>
                      <motion.div
                        className={`px-3 py-1 rounded-lg font-semibold text-sm ${
                          crypto.change24h >= 0
                            ? 'bg-[#00F5A0]/20 text-[#00F5A0]'
                            : 'bg-[#FF6B6B]/20 text-[#FF6B6B]'
                        }`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                      >
                        {crypto.change24h >= 0 ? '+' : ''}{crypto.change24h.toFixed(2)}%
                      </motion.div>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-white/10">
                      <div className="flex justify-between">
                        <span className="text-gray-400 text-sm">Price</span>
                        <motion.span
                          className="text-white font-semibold"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + 0.4 }}
                        >
                          ${crypto.price.toLocaleString('en-US', { maximumFractionDigits: 2 })}
                        </motion.span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400 text-sm">24h Volume</span>
                        <motion.span
                          className="text-white font-semibold"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + 0.5 }}
                        >
                          {crypto.volume}
                        </motion.span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400 text-sm">Market Cap</span>
                        <motion.span
                          className="text-white font-semibold"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + 0.6 }}
                        >
                          {crypto.marketCap}
                        </motion.span>
                      </div>
                    </div>
                  </GlassmorphismCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Market Categories */}
      <Section darkBg>
        <Container>
          <div className="space-y-8">
            <SectionHeading
              title="Market Categories"
              subtitle="Explore cryptocurrencies by category"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {categories.map((category, idx) => (
                <motion.div
                  key={category.name}
                  variants={staggerItem}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <GlassmorphismCard className="p-8 space-y-4 h-full flex flex-col justify-between hover:shadow-[0_20_60px_rgba(0,245,160,0.25)] transition-all duration-300">
                    <div className="space-y-3">
                      <motion.div
                        className="text-4xl"
                        whileHover={{ scale: 1.3, rotate: 20 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        {category.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold text-white">
                        {category.name}
                      </h3>
                    </div>
                    <div className="space-y-4 pt-4 border-t border-white/10">
                      <motion.p
                        className="text-3xl font-bold text-[#00F5A0]"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.3 }}
                      >
                        {category.count}
                      </motion.p>
                      <p className="text-sm text-gray-400">Active assets</p>
                      <AnimatedButton variant="outline" size="sm" className="w-full">
                        Explore
                      </AnimatedButton>
                    </div>
                  </GlassmorphismCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Market Trends */}
      <Section>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <SectionHeading
              title="Trending This Week"
              subtitle="Top gainers and losers"
              centered={false}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Top Gainers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <GlassmorphismCard className="p-8 h-full" glowColor="cyan">
                  <h3 className="text-xl font-bold text-white mb-6">Top Gainers</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Solana', symbol: 'SOL', change: '+45.23%' },
                      { name: 'Ripple', symbol: 'XRP', change: '+32.15%' },
                      { name: 'Cardano', symbol: 'ADA', change: '+28.91%' },
                    ].map((asset, idx) => (
                      <motion.div
                        key={asset.symbol}
                        className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.4 }}
                        whileHover={{ x: 5 }}
                      >
                        <div>
                          <p className="font-semibold text-white">{asset.name}</p>
                          <p className="text-sm text-gray-400">{asset.symbol}</p>
                        </div>
                        <motion.p
                          className="text-[#00F5A0] font-bold"
                          whileHover={{ scale: 1.1 }}
                        >
                          {asset.change}
                        </motion.p>
                      </motion.div>
                    ))}
                  </div>
                </GlassmorphismCard>
              </motion.div>

              {/* Top Losers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <GlassmorphismCard className="p-8 h-full">
                  <h3 className="text-xl font-bold text-white mb-6">Top Losers</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Litecoin', symbol: 'LTC', change: '-12.34%' },
                      { name: 'Chainlink', symbol: 'LINK', change: '-8.91%' },
                      { name: 'Polygon', symbol: 'MATIC', change: '-6.45%' },
                    ].map((asset, idx) => (
                      <motion.div
                        key={asset.symbol}
                        className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.4 }}
                        whileHover={{ x: -5 }}
                      >
                        <div>
                          <p className="font-semibold text-white">{asset.name}</p>
                          <p className="text-sm text-gray-400">{asset.symbol}</p>
                        </div>
                        <motion.p
                          className="text-[#FF6B6B] font-bold"
                          whileHover={{ scale: 1.1 }}
                        >
                          {asset.change}
                        </motion.p>
                      </motion.div>
                    ))}
                  </div>
                </GlassmorphismCard>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section darkBg>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="gradient-text">Start tracking today</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Get real-time market data, advanced analytics, and custom alerts for
              all 10,000+ cryptocurrencies.
            </p>
            <AnimatedButton variant="primary" size="lg">
              Explore Market Data
            </AnimatedButton>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
