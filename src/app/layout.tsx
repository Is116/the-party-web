import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thé Party - Music, Community & Events Platform',
  description: 'Join the revolution in music social networking. Where artists, fans, and event organizers come together. Accessibility First. Artist Support. Community Owned.',
  keywords: 'music, social network, events, artists, community, DJ, concerts, music streaming',
  authors: [{ name: 'Thé Party' }],
  openGraph: {
    title: 'Thé Party - Music, Community & Events Platform',
    description: 'Join the revolution in music social networking',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thé Party - Music, Community & Events Platform',
    description: 'Join the revolution in music social networking',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
