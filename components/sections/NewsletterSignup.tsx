'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { GlassmorphismCard } from '@/components/cards/GlassmorphismCard'
import { AnimatedButton } from '@/components/ui/AnimatedButton'
import { shakeAnimation, checkmarkAnimation } from '@/lib/animations'

interface NewsletterSignupProps {
  onSubscribe?: (email: string) => void
  title?: string
  description?: string
}

export function NewsletterSignup({
  onSubscribe,
  title = 'Subscribe to Our Newsletter',
  description = 'Get the latest crypto insights and market analysis delivered to your inbox.',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (onSubscribe) {
        onSubscribe(email)
      }

      setSubmitted(true)
      setEmail('')

      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      setError('Failed to subscribe. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <GlassmorphismCard className="p-8 md:p-12 text-center max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-300 mb-8">{description}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email input */}
          <motion.div
            className="relative"
            animate={{
              boxShadow: isFocused
                ? '0 0 30px rgba(0, 245, 160, 0.2)'
                : '0 0 0px rgba(0, 245, 160, 0)',
            }}
          >
            <motion.input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError('')
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="your@email.com"
              className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00F5A0] transition-colors"
              animate={{
                borderColor: isFocused
                  ? 'rgba(0, 245, 160, 0.5)'
                  : 'rgba(255, 255, 255, 0.2)',
              }}
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
                animate-={error ? 'animate' : 'rest'}
                className="text-red-400 text-sm"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit button */}
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
              {submitted ? 'Subscribed!' : isLoading ? 'Subscribing...' : 'Subscribe Now'}
            </motion.span>
          </AnimatedButton>
        </form>
      </GlassmorphismCard>
    </motion.div>
  )
}
