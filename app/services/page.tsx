import { Inter } from "next/font/google";
import Hero from '@src/components/Hero/Hero';
import services from '@public/services.jpg';
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
    title: "Servicios - The Gate Education",
    description: "Amplia gama de servicios para que puedas estudiar en el extranjero, viajar por el mundo o simplemente aprender un nuevo idioma.",
};

export default function Programs() {
    return (
        <main>
                <Hero url={services} title="Servicios"/>
        </main>

    );
}