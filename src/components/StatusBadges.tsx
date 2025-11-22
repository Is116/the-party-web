'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiStar, FiUsers, FiZap } from 'react-icons/fi'

const StatusBadges = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const badges = [
    {
      icon: <FiStar className="text-5xl" />,
      name: 'CREATOR',
      color: 'status-creator',
      description: 'For artists, producers, and content creators who actively share their work.',
      requirement: 'Create 1 item per cycle to maintain status',
      features: ['Upload releases', 'Share mixes', 'Post content', 'Build following'],
    },
    {
      icon: <FiUsers className="text-5xl" />,
      name: 'ORGANIZER',
      color: 'status-organizer',
      description: 'For event organizers who bring the community together.',
      requirement: 'Organize 1 event per cycle to maintain status',
      features: ['Create events', 'Sell tickets', 'Manage lineups', 'Build community'],
    },
    {
      icon: <FiZap className="text-5xl" />,
      name: 'SOULCHILD',
      color: 'status-soulchild',
      description: 'The ultimate badge for those who embody the spirit of Thé Party.',
      requirement: 'Active participation across all areas',
      features: ['All privileges', 'Special perks', 'Community leader', 'Early access'],
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
              Gamification: <span className="gradient-text">Status</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              Champion active participation. Users earn special badges based on their contribution frequency.
            </p>
          </div>

          {/* Badges Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                {/* Badge Card */}
                <div className={`card border-2 border-${badge.color}/30 hover:border-${badge.color} transition-all duration-300`}>
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-${badge.color}/20 text-${badge.color} mb-6`}
                  >
                    {badge.icon}
                  </motion.div>

                  {/* Badge Name */}
                  <div className={`inline-block px-6 py-2 rounded-full bg-${badge.color}/20 border-2 border-${badge.color} mb-4`}>
                    <span className={`text-${badge.color} font-black text-sm tracking-wider`}>
                      {badge.name}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {badge.description}
                  </p>

                  {/* Requirement */}
                  <div className="mb-6 p-4 bg-primary-dark/50 rounded-xl">
                    <div className="text-xs text-text-secondary mb-1">Requirement:</div>
                    <div className="font-semibold text-sm">{badge.requirement}</div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {badge.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <span className={`text-${badge.color}`}>✓</span>
                        <span className="text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-${badge.color}/10 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
              </motion.div>
            ))}
          </div>

          {/* Constraint Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="inline-block bg-card px-8 py-4 rounded-2xl border border-accent-green/30">
              <p className="text-text-secondary">
                <span className="font-bold text-accent-green">Note:</span> Users must Create/Organize 1 item per cycle (X) to maintain status.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatusBadges
