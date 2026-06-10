'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GlassmorphismCard } from '@/components/cards/GlassmorphismCard'

interface AccordionItem {
  id: string
  title: string
  content: string | React.ReactNode
}

interface AnimatedAccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
}

export function AnimatedAccordion({
  items,
  allowMultiple = false,
}: AnimatedAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)

    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      if (!allowMultiple) {
        newOpenItems.clear()
      }
      newOpenItems.add(id)
    }

    setOpenItems(newOpenItems)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openItems.has(item.id)

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassmorphismCard
              className="overflow-hidden"
              onClick={() => toggleItem(item.id)}
            >
              <motion.button
                className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
                initial={false}
              >
                <span className="font-bold text-white text-lg">{item.title}</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#00F5A0] text-xl flex-shrink-0 ml-4"
                >
                  ▼
                </motion.div>
              </motion.button>

              {/* Content */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-300 border-t border-white/10">
                      {typeof item.content === 'string' ? (
                        <p className="leading-relaxed">{item.content}</p>
                      ) : (
                        item.content
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassmorphismCard>
          </motion.div>
        )
      })}
    </div>
  )
}
