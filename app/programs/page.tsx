import { Inter } from "next/font/google";
import Hero from '@src/components/Hero/Hero';
import Gallery from '@src/components/Programs/Gallery';
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
                <Hero url="https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/programs.jpg" title="Programas" />
                <Gallery />
            </main>
        </>

    );
}