import { Inter } from "next/font/google";
import Hero from '@src/components/Hero/Hero';
import Gallery from '@src/components/Programs/Gallery';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Programas - The Gate Education",
    description: "Conoce la oferta que tenemos para ti en educación internacional. ",
    keywords: "campamentos, certificados y diplomas, cursos de idiomas, intercambios, maestrias, tours de estudio, estudios en el extranjero, secundaria, educación y formación profesional",
};


const galleryData = [
    {
        imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/campamento.jpg",
        title: "Campamentos",
        href: "/programs/camp"
    },
    {
        imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/certificates.jpg",
        title: "Certificados y diplomas",
        href: "/programs/diploma"
    },
    {
        imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/idiomas.jpg",
        title: "Cursos de idiomas",
        href: "/programs/language_course"
    },
    {
        imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/intecambio.jpg",
        title: "Intercambios",
        href: "/programs/exchange"
    },
    {
        imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/maestria.jpg",
        title: "Maestrías",
        href: "/programs/master"
    },
    {
        imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/male.jpg",
        title: "Tours de estudio",
        href: "/programs/tour"
    },
    {
        imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/school.jpg",
        title: "Estudios en el extranjero",
        href: "/programs/study_abroad"
    },
    {
        imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/secundaria.jpg",
        title: "Secundaria",
        href: "/programs/highschool"
    },
    {
        imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/profesional.jpg",
        title: "Educación y formación profesional",
        href: "/programs/education"
    },
];

export default function Programs() {
    return (
        <>
            <main>
                <Hero url="https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/programs.jpg" title="Programas" />
                <Gallery galleryData={galleryData} />
            </main>
        </>

    );
}