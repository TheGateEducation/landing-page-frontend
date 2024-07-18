import { Inter } from "next/font/google";
import ContactUsForm from '@src/components/ContactUs/Form';
import Hero from '@src/components/Hero/Hero';
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
    title: "Contactanos - The Gate Education",
    description: "Aquí inicia el proceso para irte de intercambio, estudiar en el extranjero o simplemente viajar por el mundo. Contáctanos y te ayudaremos a hacerlo posible.",
    keywords: "viajar por el mundo, educacion internacional, asesoria, acompañamiento, visa, aceptacion",
};


export default function ContactUs() {
    return (
        <main>
            <Hero
                url="https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/contactus.png"
                title="Contáctanos"
                subitle="¿Quieres ponerte en contacto? Nos encantaría saber de ti." />
            <ContactUsForm />
        </main>
    );
}
