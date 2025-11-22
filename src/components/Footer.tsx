'use client'

import { motion } from 'framer-motion'
import { FiTwitter, FiInstagram, FiFacebook, FiGithub, FiMail, FiHeart } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { label: 'Features', href: '#features' },
      { label: 'Community', href: '#community' },
      { label: 'Download', href: '#download' },
      { label: 'Pricing', href: '#' },
    ],
    Company: [
      { label: 'About Us', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press Kit', href: '#' },
    ],
    Resources: [
      { label: 'Help Center', href: '#' },
      { label: 'API Docs', href: '#' },
      { label: 'Community Guidelines', href: '#' },
      { label: 'Status', href: '#' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Licenses', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: <FiTwitter />, href: '#', label: 'Twitter' },
    { icon: <FiInstagram />, href: '#', label: 'Instagram' },
    { icon: <FiFacebook />, href: '#', label: 'Facebook' },
    { icon: <FiGithub />, href: '#', label: 'GitHub' },
  ]

  return (
    <footer className="relative bg-primary-dark/50 backdrop-blur-lg border-t border-text-secondary/10">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 grid sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10 md:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-accent-green rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🎵</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold">Thé Party</span>
            </motion.a>
            <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6 leading-relaxed">
              Where music meets community. Built for artists, fans, and event organizers who believe in a better way to connect.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl bg-card flex items-center justify-center text-text-secondary hover:text-accent-green hover:bg-accent-green/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-lg mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-text-secondary hover:text-accent-green transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="py-8 sm:py-12 border-t border-text-secondary/10">
          <div className="max-w-xl mx-auto text-center px-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Stay in the Loop</h3>
            <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6">
              Get updates on new features, artist spotlights, and exclusive events.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-card px-4 py-3 sm:px-6 sm:py-4 rounded-xl border border-text-secondary/20 focus:border-accent-green outline-none transition-colors text-sm sm:text-base"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-accent-green text-primary-dark px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold hover:bg-accent-green/90 transition-all whitespace-nowrap text-sm sm:text-base"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-text-secondary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-text-secondary text-sm">
            © {currentYear} Thé Party. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-text-secondary text-sm">
            <span>Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FiHeart className="text-accent-green" />
            </motion.div>
            <span>for the music community</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent-green via-accent-purple to-accent-blue"></div>
    </footer>
  )
}

export default Footer
