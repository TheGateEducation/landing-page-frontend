import React from 'react';
import Image from 'next/image';

interface BackgroundProps {
    src: string;
    width: number;
    height: number;
}

const Background: React.FC<BackgroundProps> = ({ src, width, height }) => {
    return (
        <div>
            
            <Image 
                className="absolute inset-0 bg-cover bg-center z-[-1]" 
                src={src}
                alt="image"
                width={width}
                height={height}
            />
        </div>

    );
}

export default Background;