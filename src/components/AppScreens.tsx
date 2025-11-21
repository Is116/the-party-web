'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiSmartphone } from 'react-icons/fi'

const AppScreens = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const screens = [
    {
      title: 'Feed',
      description: 'Share your music journey',
      color: 'accent-green',
    },
    {
      title: 'Now Playing',
      description: 'Immersive listening experience',
      color: 'accent-blue',
    },
    {
      title: 'Your Playlists',
      description: 'Curate your perfect vibe',
      color: 'accent-purple',
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Beautiful <span className="gradient-text">Design</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Every detail crafted for the perfect music experience
            </p>
          </div>

          {/* App Showcase */}
          <div className="relative">
            {/* Large MUSIC text background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <h1 className="text-[20rem] font-black tracking-tighter">MUSIC</h1>
            </div>

            {/* Phone Mockups */}
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {screens.map((screen, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative group"
                >
                  {/* Phone Frame */}
                  <div className="relative aspect-[9/19] bg-gradient-to-br from-primary-dark to-card rounded-[3rem] p-4 shadow-2xl border-4 border-text-secondary/20">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-primary-dark rounded-b-3xl"></div>
                    
                    {/* Screen Content */}
                    <div className={`w-full h-full bg-gradient-to-br from-${screen.color}/20 to-transparent rounded-[2.5rem] flex flex-col items-center justify-center p-6 relative overflow-hidden`}>
                      {/* Animated Elements */}
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        className={`absolute w-32 h-32 bg-${screen.color}/10 rounded-full blur-2xl`}
                      />
                      
                      <FiSmartphone className={`text-6xl text-${screen.color} mb-4 relative z-10`} />
                      <h3 className="text-xl font-bold text-center mb-2 relative z-10">{screen.title}</h3>
                      <p className="text-text-secondary text-center text-sm relative z-10">{screen.description}</p>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-${screen.color}/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                </motion.div>
              ))}
            </div>

            {/* Feature Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <div className="text-center p-6 bg-card rounded-2xl">
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <div className="text-text-secondary">Ad-Free</div>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl">
                <div className="text-3xl font-bold gradient-text mb-2">∞</div>
                <div className="text-text-secondary">No Limits</div>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl">
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-text-secondary">Always On</div>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl">
                <div className="text-3xl font-bold gradient-text mb-2">🎵</div>
                <div className="text-text-secondary">Pure Music</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AppScreens
