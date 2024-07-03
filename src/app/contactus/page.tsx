import { Inter } from "next/font/google";
import contactus from '@public/contactus.png';
import Form from '@src/components/ContactUs/Form';
import Hero from '@src/components/Hero/Hero';
const inter = Inter({ subsets: ["latin"] });


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