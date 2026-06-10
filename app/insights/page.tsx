'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/core/HeroSection'
import { Section } from '@/components/core/Section'
import { Container } from '@/components/core/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassmorphismCard } from '@/components/cards/GlassmorphismCard'
import { AnimatedButton } from '@/components/ui/AnimatedButton'
import { AnimatedTimeline } from '@/components/sections/AnimatedTimeline'
import { staggerContainer, staggerItem, fadeInUp, slideInUp } from '@/lib/animations'

export default function InsightsPage() {
  const reports = [
    {
      id: 1,
      title: 'Market Analysis: Q2 2024 Performance',
      description:
        'Comprehensive analysis of major cryptocurrency performance in Q2 2024. Including Bitcoin dominance trends and altcoin movements.',
      category: 'Market Analysis',
      date: 'Jun 15, 2024',
      icon: '📊',
    },
    {
      id: 2,
      title: 'DeFi Protocols: The Future of Finance',
      description:
        'Deep dive into emerging DeFi protocols and their impact on traditional finance. Key insights for portfolio allocation.',
      category: 'DeFi',
      date: 'Jun 10, 2024',
      icon: '🏦',
    },
    {
      id: 3,
      title: 'AI Tokens: Investment Opportunities',
      description:
        'Exploring the explosive growth of AI-related tokens and identifying potential investment opportunities in this emerging sector.',
      category: 'Technology',
      date: 'Jun 5, 2024',
      icon: '🤖',
    },
    {
      id: 4,
      title: 'Regulatory Landscape 2024',
      description:
        'Global regulatory updates affecting the crypto market. What traders need to know about compliance and trading restrictions.',
      category: 'Regulations',
      date: 'May 28, 2024',
      icon: '⚖️',
    },
    {
      id: 5,
      title: 'Layer 2 Scaling Solutions',
      description:
        'Comprehensive guide to Layer 2 solutions and their impact on transaction costs and network speed in crypto trading.',
      category: 'Technology',
      date: 'May 20, 2024',
      icon: '🔗',
    },
    {
      id: 6,
      title: 'Risk Management Strategies',
      description:
        'Essential risk management techniques for crypto traders. Learn how to protect your portfolio from market volatility.',
      category: 'Trading Tips',
      date: 'May 12, 2024',
      icon: '🛡️',
    },
  ]

  const trendingTopics = [
    { name: 'Bitcoin Halving', mentions: 2300 },
    { name: 'Ethereum Upgrades', mentions: 1850 },
    { name: 'Solana Ecosystem', mentions: 1620 },
    { name: 'DeFi Yield Farming', mentions: 1490 },
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Market Intelligence Hub"
        subtitle="Get expert insights, analysis, and research to make informed trading decisions. Stay ahead of market trends."
      />

      {/* Featured Report */}
      <Section darkBg>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <GlassmorphismCard className="p-8 sm:p-12 ring-2 ring-[#00D9FF]" glowColor="cyan">
              <div className="space-y-6">
                <div>
                  <div className="inline-block px-4 py-2 bg-[#00D9FF]/20 text-[#00D9FF] rounded-full text-sm font-semibold mb-4">
                    Featured Report
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-3">
                    Market Analysis: Q2 2024 Performance
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">
                    Comprehensive analysis of major cryptocurrency performance in
                    Q2 2024. Discover key trends, opportunities, and risks.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm">Published</p>
                    <p className="text-white font-semibold">Jun 15, 2024</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Category</p>
                    <p className="text-[#00F5A0] font-semibold">Market Analysis</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Read Time</p>
                    <p className="text-white font-semibold">12 minutes</p>
                  </div>
                </div>
                <AnimatedButton variant="primary" size="md">
                  Read Full Report
                </AnimatedButton>
              </div>
            </GlassmorphismCard>
          </motion.div>
        </Container>
      </Section>

      {/* Reports Grid */}
      <Section>
        <Container>
          <div className="space-y-12">
            <SectionHeading title="Latest Reports" subtitle="Expert analysis and research" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {reports.slice(1).map((report, idx) => (
                <motion.div
                  key={report.id}
                  variants={staggerItem}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <GlassmorphismCard className="p-8 h-full flex flex-col justify-between space-y-4 hover:shadow-[0_10_40px_rgba(0,215,255,0.2)] transition-shadow duration-300 cursor-pointer group">
                    <div className="space-y-3">
                      <motion.div
                        className="text-4xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        {report.icon}
                      </motion.div>
                      <motion.p
                        className="text-xs text-[#00D9FF] font-semibold uppercase"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.2 }}
                      >
                        {report.category}
                      </motion.p>
                      <h3 className="text-lg font-bold text-white leading-tight group-hover:text-[#00D9FF] transition-colors">
                        {report.title}
                      </h3>
                      <p className="text-gray-300 text-sm">{report.description}</p>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <p className="text-xs text-gray-400">{report.date}</p>
                      <motion.span
                        className="text-[#00F5A0] font-bold opacity-0 group-hover:opacity-100"
                        initial={{ x: -10 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring' }}
                      >
                        →
                      </motion.span>
                    </div>
                  </GlassmorphismCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Trending Topics */}
      <Section darkBg>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionHeading
              title="Trending Topics"
              subtitle="What the community is talking about"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
            >
              {trendingTopics.map((topic, idx) => (
                <motion.div
                  key={topic.name}
                  variants={staggerItem}
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <GlassmorphismCard className="p-8 text-center space-y-3 h-full hover:shadow-[0_20_50px_rgba(0,245,160,0.25)] transition-shadow duration-300">
                    <motion.p
                      className="text-4xl font-bold text-[#00F5A0]"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15, type: 'spring', stiffness: 200 }}
                    >
                      #{idx + 1}
                    </motion.p>
                    <motion.h3
                      className="text-lg font-bold text-white"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + 0.1 }}
                    >
                      {topic.name}
                    </motion.h3>
                    <motion.p
                      className="text-gray-400 text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + 0.2 }}
                    >
                      {topic.mentions.toLocaleString()} mentions
                    </motion.p>
                  </GlassmorphismCard>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Newsletter Section */}
      <Section>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto"
          >
            <GlassmorphismCard className="p-12 text-center space-y-6 hover:shadow-[0_20_60px_rgba(0,215,255,0.3)] transition-shadow duration-300" glowColor="cyan">
              <motion.h2
                className="text-3xl font-bold text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Weekly Newsletter
              </motion.h2>
              <motion.p
                className="text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Get the latest crypto insights and analysis delivered to your inbox
                every week.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <motion.input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-grow px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00F5A0] transition-colors"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
                <AnimatedButton variant="primary">Subscribe</AnimatedButton>
              </motion.div>
              <motion.p
                className="text-xs text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                We respect your privacy. Unsubscribe at any time.
              </motion.p>
            </GlassmorphismCard>
          </motion.div>
        </Container>
      </Section>

      {/* Research Highlights */}
      <Section darkBg>
        <Container>
          <div className="space-y-12">
            <SectionHeading
              title="Research Highlights"
              subtitle="Key findings from our latest studies"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  title: 'Smart money is accumulating Bitcoin',
                  finding:
                    'Large wallet addresses have increased holdings by 15% in the last month',
                  icon: '💰',
                },
                {
                  title: 'DeFi protocols seeing record TVL',
                  finding:
                    'Total Value Locked in DeFi has surpassed $100B, signaling strong user confidence',
                  icon: '📈',
                },
                {
                  title: 'Institutional adoption accelerating',
                  finding:
                    'Fortune 500 companies increasingly allocating 1-5% to crypto assets',
                  icon: '🏢',
                },
              ].map((highlight, idx) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ x: 5 }}
                >
                  <GlassmorphismCard className="p-6 sm:p-8 hover:shadow-[0_10_40px_rgba(0,215,255,0.15)] transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <motion.span
                        className="text-3xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        {highlight.icon}
                      </motion.span>
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00D9FF] transition-colors">
                          {highlight.title}
                        </h3>
                        <p className="text-gray-300">{highlight.finding}</p>
                      </div>
                    </div>
                  </GlassmorphismCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="gradient-text">Stay informed, stay ahead</span>
            </h2>
            <p className="text-lg text-gray-300">
              Get access to exclusive research and market intelligence
            </p>
            <AnimatedButton variant="primary" size="lg">
              Get Premium Access
            </AnimatedButton>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
