"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CookiesProvider } from 'react-cookie';
import Navbar from "../app/components/Navbar";

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      <CookiesProvider>
        {children}
      </CookiesProvider>
        </body>
    </html>
  )
}
