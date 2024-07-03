import React from 'react';
import { Inter } from 'next/font/google';
 
import Hero from '@src/components/Homepage/Hero/Hero';
import AboutUs from '@src/components/Homepage/AboutUs/AboutUs';
import Stadistics from '@src/components/Homepage/Stadistics/Stadistics';
import HeretoHelp from '@src/components/Homepage/AboutUs/HereToHelp';
import MeetTeam from '@src/components/Homepage/MeetTeam/MeetTeam';
import Questions from '@src/components/Homepage/Stadistics/Questions';
import { Carousel } from '@src/components/Footer/Carousel';
import { Safeway } from '@src/components/Homepage/SafeWay/Safeway';
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Gate Education',
  description: 'Haz realidad tu sueño de educación internacional con nosotros. Ofrecemos programas en más de 10 países y más de 100 instituciones educacionales.',
  keywords: 'educación internacional, estudiar en el extranjero, programas educacionales, instituciones educacionales, suiza, canada, australia, becas',
  openGraph:{
    title: 'Tu Plataforma de Educación Internacional',
    description: 'Haz realidad tu sueño de educación internacional con nosotros. Ofrecemos programas en más de 10 países y más de 100 instituciones educacionales.',
    images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRLArqt49pngG4Dpo29bskouB_YD8MSJ2krwGKhE6CwctyyTFEWp1BQk59TLOVBg3HegY&usqp=CAU',
    url: 'URL_DE_TU_SITIO_WEB',
    type: 'website',
  },
  twitter:{
    card: 'summary_large_image',
    title: 'Tu Plataforma de Educación Internacional',
    description: 'Haz realidad tu sueño de educación internacional con nosotros. Ofrecemos programas en más de 10 países y más de 100 instituciones educacionales.',
    images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRLArqt49pngG4Dpo29bskouB_YD8MSJ2krwGKhE6CwctyyTFEWp1BQk59TLOVBg3HegY&usqp=CAU',
  },
  }

export default function Page() {
  return (
    <>
        <metadata /> 
        <main className={inter.className}>
            <Hero />
            <AboutUs />
            <Stadistics />
            <Safeway />
            <HeretoHelp />
            <MeetTeam />
            <Questions />
        </main>
    </>
);
}