'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiUserPlus, FiCpu, FiShare2, FiDollarSign, FiThumbsUp, FiMessageCircle } from 'react-icons/fi'

const CommunityFeatures = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <FiUserPlus />,
      title: 'Close Friends',
      description: 'Filter feed and content visibility for a smaller, curated circle of connections.',
      status: 'Future Roadmap',
    },
    {
      icon: <FiCpu />,
      title: 'Transparent AI',
      description: 'Using AI to suggest new content, but doing so transparently to maintain user trust.',
      status: 'Future Roadmap',
    },
    {
      icon: <FiShare2 />,
      title: 'Cross-Posting',
      description: 'Seamlessly share content between Releases, Mixes, Events, and the Feed.',
      status: 'Future Roadmap',
    },
  ]

  const forumFeatures = [
    {
      icon: <FiMessageCircle />,
      title: 'Structured Channels',
      description: 'Channels and Subchannels with depth limits. Push notifications for specific threads or authors.',
    },
    {
      icon: <FiDollarSign />,
      title: 'In-App Currency',
      description: 'Earn rewards for community contributions. Upvote/Downvote system determines value.',
    },
    {
      icon: <FiThumbsUp />,
      title: 'Cash Out',
      description: 'Users can instantly cash out their earned currency, creating a real economy for helpful users.',
    },
  ]

  return (
    <section id="community" className="py-16 sm:py-20 md:py-24 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Forum Economy Section */}
          <div className="mb-24">
            <div className="text-center mb-12 sm:mb-16 px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
                Forum <span className="gradient-text">Economy</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
                A real economy rewarding valuable community contributions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {forumFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="card text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-accent-green/20 text-accent-green text-2xl sm:text-3xl mb-4 sm:mb-6"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Future Roadmap Section */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                Future <span className="gradient-text">Roadmap</span>
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Exciting features coming soon to enhance your experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="feature-card relative overflow-hidden"
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-accent-purple/20 text-accent-purple text-xs font-bold rounded-full border border-accent-purple/50">
                      {feature.status}
                    </span>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-accent-green/20 to-accent-purple/20 text-accent-green text-2xl mb-6"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-card px-8 py-6 rounded-2xl border-2 border-accent-green/30">
              <p className="text-xl mb-4">
                <span className="gradient-text font-bold">Have ideas?</span> We're building this together!
              </p>
              <a href="#download">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Join the Community
                </motion.button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CommunityFeatures
