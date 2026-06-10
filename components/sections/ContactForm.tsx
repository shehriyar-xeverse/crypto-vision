'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { GlassmorphismCard } from '@/components/cards/GlassmorphismCard'
import { AnimatedButton } from '@/components/ui/AnimatedButton'
import { shakeAnimation, checkmarkAnimation } from '@/lib/animations'

interface ContactFormProps {
  onSubmit?: (data: FormData) => void
}

interface FormData {
  name: string
  email: string
  message: string
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [focused, setFocused] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields')
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      if (onSubmit) {
        onSubmit(formData)
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      setError('Failed to submit form. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <GlassmorphismCard className="p-8 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0 }}
          className="relative"
        >
          <motion.label
            className="block text-sm font-medium text-gray-300 mb-2"
            animate={{
              color: focused === 'name' ? '#00F5A0' : '#A0A0A0',
              y: focused === 'name' ? -5 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            Name
          </motion.label>
          <motion.input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocused('name')}
            onBlur={() => setFocused(null)}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00F5A0] transition-colors"
            placeholder="Your name"
            animate={{
              borderColor:
                focused === 'name'
                  ? 'rgba(0, 245, 160, 0.5)'
                  : 'rgba(255, 255, 255, 0.2)',
              boxShadow:
                focused === 'name'
                  ? '0 0 20px rgba(0, 245, 160, 0.2)'
                  : '0 0 0px rgba(0, 245, 160, 0)',
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        {/* Email field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <motion.label
            className="block text-sm font-medium text-gray-300 mb-2"
            animate={{
              color: focused === 'email' ? '#00F5A0' : '#A0A0A0',
              y: focused === 'email' ? -5 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            Email
          </motion.label>
          <motion.input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused(null)}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00F5A0] transition-colors"
            placeholder="your@email.com"
            animate={{
              borderColor:
                focused === 'email'
                  ? 'rgba(0, 245, 160, 0.5)'
                  : 'rgba(255, 255, 255, 0.2)',
              boxShadow:
                focused === 'email'
                  ? '0 0 20px rgba(0, 245, 160, 0.2)'
                  : '0 0 0px rgba(0, 245, 160, 0)',
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        {/* Message field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <motion.label
            className="block text-sm font-medium text-gray-300 mb-2"
            animate={{
              color: focused === 'message' ? '#00F5A0' : '#A0A0A0',
              y: focused === 'message' ? -5 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            Message
          </motion.label>
          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocused('message')}
            onBlur={() => setFocused(null)}
            rows={5}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00F5A0] transition-colors resize-none"
            placeholder="Your message..."
            animate={{
              borderColor:
                focused === 'message'
                  ? 'rgba(0, 245, 160, 0.5)'
                  : 'rgba(255, 255, 255, 0.2)',
              boxShadow:
                focused === 'message'
                  ? '0 0 20px rgba(0, 245, 160, 0.2)'
                  : '0 0 0px rgba(0, 245, 160, 0)',
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        {/* Error message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              variants={shakeAnimation}
              animate={error ? 'animate' : 'rest'}
              className="text-red-400 text-sm"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit button with loading state */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <AnimatedButton
            type="submit"
            variant="primary"
            size="lg"
            className="w-full relative"
            disabled={isLoading || submitted}
          >
            {isLoading && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="w-5 h-5 border-2 border-[#050816] border-t-transparent rounded-full animate-spin" />
              </motion.div>
            )}

            {submitted && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.span variants={checkmarkAnimation} initial="hidden" animate="visible">
                  ✓
                </motion.span>
              </motion.div>
            )}

            <motion.span animate={{ opacity: isLoading || submitted ? 0 : 1 }}>
              {submitted ? 'Thank you!' : isLoading ? 'Sending...' : 'Send Message'}
            </motion.span>
          </AnimatedButton>
        </motion.div>
      </form>
    </GlassmorphismCard>
  )
}
