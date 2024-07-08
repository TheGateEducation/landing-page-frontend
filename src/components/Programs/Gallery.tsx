import React from "react";
import camp from "@public/gallery/campamento.jpg";
import diplomas from "@public/gallery/certificates.jpg";
import languages from "@public/gallery/idiomas.jpg";
import exchange from "@public/gallery/intecambio.jpg";
import masters from "@public/gallery/maestria.jpg";
import tours from "@public/gallery/male.jpg";
import school from "@public/gallery/school.jpg";
import highschool from "@public/gallery/secundaria.jpg";
import profesional from "@public/gallery/profesional.jpg";
import Image from "next/image";

const galleryData = [
    {
        imageLink: camp,
        title: "Campamentos"
    },
    {
        imageLink: diplomas,
        title: "Certificados y diplomas"
    },
    {
        imageLink: languages,
        title: "Cursos de idiomas"
    },
    {
        imageLink: exchange,
        title: "Intercambios"
    },
    {
        imageLink: masters,
        title: "Maestrías"
    },
    {
        imageLink: tours,
        title: "Tours de estudio"
    },
    {
        imageLink: school,
        title: "Estudios en el extranjero"
    },
    {
        imageLink: highschool,
        title: "Secundaria"
    },
    {
        imageLink: profesional,
        title: "Educación y formación profesional"
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