"use client";

import React from 'react'
import Head from 'next/head'
import { Navbar } from '@src/components/Navbar/Navbar'
import { Footer } from '@src/components/Footer/Footer'
import { Carousel } from '@src/components/Footer/Carousel';

export default function template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <title></title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href="./src/assets/icon.ico"
                />
            </Head>
            <div className="fixed top-0 left-0 right-0 bg-white bg-opacity-60 shadow-lg z-50">
                <Navbar />
            </div>
            <main>
                {children}
                <footer>
                    <Carousel />
                    <Footer />
                </footer>
            </main>
        </>
    )
}