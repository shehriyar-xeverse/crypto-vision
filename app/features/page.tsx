'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/core/HeroSection'
import { Section } from '@/components/core/Section'
import { Container } from '@/components/core/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureCard } from '@/components/cards/FeatureCard'
import { GlassmorphismCard } from '@/components/cards/GlassmorphismCard'
import { AnimatedButton } from '@/components/ui/AnimatedButton'
import { FeatureGridAnimated } from '@/components/sections/FeatureGridAnimated'
import { AnimatedDetailSection } from '@/components/sections/AnimatedDetailSection'
import { AnimatedAccordion } from '@/components/sections/AnimatedAccordion'
import { features } from '@/lib/constants'
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations'

export default function FeaturesPage() {
  const detailedFeatures = [
    {
      id: 1,
      title: 'Real-Time Price Tracking',
      description:
        'Get live updates on cryptocurrency prices across 10,000+ assets. Our proprietary data feeds ensure you&apos;re always up-to-date with the latest market movements.',
      highlights: ['Live price updates', 'Multiple exchange feeds', 'Custom watchlists'],
      icon: '📊',
    },
    {
      id: 2,
      title: 'Advanced Analytics',
      description:
        'Professional-grade charting tools with 100+ technical indicators. Analyze trends, patterns, and make data-driven trading decisions with confidence.',
      highlights: ['Interactive charts', 'Technical indicators', 'Custom overlays'],
      icon: '📈',
    },
    {
      id: 3,
      title: 'Portfolio Management',
      description:
        'Track all your crypto investments in one unified dashboard. Monitor performance, diversification, and ROI across all your holdings.',
      highlights: [
        'Multi-wallet support',
        'Performance tracking',
        'Risk analytics',
      ],
      icon: '💼',
    },
  ]

  const securityFeatures = [
    'Enterprise-grade encryption',
    'Multi-factor authentication',
    'Cold storage for assets',
    'Regular security audits',
    'Compliance with regulations',
    'Insurance coverage',
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Powerful Trading Features"
        subtitle="Everything you need to become a successful crypto trader. From beginners to professionals, CryptoVision has you covered."
      />

      {/* Features Grid */}
      <Section darkBg>
        <Container>
          <div className="space-y-12">
            <SectionHeading
              title="Core Features"
              subtitle="Built for every trader"
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

      {/* Detailed Features */}
      <Section>
        <Container>
          <div className="space-y-20">
            <SectionHeading title="Feature Deep Dive" centered={false} />
            {detailedFeatures.map((feature, idx) => (
              <motion.div
                key={feature.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <AnimatedDetailSection
                  title={feature.title}
                  description={feature.description}
                  imagePlaceholder={feature.icon}
                  imageLeft={idx % 2 === 1}
                >
                  <ul className="space-y-3">
                    {feature.highlights.map((highlight) => (
                      <motion.li
                        key={highlight}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <span className="text-[#00F5A0] font-bold">✓</span>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </AnimatedDetailSection>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Security Section */}
      <Section darkBg>
        <Container>
          <div className="space-y-12">
            <SectionHeading
              title="Enterprise Security"
              subtitle="Your assets are protected with industry-leading security measures"
            />
            <AnimatedAccordion
              items={securityFeatures.map((feature) => ({
                id: feature,
                title: feature,
                content: (
                  <p className="text-gray-300">
                    We implement {feature.toLowerCase()} as part of our multi-layered
                    security approach to protect your crypto assets and personal
                    information.
                  </p>
                ),
              }))}
              allowMultiple={true}
            />
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
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
              <span className="gradient-text">Ready to get started?</span>
            </h2>
            <p className="text-lg text-gray-300">
              All features available on Pro and Enterprise plans
            </p>
            <AnimatedButton variant="primary" size="lg">
              Start Your Free Trial
            </AnimatedButton>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
