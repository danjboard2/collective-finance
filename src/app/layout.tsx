"use client"
import type { Metadata } from 'next'
import {useEffect} from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import { CookiesProvider } from 'react-cookie';
import Navbar from "../app/components/Navbar";

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 

{
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
