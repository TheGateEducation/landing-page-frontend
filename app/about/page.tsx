import { Inter } from "next/font/google";
import Hero from '@src/components/Hero/Hero';
import Content from '@src/components/AboutUs/Content/Content';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Sobre nosotros - The Gate Education",
    description: "Empresa 100% mexicana enfocada en la educacion de estudiantes con la mejor asesoria para conocer el mundo con enfoque educativo, cultural y profesional.",
};


export default function AboutUs() {
    return (
        <main>
            <Hero url="https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/aboutus.jpg" title="Sobre nosotros" />
            <Content />
        </main>
    );
}