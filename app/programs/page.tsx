import { Inter } from "next/font/google";
import Hero from '@src/components/Hero/Hero';
import Gallery from '@src/components/Programs/Gallery';
import programs from '@public/home/programs.jpg';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Programas - The Gate Education",
    description: "Conoce la oferta que tenemos para ti en educación internacional. ",
    keywords: "campamentos, certificados y diplomas, cursos de idiomas, intercambios, maestrias, tours de estudio, estudios en el extranjero, secundaria, educación y formación profesional",
};

export default function Programs() {
    return (
        <>
            <main>
                <Hero url={programs} title="Programas" />
                <Gallery />
            </main>
        </>

    );
}