'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/core/HeroSection'
import { Section } from '@/components/core/Section'
import { Container } from '@/components/core/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassmorphismCard } from '@/components/cards/GlassmorphismCard'
import { companyValues, teamMembers } from '@/lib/constants'
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations'

export default function AboutPage() {
  const milestones = [
    { year: '2020', event: 'CryptoVision founded' },
    { year: '2021', event: '100,000 active traders' },
    { year: '2022', event: 'Series B funding - $50M' },
    { year: '2023', event: '1M+ traders, global expansion' },
    { year: '2024', event: 'Enterprise solutions launched' },
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="About CryptoVision"
        subtitle="We&apos;re on a mission to democratize cryptocurrency trading. Built by traders, for traders."
      />

      {/* Mission & Vision */}
      <Section darkBg>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                We believe cryptocurrency trading should be accessible to everyone.
                Our mission is to provide the tools, data, and community needed for
                traders of all levels to succeed in the digital economy.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Since 2020, we&apos;ve been dedicated to creating the most intuitive
                and powerful trading platform in the world.
              </p>
            </div>
            <GlassmorphismCard className="p-8" glowColor="cyan">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To become the global leader in crypto trading technology, trusted
                  by millions of traders, institutions, and developers worldwide.
                </p>
                <ul className="space-y-2 pt-4">
                  {[
                    'Democratize access to financial markets',
                    'Enable informed trading decisions',
                    'Foster a community of learners',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <span className="text-[#00F5A0]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassmorphismCard>
          </motion.div>
        </Container>
      </Section>

      {/* Company Timeline */}
      <Section>
        <Container>
          <div className="space-y-12">
            <SectionHeading
              title="Our Journey"
              subtitle="Key milestones in our growth"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-8 items-center"
                >
                  <div className="flex-shrink-0 w-32">
                    <p className="text-3xl font-bold gradient-text">
                      {milestone.year}
                    </p>
                  </div>
                  <div className="flex-grow">
                    <GlassmorphismCard className="p-6">
                      <p className="text-lg text-white font-semibold">
                        {milestone.event}
                      </p>
                    </GlassmorphismCard>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Company Values */}
      <Section darkBg>
        <Container>
          <div className="space-y-12">
            <SectionHeading
              title="Our Values"
              subtitle="What drives everything we do"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {companyValues.map((value) => (
                <motion.div key={value.id} variants={staggerItem}>
                  <GlassmorphismCard className="p-8 h-full text-center space-y-4">
                    <div className="text-5xl">{value.icon}</div>
                    <h3 className="text-xl font-bold text-white">{value.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </GlassmorphismCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section>
        <Container>
          <div className="space-y-12">
            <SectionHeading
              title="Our Team"
              subtitle="Passionate individuals building the future of crypto trading"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {teamMembers.map((member) => (
                <motion.div key={member.id} variants={staggerItem}>
                  <GlassmorphismCard className="p-8 text-center space-y-4">
                    <div className="text-6xl">{member.avatar}</div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {member.name}
                      </h3>
                      <p className="text-[#00F5A0] text-sm font-semibold">
                        {member.role}
                      </p>
                    </div>
                  </GlassmorphismCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section darkBg>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { label: 'Active Traders', value: '1M+' },
              { label: 'Countries', value: '150+' },
              { label: 'Assets Tracked', value: '10K+' },
              { label: 'Daily Trades', value: '500M+' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <GlassmorphismCard className="p-8 text-center space-y-3">
                  <p className="text-4xl sm:text-5xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-gray-300">{stat.label}</p>
                </GlassmorphismCard>
              </motion.div>
            ))}
          </motion.div>
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
              <span className="gradient-text">Join our community</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Be part of a movement to democratize cryptocurrency trading
            </p>
            <button className="px-8 py-4 bg-[#00F5A0] text-[#050816] font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,245,160,0.4)] transition-all">
              Get Started Today
            </button>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
