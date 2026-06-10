'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/core/HeroSection'
import { Section } from '@/components/core/Section'
import { Container } from '@/components/core/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PricingCard } from '@/components/cards/PricingCard'
import { GlassmorphismCard } from '@/components/cards/GlassmorphismCard'
import { AnimatedButton } from '@/components/ui/AnimatedButton'
import { pricingPlans, faqItems } from '@/lib/constants'
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations'

export default function PricingPage() {
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null)

  const comparisonFeatures = [
    { name: 'Real-time price tracking', starter: true, pro: true, enterprise: true },
    { name: 'Basic charting', starter: true, pro: true, enterprise: true },
    { name: 'Advanced analytics', starter: false, pro: true, enterprise: true },
    { name: 'Custom indicators', starter: false, pro: true, enterprise: true },
    { name: 'Price alerts', starter: '10', pro: 'Unlimited', enterprise: 'Unlimited' },
    { name: 'API access', starter: false, pro: true, enterprise: true },
    { name: 'Portfolio tracking', starter: true, pro: true, enterprise: true },
    { name: 'Mobile app', starter: true, pro: true, enterprise: true },
    { name: 'Priority support', starter: false, pro: true, enterprise: true },
    { name: 'Dedicated account manager', starter: false, pro: false, enterprise: true },
    { name: 'White-label solutions', starter: false, pro: false, enterprise: true },
    { name: 'Custom integrations', starter: false, pro: false, enterprise: true },
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Transparent Pricing"
        subtitle="Choose the perfect plan for your trading needs. No hidden fees, cancel anytime."
      />

      {/* Pricing Cards */}
      <Section darkBg>
        <Container>
          <div className="space-y-12">
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

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12 p-6 bg-[#00F5A0]/10 border border-[#00F5A0]/20 rounded-xl"
            >
              <p className="text-gray-300">
                All plans include a{' '}
                <span className="text-[#00F5A0] font-bold">30-day free trial</span>{' '}
                and a money-back guarantee. No credit card required.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Comparison Table */}
      <Section>
        <Container>
          <div className="space-y-12">
            <SectionHeading
              title="Feature Comparison"
              subtitle="Detailed comparison of all plans"
              centered={true}
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="overflow-x-auto"
            >
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-white font-semibold">
                      Feature
                    </th>
                    <th className="text-center py-4 px-4 text-white font-semibold">
                      Starter
                    </th>
                    <th className="text-center py-4 px-4 text-white font-semibold">
                      Pro
                    </th>
                    <th className="text-center py-4 px-4 text-white font-semibold">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, idx) => (
                    <tr
                      key={feature.name}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-4 px-4 text-gray-300 text-sm">
                        {feature.name}
                      </td>
                      <td className="text-center py-4 px-4">
                        {typeof feature.starter === 'boolean' ? (
                          feature.starter ? (
                            <span className="text-[#00F5A0]">✓</span>
                          ) : (
                            <span className="text-gray-500">—</span>
                          )
                        ) : (
                          <span className="text-white text-sm">
                            {feature.starter}
                          </span>
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {typeof feature.pro === 'boolean' ? (
                          feature.pro ? (
                            <span className="text-[#00F5A0]">✓</span>
                          ) : (
                            <span className="text-gray-500">—</span>
                          )
                        ) : (
                          <span className="text-white text-sm">{feature.pro}</span>
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {typeof feature.enterprise === 'boolean' ? (
                          feature.enterprise ? (
                            <span className="text-[#00F5A0]">✓</span>
                          ) : (
                            <span className="text-gray-500">—</span>
                          )
                        ) : (
                          <span className="text-white text-sm">
                            {feature.enterprise}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section darkBg>
        <Container>
          <div className="space-y-12">
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Get answers to common questions about our pricing and plans"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-4 max-w-2xl mx-auto"
            >
              {faqItems.map((item, idx) => (
                <motion.div key={item.id} variants={staggerItem}>
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === item.id ? null : item.id)
                    }
                    className="w-full"
                  >
                    <GlassmorphismCard className="p-6 text-left hover:shadow-[0_0_30px_rgba(0,245,160,0.4)] transition-all">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">
                          {item.question}
                        </h3>
                        <motion.div
                          animate={{
                            rotate: expandedFaq === item.id ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-[#00F5A0] text-xl">▼</span>
                        </motion.div>
                      </div>

                      {expandedFaq === item.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-white/10"
                        >
                          <p className="text-gray-300 leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </GlassmorphismCard>
                  </button>
                </motion.div>
              ))}
            </motion.div>
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
            className="text-center space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="gradient-text">Pick your plan and start trading</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              All plans come with a 30-day free trial. No credit card required to
              start.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton variant="primary" size="lg">
                Get Started Free
              </AnimatedButton>
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
