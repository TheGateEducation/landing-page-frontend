import { Inter } from "next/font/google";
import contactus from '@public/contactus.png';
import Form from '@src/components/ContactUs/Form';
import Hero from '@src/components/Hero/Hero';
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
    title: "Contactanos - The Gate Education",
    description: "Aquí inicia el proceso para irte de intercambio, estudiar en el extranjero o simplemente viajar por el mundo. Contáctanos y te ayudaremos a hacerlo posible.",
    keywords: "viajar por el mundo, educacion internacional, asesoria, acompañamiento, visa, aceptacion",
};


export default function ContactUs() {
    return (
        <>
            <main>
                <Hero 
                    url={contactus} 
                    title="Contáctanos" 
                    subitle="¿Quieres ponerte en contacto? Nos encantaría saber de ti."/>
                <Form />
            </main>
        </>
    );
}
{/* grid grid-cols-1 lg:grid-cols-2  */ }