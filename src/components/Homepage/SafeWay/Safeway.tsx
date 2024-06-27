// import SecondaryText from "@src/components/Text/SecondaryText.component";
import React from "react";
import Image from "next/image";
import telecommuting from "@src/images/telecommuting.png";
import options from "@src/images/options.png";
import flags from "@src/images/flags.png";
import fly from "@src/images/fly.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ImageData {
  src: StaticImport;
  alt: string;
  h2: string;
  p: string;
}

interface Data {
  telecommuting: ImageData;
  options: ImageData;
  flags: ImageData;
  fly: ImageData;
}


const data = {
  telecommuting: {
    src: telecommuting,
    alt: "contact us",
    h2: "01.",
    p: "Contactanos"
  },
  options: {
    src: options,
    alt: "contact us",
    h2: "02.",
    p: "Encuentra todas las opciones para tus estudios"
  },
  flags: {
    src: flags,
    alt: "contact us",
    h2: "03.",
    p: "Selecciona tu programa y aplica"
  },
  fly: {
    src: fly,
    alt: "contact us",
    h2: "04.",
    p: "¡Viaja!",
  }
};
const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];

export const Safeway: React.FC = () => {

  return (
    <div className="relative w-full h-auto  ">
      <div className="flex flex-col items-center justify-center w-full h-full text-center relative p-5 ">
        <div className="max-w-screen-lg space-y-10 p-10 pb-10">
          <h1 className=" text-2xl md:text-3xl lg:text-4xl font-bold text-customOrange">La forma más segura y fácil de estudiar en el extranjero</h1>
          <p>¡Expande tus conocimientos, habilidades y cultura en el extranjero y obtén una experiencia de vida inolvidable!</p>
        </div>
        <div className="flex flex-col md:flex-row w-3/5 h-auto justify-center items-center " id="image-container"> 
          {Object.keys(data).map((key) => {
            const item = getKeyValue(data)(key as keyof Data);
            return (
              <div key={key} className="flex flex-col items-center w-4/6 md:w-1/6 md:px-10 h-1/6 md:h-64 ">
                <Image
                  className="rounded-lg object-cover"
                  src={item.src}
                  alt={item.alt}
                  width="80"
                />
                <h2 className="pt-3 text-2xl md:text-3xl font-bold text-customPurple">{item.h2}</h2>
                <p className="text-textGray my-4 md:mt-6 md:mb-5">{item.p}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div >
  );
}