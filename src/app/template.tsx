"use client";

import React from 'react'
import Head from 'next/head'
import { Navbar } from '@src/components/Navbar/Navbar'
import { Footer } from '@src/components/Footer/Footer'

export default function template({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title></title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed top-0 left-0 right-0 bg-white bg-opacity-60 shadow-lg z-50">
        <Navbar />
      </div>
      <body>
        {children}
      </body>
      <Footer />
    </html>
  )
}