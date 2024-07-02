import { Inter } from "next/font/google";
import Hero from '@src/components/Hero/Hero';
import { Footer } from "@src/components/Footer/Footer";
import programs from '@public/programs.jpg';
const inter = Inter({ subsets: ["latin"] });


export default function Programs() {
    return (
        <>
        <main>
               <Hero url={programs} title="Programas"/>
        </main>
        </>

    );
}