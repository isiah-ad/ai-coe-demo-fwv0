import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ClarityProvider } from '@/components/clarity-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://demo-fwv0.vercel.app'),
  title: 'AI PDF Monitor for FormsWorkflow',
  description: 'Replace website watchers with AI powered PDF monitoring. Automatically track form changes across court and government websites.',
  openGraph: {
    title: 'AI PDF Monitor for FormsWorkflow',
    description: 'Replace website watchers with AI powered PDF monitoring. Automatically track form changes across court and government websites.',
    url: 'https://demo-fwv0.vercel.app',
    siteName: 'FormsWorkflow',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI PDF Monitor for FormsWorkflow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI PDF Monitor for FormsWorkflow',
    description: 'Replace website watchers with AI powered PDF monitoring.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <ClarityProvider />
      </body>
    </html>
  )
}
