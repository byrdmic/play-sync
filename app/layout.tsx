import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Container } from '@mui/material'

import './globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen">
          <Container maxWidth="lg">{children}</Container>
        </main>
      </body>
    </html>
  )
}
