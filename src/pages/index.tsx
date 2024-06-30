import React from 'react';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { Footer } from '@src/components/Footer/Footer';

import Hero from '@src/components/Homepage/Hero/Hero';
import AboutUs from '@src/components/Homepage/AboutUs/AboutUs';
import Stadistics from '@src/components/Homepage/Stadistics/Stadistics';
import HeretoHelp from '@src/components/Homepage/AboutUs/HereToHelp';
import MeetTeam from '@src/components/Homepage/MeetTeam/MeetTeam';
import Questions from '@src/components/Homepage/Stadistics/Questions';
import { Carousel } from '@src/components/Footer/Carousel';
import { Safeway } from '@src/components/Homepage/SafeWay/Safeway';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
    return (
        <>
            <Head>
                <title>The Gate Education</title>
                <meta name="description" content="Haz realidad tu sueño de educación internacional con nosotros. Ofrecemos programas en más de 10 países y más de 100 instituciones educacionales." />
                <meta name="keywords" content="educación internacional, estudiar en el extranjero, programas educacionales, instituciones educacionales" />
                <meta name="author" content="The Gate Education" />
                <meta property="og:title" content="Tu Plataforma de Educación Internacional" />
                <meta property="og:description" content="Haz realidad tu sueño de educación internacional con nosotros. Ofrecemos programas en más de 10 países y más de 100 instituciones educacionales." />
                <meta property="og:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRLArqt49pngG4Dpo29bskouB_YD8MSJ2krwGKhE6CwctyyTFEWp1BQk59TLOVBg3HegY&usqp=CAU" />
                <meta property="og:url" content="URL_DE_TU_SITIO_WEB" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Tu Plataforma de Educación Internacional" />
                <meta name="twitter:description" content="Haz realidad tu sueño de educación internacional con nosotros. Ofrecemos programas en más de 10 países y más de 100 instituciones educacionales." />
                <meta name="twitter:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRLArqt49pngG4Dpo29bskouB_YD8MSJ2krwGKhE6CwctyyTFEWp1BQk59TLOVBg3HegY&usqp=CAU" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={inter.className}>
                <Hero />
                <AboutUs />
                <Stadistics />
                <Safeway />
                <HeretoHelp />
                <MeetTeam />
                <Questions />
                <Carousel />
                <Footer />
                
            </main>
        </>
    );
};

export default Home;
