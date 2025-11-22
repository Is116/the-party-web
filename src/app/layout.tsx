import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://theparty.app'),
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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://theparty.app/" />
        <meta name="theme-color" content="#0A0E1A" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
