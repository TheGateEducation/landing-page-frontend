import React from "react";
import Link from "next/link";

import SecondaryText from "@src/components/Text/SecondaryText.component";
import UnderlinedText from "@src/components/Text/UnderlinedText.component";
import Imagen from "@src/components/Images/Image.component";
import working from "@src/images/working.jpg";


export const AboutUs: React.FC = () => {
    return (
        <section id="aboutus" className="py-5 md:py-20">
            <div className="relative w-full">
                <div className="flex flex-col md:flex-row items-center justify-center p-5 md:px-6 lg:px-12 xl:px-40 border-4 border-indigo-500/100">
                    <div className="md:w-1/2">
                        <Imagen src={working} width={0} height={310} />
                    </div>
                    <div className="md:w-1/2 mt-6 md:mt-0 md:ml-10 flex flex-col items-start justify-center text-center md:text-left">
                        <SecondaryText text="Quiénes somos" color="customOrange" textarea="left" />
                        <p className="text-textGray mt-4 md:mt-6 mb-4 md:mb-5">
                            Somos una empresa dedicada a brindar servicios de asesoría educativa para estudiantes que desean estudiar en el extranjero. Nuestro objetivo es ayudarte a encontrar la mejor opción de estudio para ti, de acuerdo a tus necesidades y expectativas. Contamos con un equipo de profesionales altamente capacitados y con amplia experiencia en el área de educación internacional. Estamos comprometidos en brindarte un servicio de calidad y en acompañarte en todo el proceso de postulación a la universidad de tus sueños. ¡Haz realidad tu sueño de estudiar en el extranjero con nosotros!
                        </p>
                        <Link href="/"> <UnderlinedText text="Agenda una consulta gratis" color="customPurple" textarea="left" /> </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
{/* border-4 border-indigo-500/100 */ }