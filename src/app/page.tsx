'use client'

import Hero from '@/components/Hero'
import Features from '@/components/Features'
import CorePillars from '@/components/CorePillars'
import AppScreens from '@/components/AppScreens'
import StatusBadges from '@/components/StatusBadges'
import CommunityFeatures from '@/components/CommunityFeatures'
import Download from '@/components/Download'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-party-gradient">
      <Navigation />
      <Hero />
      <CorePillars />
      <Features />
      <AppScreens />
      <StatusBadges />
      <CommunityFeatures />
      <Download />
      <Footer />
    </main>
  )
}
