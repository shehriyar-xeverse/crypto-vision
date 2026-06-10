'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/core/HeroSection'
import { Section } from '@/components/core/Section'
import { Container } from '@/components/core/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureCard } from '@/components/cards/FeatureCard'
import { CryptoCard } from '@/components/cards/CryptoCard'
import { PricingCard } from '@/components/cards/PricingCard'
import { AnimatedButton } from '@/components/ui/AnimatedButton'
import { GlassmorphismCard } from '@/components/cards/GlassmorphismCard'
import { MarketTicker } from '@/components/sections/MarketTicker'
import { AnimatedStats } from '@/components/sections/AnimatedStats'
import { AnimatedTimeline } from '@/components/sections/AnimatedTimeline'
import { TestimonialCarousel } from '@/components/sections/TestimonialCarousel'
import {
  cryptocurrencies,
  features,
  pricingPlans,
  howItWorks,
  testimonials,
} from '@/lib/constants'
import { staggerContainer, staggerItem, fadeInUp, liftOnHover, buttonPulse } from '@/lib/animations'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Track Crypto Like Never Before"
        subtitle="Real-time price tracking, smart analytics, and portfolio management for the modern investor. Join thousands of traders using CryptoVision."
        cta1={{ text: 'Get Started Free' }}
        cta2={{ text: 'Explore Markets' }}
      />

      {/* Live Market Ticker Section */}
      <MarketTicker cryptos={cryptocurrencies} duration={30} />

      {/* Features Preview Section */}
      <Section darkBg>
        <Container>
          <div className="space-y-12">
            <SectionHeading
              title="Powerful Features"
              subtitle="Everything you need to succeed in crypto trading"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max"
            >
              {features.map((feature, i) => (
                <motion.div key={feature.id} variants={staggerItem} className="h-full">
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    index={i}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Product Showcase Section */}
      <Section>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Advanced Analytics{' '}
                <span className="gradient-text">At Your Fingertips</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Analyze market trends with professional-grade charting tools and
                indicators. Make informed decisions with real-time data and
                historical analysis.
              </p>
              <ul className="space-y-3">
                {[
                  'Interactive candlestick charts',
                  'Technical analysis indicators',
                  'Custom chart overlays',
                  'Price alert notifications',
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="text-[#00F5A0] font-bold">→</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <AnimatedButton variant="primary" size="lg">
                Start Analyzing
              </AnimatedButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover="hover"
              variants={liftOnHover}
            >
              <GlassmorphismCard className="p-8 h-full" glowColor="cyan">
                <div className="space-y-6 h-full flex flex-col">
                  {/* Candlestick Chart Visualization */}
                  <motion.div
                    className="flex-grow bg-gradient-to-br from-[#00F5A0]/10 to-[#00D9FF]/10 rounded-lg p-6 flex items-end justify-center gap-2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {[40, 60, 45, 75, 55, 80, 65, 90].map((height, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-[#00F5A0] to-[#00D9FF] rounded-sm opacity-70 hover:opacity-100 transition-opacity"
                        style={{ height: `${height}%` }}
                        whileHover={{ scale: 1.1, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      />
                    ))}
                  </motion.div>
                  
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3">
                    <motion.div
                      className="bg-white/5 rounded-lg p-3 text-center"
                      whileHover={{ scale: 1.05, bg: 'rgba(255,255,255,0.1)' }}
                    >
                      <p className="text-xs text-gray-400 mb-1">Volume</p>
                      <p className="text-base font-bold text-[#00F5A0]">1.2M</p>
                    </motion.div>
                    <motion.div
                      className="bg-white/5 rounded-lg p-3 text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className="text-xs text-gray-400 mb-1">High</p>
                      <p className="text-base font-bold text-[#00D9FF]">$52.4K</p>
                    </motion.div>
                    <motion.div
                      className="bg-white/5 rounded-lg p-3 text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className="text-xs text-gray-400 mb-1">Change</p>
                      <p className="text-base font-bold text-[#00F5A0]">+12.5%</p>
                    </motion.div>
                  </div>
                </div>
              </GlassmorphismCard>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* How It Works */}
      <Section darkBg>
        <Container>
          <div className="space-y-12">
            <SectionHeading
              title="How It Works"
              subtitle="Get started in just three simple steps"
            />
            <AnimatedTimeline steps={howItWorks} />
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section>
        <Container>
          <div className="space-y-12">
            <SectionHeading
              title="Loved by Traders"
              subtitle="See what our community says about CryptoVision"
            />
            <TestimonialCarousel testimonials={testimonials} autoPlayInterval={5000} />
          </div>
        </Container>
      </Section>

      {/* Pricing Section */}
      <Section darkBg>
        <Container>
          <div className="space-y-12">
            <SectionHeading
              title="Simple, Transparent Pricing"
              subtitle="Choose the plan that fits your needs"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {pricingPlans.map((plan, i) => (
                <motion.div key={plan.id} variants={staggerItem}>
                  <PricingCard
                    name={plan.name}
                    price={plan.price}
                    description={plan.description}
                    features={plan.features}
                    cta={plan.cta}
                    highlighted={plan.highlighted}
                    index={i}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section className="relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 w-96 h-96 bg-[#00F5A0]/10 rounded-full blur-3xl -z-10"
        />
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="gradient-text">Ready to master crypto?</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Join thousands of traders already using CryptoVision to track,
              analyze, and grow their portfolios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div variants={buttonPulse} animate="animate">
                <AnimatedButton variant="primary" size="lg">
                  Start Free Trial
                </AnimatedButton>
              </motion.div>
              <AnimatedButton variant="outline" size="lg">
                Schedule Demo
              </AnimatedButton>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
