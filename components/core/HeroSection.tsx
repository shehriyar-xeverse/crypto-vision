'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from './Container'
import { AnimatedButton } from '@/components/ui/AnimatedButton'
import { fadeIn, fadeInUp } from '@/lib/animations'

interface HeroSectionProps {
  title: string
  subtitle?: string
  cta1?: { text: string; href?: string; onClick?: () => void }
  cta2?: { text: string; href?: string; onClick?: () => void }
  gradient?: boolean
}

export function HeroSection({
  title,
  subtitle,
  cta1,
  cta2,
  gradient = true,
}: HeroSectionProps) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 left-10 w-72 h-72 bg-[#00F5A0]/10 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-3xl -z-10"
      />

      <Container>
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight ${
                gradient
                  ? 'bg-gradient-to-r from-[#00F5A0] via-[#00D9FF] to-[#6E56CF] bg-clip-text text-transparent'
                  : 'text-white'
              }`}
            >
              {title}
            </h1>
          </motion.div>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}

          {/* CTA Buttons */}
          {(cta1 || cta2) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              {cta1 && (
                <AnimatedButton
                  variant="primary"
                  size="lg"
                  onClick={cta1.onClick}
                  className={cta1.href ? 'cursor-pointer' : ''}
                >
                  {cta1.text}
                </AnimatedButton>
              )}
              {cta2 && (
                <AnimatedButton
                  variant="outline"
                  size="lg"
                  onClick={cta2.onClick}
                >
                  {cta2.text}
                </AnimatedButton>
              )}
            </motion.div>
          )}
        </div>
      </Container>
    </motion.section>
  )
}
