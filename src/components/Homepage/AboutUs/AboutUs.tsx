import React from "react";
import SecondaryText from "@src/components/Text/SecondaryText.component";
import UnderlinedText from "@src/components/Text/UnderlinedText.component";
import Imagen from "@src/components/Images/Image.component";
import working from "@src/images/working.jpg";
export const AboutUs: React.FC = () => {
  return (
    <div className="relative w-full h-full mt-30 flex items-center justify-center p-5 mb-20 ">
      <div className="flex flex-row w-full max-w-screen-lg space-x-10  ">
        <div className="flex-1 ">
          <Imagen src={working} width={0} height={310} />
        </div>
        <div className="flex-1 flex flex-col items-start justify-center text-left ">
          <SecondaryText text="Quiénes somos" color="customOrange" textarea="left" />
          <p className="text-textGray mt-10 mb-5">
            Somos una empresa dedicada a brindar servicios de asesoría educativa para estudiantes que desean estudiar en el extranjero. Nuestro objetivo es ayudarte a encontrar la mejor opción de estudio para ti, de acuerdo a tus necesidades y expectativas. Contamos con un equipo de profesionales altamente capacitados y con amplia experiencia en el área de educación internacional. Estamos comprometidos en brindarte un servicio de calidad y en acompañarte en todo el proceso de postulación a la universidad de tus sueños. ¡Haz realidad tu sueño de estudiar en el extranjero con nosotros!
          </p>
          <a href="/"> <UnderlinedText text="Agenda una consulta gratis" color="customPurple" textarea="left" /> </a>
          
        </div>
      </div>
    </div>

  );
}
{/* border-4 border-indigo-500/100 */ }