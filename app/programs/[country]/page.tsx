import React from "react";
import uk from "@public/country/uk.jpg";
import usa from "@public/country/ny.jpg";
import pb from "@public/country/pb.jpg";
import brazil from "@public/country/brazil.jpg";
import france from "@public/country/france.jpg";
import china from "@public/country/china.jpg";
import antartida from "@public/country/antartida.jpg";
import grecee from "@public/country/grecia.jpg";
import suiza from "@public/country/suiza.jpg";
import Image from "next/image";

const galleryData = [
    {
        imageLink: uk,
        title: "Reino Unido"
    },

    {
        imageLink: usa,
        title: "Estados Unidos"
    },
    {
        imageLink: pb,
        title: "Paises Bajos"
    },
    {
        imageLink: brazil,
        title: "Brazil"
    },
    {
        imageLink: france,
        title: "Francia"
    },
    {
        imageLink: china,
        title: "China"
    },
    {
        imageLink: antartida,
        title: "Antartida"
    },
    {
        imageLink: grecee,
        title: "Grecia"
    },
    {
        imageLink: suiza,
        title: "Suiza"
    },
];

const Gallery = () => {

    return (
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 p-20">
            {galleryData.map(({ imageLink, title }, index) => (
                <div key={index} className="relative w-full h-full">
                    <button className="w-full h-full">
                        <Image
                            className="rounded-2xl object-cover object-center"
                            src={imageLink}
                            alt="gallery-photo"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-0 rounded-2xl transition-opacity">
                            <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold text-white">{title}</h1>
                        </div>
                    </button >
                </div>
            ))}
        </div>
    )
}
export default Gallery;