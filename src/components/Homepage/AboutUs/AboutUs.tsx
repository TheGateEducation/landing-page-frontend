import React from "react";
import SecondaryText from "@src/components/Text/SecondaryText.component";
import PrimaryText from "@src/components/Text/PrimaryText.component";

export const AboutUs: React.FC = () => {
  return (
    <div className="relative w-full h-3/6">
      <div className="max-w-screen-sm align text-left">
        <SecondaryText text="Quiénes somos" color="customOrange" textarea="left"/>
        <p className="text-textGray text-left mt-5">
          Somos una empresa dedicada a brindar servicios de asesoría educativa para estudiantes que desean estudiar en el extranjero. Nuestro objetivo es ayudarte a encontrar la mejor opción de estudio para ti, de acuerdo a tus necesidades y expectativas.
        </p>
      </div>
    </div>
  );
}