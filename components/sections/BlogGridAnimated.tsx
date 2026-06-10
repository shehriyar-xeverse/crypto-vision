'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GlassmorphismCard } from '@/components/cards/GlassmorphismCard'
import { staggerContainer, staggerItem, imageZoom, underlineAnimation } from '@/lib/animations'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  image?: string
}

interface BlogGridAnimatedProps {
  posts: BlogPost[]
}

export function BlogGridAnimated({ posts }: BlogGridAnimatedProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {posts.map((post) => (
        <motion.div key={post.id} variants={staggerItem}>
          <GlassmorphismCard className="overflow-hidden h-full flex flex-col hover:bg-white/[0.08] transition-colors">
            {/* Image */}
            <motion.div
              className="relative h-48 bg-gradient-to-br from-[#00F5A0]/20 to-[#00D9FF]/20 overflow-hidden"
              whileHover="hover"
              variants={imageZoom}
              initial={{ scale: 1 }}
            >
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-500">Image</p>
                </div>
              )}
            </motion.div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Category badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-3"
              >
                <span className="inline-block px-3 py-1 bg-[#00F5A0]/20 text-[#00F5A0] text-xs font-semibold rounded-full">
                  {post.category}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-xl font-bold text-white mb-3 leading-tight"
                whileHover="hover"
                variants={underlineAnimation}
                initial={{ width: '0%' }}
              >
                {post.title}
              </motion.h3>

              {/* Excerpt */}
              <p className="text-gray-400 text-sm mb-4 flex-grow">{post.excerpt}</p>

              {/* Date */}
              <motion.p
                className="text-xs text-gray-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {post.date}
              </motion.p>
            </div>
          </GlassmorphismCard>
        </motion.div>
      ))}
    </motion.div>
  )
}
