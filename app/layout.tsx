import React from "react"
import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Starflare | AI-Native Lightweight Gaming for the World',
  description: 'Powering 20M+ players across 12 countries with AI-native game development & operations. Built on Amazon Bedrock with Claude AI.',
  keywords: ['lightweight gaming', 'AI gaming', 'card strategy games', 'Amazon Bedrock', 'Claude AI', 'global gaming'],
  openGraph: {
    title: 'Starflare | AI-Native Lightweight Gaming',
    description: 'Powering 20M+ players across 12 countries with AI-native game development & operations.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Starflare | AI-Native Lightweight Gaming',
    description: 'Powering 20M+ players across 12 countries with AI-native game development & operations.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
