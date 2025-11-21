'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiZap, FiHeart, FiUsers } from 'react-icons/fi'

const CorePillars = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const pillars = [
    {
      icon: <FiZap className="text-5xl" />,
      title: 'Accessibility First',
      description: 'Built for everyone. No gatekeeping, no barriers. Just pure music community.',
      color: 'accent-green',
    },
    {
      icon: <FiHeart className="text-5xl" />,
      title: 'Artist Support & Direct Revenue',
      description: 'Direct payments, forum currency, and fair compensation for creators.',
      color: 'accent-purple',
    },
    {
      icon: <FiUsers className="text-5xl" />,
      title: 'Community Co-op Ownership',
      description: 'Built by the community, for the community. Your voice matters.',
      color: 'accent-blue',
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-24 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Our Core <span className="gradient-text">Pillars</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              The foundation of everything we build at Thé Party
            </p>
          </motion.div>

          {/* Pillars Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="feature-card text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-${pillar.color}/20 text-${pillar.color} mb-6`}
                >
                  {pillar.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Checkmarks */}
          <motion.div variants={itemVariants} className="mt-16 flex flex-wrap justify-center gap-6">
            {['Accessibility First', 'Artist Support & Direct Revenue', 'Community Co-op Ownership'].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-card px-6 py-3 rounded-xl"
              >
                <span className="text-accent-green text-xl">✓</span>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CorePillars
