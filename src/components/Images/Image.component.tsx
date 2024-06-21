import React from 'react';
import Image, { StaticImageData } from 'next/image';
interface ImagenProps {
    src: string | StaticImageData;
    width: number;
    height: number;
}

const Imagen: React.FC<ImagenProps> = ({ src, width, height }) => {
    return (
        <Image
            className="flex justify-center items-center"
            src={src}
            alt="image"
            width={width}
            height={height}
        />
    );
}
export default Imagen;