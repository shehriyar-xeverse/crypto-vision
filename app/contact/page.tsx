'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/core/HeroSection'
import { Section } from '@/components/core/Section'
import { Container } from '@/components/core/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassmorphismCard } from '@/components/cards/GlassmorphismCard'
import { AnimatedButton } from '@/components/ui/AnimatedButton'
import { AnimatedFormInput } from '@/components/sections/AnimatedFormInput'
import { faqItems } from '@/lib/constants'
import { staggerContainer, staggerItem, fadeInUp, slideInUp } from '@/lib/animations'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'support@cryptovision.com',
      link: 'mailto:support@cryptovision.com',
    },
    {
      icon: '📞',
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: '📍',
      label: 'Address',
      value: 'San Francisco, CA, USA',
      link: '#',
    },
    {
      icon: '⏰',
      label: 'Support Hours',
      value: '24/7 Available',
      link: '#',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Get in Touch"
        subtitle="Have questions? We&apos;d love to hear from you. Our support team is here to help 24/7."
      />

      {/* Contact Form & Info */}
      <Section darkBg>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <GlassmorphismCard className="p-8 sm:p-12" glowColor="cyan">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Send us a Message
                </h2>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-[#00F5A0]/20 border border-[#00F5A0] rounded-lg text-[#00F5A0] text-sm"
                  >
                    ✓ Message sent successfully! We&apos;ll get back to you soon.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.1 }}
                  >
                    <motion.input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00F5A0] transition-colors"
                      whileFocus={{ scale: 1.02, borderColor: '#00F5A0' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    />
                    <motion.input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00F5A0] transition-colors"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    />
                  </motion.div>

                  <motion.input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00F5A0] transition-colors"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  />

                  <motion.textarea
                    name="message"
                    placeholder="Your message..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00F5A0] transition-colors resize-none"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <AnimatedButton variant="primary" size="lg" className="w-full">
                      Send Message
                    </AnimatedButton>
                  </motion.div>
                </form>
              </GlassmorphismCard>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <GlassmorphismCard className="p-6 space-y-3 hover:shadow-[0_10_40px_rgba(0,215,255,0.2)] transition-shadow duration-300 group cursor-pointer">
                    <motion.div
                      className="text-3xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      {info.icon}
                    </motion.div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <motion.p
                      className="text-white font-semibold group-hover:text-[#00D9FF] transition-colors"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + 0.2 }}
                    >
                      {info.value}
                    </motion.p>
                  </GlassmorphismCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Office Locations */}
      <Section>
        <Container>
          <div className="space-y-12">
            <SectionHeading
              title="Office Locations"
              subtitle="Visit us around the world"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  city: 'San Francisco',
                  country: 'USA',
                  address: '123 Market St, SF, CA 94105',
                  phone: '+1 (555) 123-4567',
                  icon: '🌉',
                },
                {
                  city: 'Singapore',
                  country: 'Singapore',
                  address: '456 Marina Bay, Singapore 018976',
                  phone: '+65 6789-0123',
                  icon: '🏙️',
                },
                {
                  city: 'London',
                  country: 'UK',
                  address: '789 Canary Wharf, London E14 5AB',
                  phone: '+44 (0) 20 1234 5678',
                  icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
                },
              ].map((office, idx) => (
                <motion.div
                  key={office.city}
                  variants={staggerItem}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <GlassmorphismCard className="p-8 space-y-4 h-full hover:shadow-[0_15_50px_rgba(0,245,160,0.2)] transition-shadow duration-300 group">
                    <motion.div
                      className="text-4xl"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      {office.icon}
                    </motion.div>
                    <motion.h3
                      className="text-2xl font-bold text-white group-hover:text-[#00F5A0] transition-colors"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + 0.2 }}
                    >
                      {office.city}
                    </motion.h3>
                    <p className="text-[#00F5A0] font-semibold">{office.country}</p>
                    <div className="space-y-2 pt-4 border-t border-white/10">
                      <motion.p
                        className="text-gray-300 text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.3 }}
                      >
                        {office.address}
                      </motion.p>
                      <motion.p
                        className="text-gray-300 text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.4 }}
                      >
                        {office.phone}
                      </motion.p>
                    </div>
                  </GlassmorphismCard>
                </motion.div>
              ))}
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
              subtitle="Find answers to common questions"
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
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <GlassmorphismCard className={`p-6 text-left transition-all duration-300 ${
                        expandedFaq === item.id
                          ? 'shadow-[0_10_40px_rgba(0,215,255,0.3)] ring-1 ring-[#00D9FF]'
                          : 'hover:shadow-[0_0_30px_rgba(0,245,160,0.2)]'
                      }`}>
                        <div className="flex items-center justify-between">
                          <motion.h3
                            className={`text-lg font-semibold transition-colors ${
                              expandedFaq === item.id ? 'text-[#00D9FF]' : 'text-white'
                            }`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                          >
                            {item.question}
                          </motion.h3>
                          <motion.div
                            animate={{
                              rotate: expandedFaq === item.id ? 180 : 0,
                            }}
                            transition={{ duration: 0.3, type: 'spring' }}
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
                            <motion.p
                              className="text-gray-300 leading-relaxed"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              {item.answer}
                            </motion.p>
                          </motion.div>
                        )}
                      </GlassmorphismCard>
                    </motion.div>
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
            className="text-center space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="gradient-text">Can&apos;t find what you need?</span>
            </h2>
            <p className="text-lg text-gray-300">
              Our support team is available 24/7 to help with any questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton variant="primary" size="lg">
                Start Live Chat
              </AnimatedButton>
              <AnimatedButton variant="outline" size="lg">
                Email Support
              </AnimatedButton>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
