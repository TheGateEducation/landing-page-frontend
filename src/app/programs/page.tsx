import { Inter } from "next/font/google";
import Hero from '@src/components/Hero/Hero';
import Gallery from '@src/components/Programs/Gallery';
import programs from '@public/programs.jpg';
const inter = Inter({ subsets: ["latin"] });


export default function Programs() {
    return (
        <>
        <main>
               <Hero url={programs} title="Programas"/>
               <Gallery />
        </main>
        </>

    );
}