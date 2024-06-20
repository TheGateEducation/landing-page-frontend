import React from "react";
import Background from "@src/components/Homepage/Welcome/Background.component";
import PrimaryText from "@src/components/Text/PrimaryText.component";
import SecondaryText from "@src/components/Text/SecondaryText.component";
import Button from "@src/components/Buttons/Button.component";
import beach from '@src//images/beach.png';

export const Welcome: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      <Background src={beach} width={1800} height={0} />
      <div className="flex flex-col items-center justify-center w-full h-full text-center relative">
        <div className="max-w-screen-lg space-y-10">
          <SecondaryText text="BIENVENIDOS"  color="whiteNotWhite" textarea="center"/>
          <PrimaryText text="HAZ REALIDAD TU SUEÑO DE EDUCACIÓN INTERNACIONAL" color="whiteNotWhite" textarea="center"/>
          <div className="space-x-8 mt-0">
            <Button text="Sobre nosotros" />
            <Button text="Contáctanos" />
          </div>
        </div>
      </div>
    </div>
  );
}
