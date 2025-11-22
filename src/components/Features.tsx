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
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
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
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Icon & Title */}
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-green/20 text-accent-green mb-6"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-text-secondary text-lg leading-relaxed mb-6">
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
                  <div className="space-y-4">
                    {feature.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 10 }}
                        className="flex items-start space-x-3 p-4 bg-primary-dark/50 rounded-xl"
                      >
                        <span className="text-accent-green text-xl mt-0.5">✓</span>
                        <span className="text-text-secondary">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Features Grid */}
          <motion.div variants={itemVariants} className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="feature-card">
              <FiUsers className="text-3xl text-accent-green mb-4" />
              <h4 className="font-bold text-xl mb-2">Social Feed</h4>
              <p className="text-text-secondary text-sm">Chronological feed with no algorithmic manipulation</p>
            </div>
            <div className="feature-card">
              <FiTrendingUp className="text-3xl text-accent-purple mb-4" />
              <h4 className="font-bold text-xl mb-2">Status Badges</h4>
              <p className="text-text-secondary text-sm">Earn Creator, Organizer, or Soulchild badges</p>
            </div>
            <div className="feature-card">
              <FiMusic className="text-3xl text-accent-blue mb-4" />
              <h4 className="font-bold text-xl mb-2">Discovery</h4>
              <p className="text-text-secondary text-sm">Find music through organic connections</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
