import React from "react";
import Image from "next/image";
import CustomLink from "@src/components/Programs/CustomHref";
interface GalleryProps {
    galleryData: {
        imageLink: string;
        title: string;
        href: string;
    }[];
}

const Gallery: React.FC<GalleryProps> = ({ galleryData }) => {
    return (
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 p-20">
            {galleryData.map(({ imageLink, title, href }, index) => (
                <div key={index} className="relative w-full h-full">
                    <CustomLink href={href} className="flex items-center ">
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
                    </CustomLink>
                </div>
            ))}
        </div>
    )
}
export default Gallery;
