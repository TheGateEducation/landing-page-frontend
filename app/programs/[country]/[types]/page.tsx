import React from "react";
import derecho from "@public/types/derecho.jpg";
import education from "@public/types/educacion.jpg";
import language from "@public/types/idioma.jpg";
import engineering from "@public/types/ingenieria.jpg";
import medicine from "@public/types/medicina.jpg";
import business from "@public/types/negocios.jpg";
import chemistry from "@public/types/quimica.jpg";


import Image from "next/image";

const galleryData = [
    {
        imageLink: derecho,
        title: "Derecho"
    },
    {
        imageLink: education,
        title: "Educacion"
    },
    {
        imageLink: language,
        title: "Idiomas"
    },
    {
        imageLink: engineering,
        title: "Paises Bajos"
    },
    {
        imageLink: medicine,
        title: "Medicina"
    },
    {
        imageLink: business,
        title: "Negocios"
    },
    {
        imageLink: chemistry,
        title: "Quimica"
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