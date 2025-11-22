'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMessageSquare, FiCalendar, FiMusic, FiUsers, FiTrendingUp } from 'react-icons/fi'

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <FiMessageSquare className="text-4xl" />,
      title: 'Community Forums',
      description: 'Forum, Feed, and Pirate channels. Built for deep discussion and transient social updates.',
      details: [
        'Structured channels & subchannels',
        'In-app currency for contributions',
        'Upvote/downvote system',
        'Push notifications for threads',
      ],
    },
    {
      icon: <FiCalendar className="text-4xl" />,
      title: 'Events & Tickets',
      description: 'Comprehensive event listings with integrated ticketing and direct support mechanisms.',
      details: [
        'Native ticketing system',
        'Event creation & management',
        'Artist lineup integration',
        'Real-time ticket availability',
      ],
    },
    {
      icon: <FiMusic className="text-4xl" />,
      title: 'Music Hub',
      description: 'Listening Station, Releases, Mixes/Tracklists, and Archive for past shows.',
      details: [
        'Stream releases & mixes',
        'Discover new artists',
        'Browse archived shows',
        'Create playlists',
      ],
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="features" className="py-16 sm:py-20 md:py-24 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
              Core <span className="gradient-text">Architecture</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              Everything you need to connect, discover, and thrive in the music community
            </p>
          </motion.div>

          {/* Features List */}
          <div className="space-y-8 sm:space-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                  {/* Icon & Title */}
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-accent-green/20 text-accent-green mb-4 sm:mb-6"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{feature.title}</h3>
                    <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed mb-4 sm:mb-6">
                      {feature.description}
                    </p>
                    <a href="#download">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-accent-green font-semibold flex items-center space-x-2 hover:space-x-3 transition-all"
                      >
                        <span>Explore</span>
                        <span>→</span>
                      </motion.button>
                    </a>
                  </div>

                  {/* Feature Details */}
                  <div className="space-y-3 sm:space-y-4">
                    {feature.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 10 }}
                        className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-primary-dark/50 rounded-xl"
                      >
                        <span className="text-accent-green text-lg sm:text-xl mt-0.5">✓</span>
                        <span className="text-sm sm:text-base text-text-secondary">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Features Grid */}
          <motion.div variants={itemVariants} className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="feature-card">
              <FiUsers className="text-2xl sm:text-3xl text-accent-green mb-3 sm:mb-4" />
              <h4 className="font-bold text-lg sm:text-xl mb-2">Social Feed</h4>
              <p className="text-text-secondary text-xs sm:text-sm">Chronological feed with no algorithmic manipulation</p>
            </div>
            <div className="feature-card">
              <FiTrendingUp className="text-2xl sm:text-3xl text-accent-purple mb-3 sm:mb-4" />
              <h4 className="font-bold text-lg sm:text-xl mb-2">Status Badges</h4>
              <p className="text-text-secondary text-xs sm:text-sm">Earn Creator, Organizer, or Soulchild badges</p>
            </div>
            <div className="feature-card">
              <FiMusic className="text-2xl sm:text-3xl text-accent-blue mb-3 sm:mb-4" />
              <h4 className="font-bold text-lg sm:text-xl mb-2">Discovery</h4>
              <p className="text-text-secondary text-xs sm:text-sm">Find music through organic connections</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
