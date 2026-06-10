'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/animations'

interface FeatureItem {
  name: string
  free: boolean | string
  pro: boolean | string
  enterprise: boolean | string
}

interface PricingTableAnimatedProps {
  features: FeatureItem[]
}

export function PricingTableAnimated({ features }: PricingTableAnimatedProps) {
  const renderValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? '✓' : '✗'
    }
    return value
  }

  const getColor = (value: boolean | string, plan: 'free' | 'pro' | 'enterprise') => {
    if (value === false) return 'text-gray-500'
    if (value === true) {
      return plan === 'enterprise'
        ? 'text-[#6E56CF]'
        : plan === 'pro'
          ? 'text-[#00F5A0]'
          : 'text-gray-300'
    }
    return 'text-gray-300'
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="overflow-x-auto"
    >
      <table className="w-full">
        <thead>
          <tr>
            <motion.th
              variants={staggerItem}
              className="text-left py-4 px-6 text-white font-bold"
            >
              Feature
            </motion.th>
            <motion.th
              variants={staggerItem}
              className="text-center py-4 px-6 text-gray-300 font-bold"
            >
              Starter
            </motion.th>
            <motion.th
              variants={staggerItem}
              className="text-center py-4 px-6 text-[#00F5A0] font-bold"
            >
              Pro
            </motion.th>
            <motion.th
              variants={staggerItem}
              className="text-center py-4 px-6 text-[#6E56CF] font-bold"
            >
              Enterprise
            </motion.th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {features.map((feature, idx) => (
            <motion.tr
              key={idx}
              variants={staggerItem}
              className="hover:bg-white/5 transition-colors"
            >
              <td className="py-4 px-6 text-gray-300">{feature.name}</td>
              <td className={`text-center py-4 px-6 ${getColor(feature.free, 'free')}`}>
                {renderValue(feature.free)}
              </td>
              <td className={`text-center py-4 px-6 ${getColor(feature.pro, 'pro')}`}>
                {renderValue(feature.pro)}
              </td>
              <td
                className={`text-center py-4 px-6 ${getColor(
                  feature.enterprise,
                  'enterprise'
                )}`}
              >
                {renderValue(feature.enterprise)}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  )
}
