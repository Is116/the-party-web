'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiSmartphone, FiDownload } from 'react-icons/fi'

const Download = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="download" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-transparent to-accent-green/10"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FiSmartphone className="text-5xl sm:text-6xl text-accent-green mx-auto mb-4 sm:mb-6" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
              Ready to <span className="gradient-text">Join?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
              Download Thé Party now and become part of the music revolution.
              Available on iOS and Android.
            </p>
          </motion.div>

          {/* Download Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4"
          >
            {/* App Store Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-3 sm:space-x-4 bg-card px-6 py-4 sm:px-8 sm:py-5 rounded-2xl border-2 border-text-secondary/20 hover:border-accent-green/50 transition-all duration-300 w-full sm:w-auto"
            >
              <div className="text-3xl sm:text-4xl">🍎</div>
              <div className="text-left">
                <div className="text-xs text-text-secondary">Download on the</div>
                <div className="text-lg sm:text-xl font-bold">App Store</div>
              </div>
            </motion.button>

            {/* Google Play Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-3 sm:space-x-4 bg-card px-6 py-4 sm:px-8 sm:py-5 rounded-2xl border-2 border-text-secondary/20 hover:border-accent-green/50 transition-all duration-300 w-full sm:w-auto"
            >
              <div className="text-3xl sm:text-4xl">📱</div>
              <div className="text-left">
                <div className="text-xs text-text-secondary">Get it on</div>
                <div className="text-lg sm:text-xl font-bold">Google Play</div>
              </div>
            </motion.button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto px-4"
          >
            <div className="card text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">10K+</div>
              <div className="text-text-secondary">Early Adopters</div>
            </div>
            <div className="card text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">5K+</div>
              <div className="text-sm sm:text-base text-text-secondary">Artists</div>
            </div>
            <div className="card text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">1K+</div>
              <div className="text-sm sm:text-base text-text-secondary">Events</div>
            </div>
            <div className="card text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">50K+</div>
              <div className="text-text-secondary">Tracks</div>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-4"
          >
            {['Free Forever', 'No Ads', 'No Limits', 'Privacy First', 'Artist Focused', 'Community Owned'].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-2 bg-card px-6 py-3 rounded-xl border border-accent-green/20"
              >
                <span className="text-accent-green">✓</span>
                <span className="font-medium">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Email Signup (Optional) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 max-w-md mx-auto"
          >
            <div className="bg-card p-8 rounded-2xl border border-accent-green/20">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-text-secondary mb-6">
                Get notified about new features and updates
              </p>
              <form className="flex gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-primary-dark px-4 py-3 rounded-xl border border-text-secondary/20 focus:border-accent-green outline-none transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-accent-green text-primary-dark px-6 py-3 rounded-xl font-semibold hover:bg-accent-green/90 transition-all"
                >
                  <FiDownload className="text-xl" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Download
