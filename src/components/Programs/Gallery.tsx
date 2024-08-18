import React from "react";
import Image from "next/image";


const galleryData = [
    {
        imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/campamento.jpg",
        title: "Campamentos",
        href: "/camp"
    },
    {
        imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/certificates.jpg",
        title: "Certificados y diplomas",
        href: "/diploma"
    },
    {
        imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/idiomas.jpg",
        title: "Cursos de idiomas",
        href: "/language_course"
    },
    {
        imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/intecambio.jpg",
        title: "Intercambios",
        href: "/exchange"
    },
    {
        imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/maestria.jpg",
        title: "Maestrías",
        href: "/master"
    },
    {
        imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/male.jpg",
        title: "Tours de estudio",
        href: "/tour"
    },
    {
        imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/school.jpg",
        title: "Estudios en el extranjero",
        href: "/study_abroad"
    },
    {
        imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/secundaria.jpg",
        title: "Secundaria",
        href: "/highschool"
    },
    {
        imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/profesional.jpg",
        title: "Educación y formación profesional",
        href: "/education"
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
                            width={555}
                            height={110}
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