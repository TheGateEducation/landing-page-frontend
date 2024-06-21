import React from 'react';
import Image, { StaticImageData } from 'next/image';
interface BackgroundProps {
    src: string | StaticImageData;
    width: number;
    height: number;
}

const Background: React.FC<BackgroundProps> = ({ src, width, height }) => {
    return (
        <Image
            className="absolute inset-0 bg-cover bg-center z-[-1]"
            src={src}
            alt="image"
            width={width}
            height={height}
        />
    );
}
export default Background;