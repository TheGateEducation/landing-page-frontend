import React from 'react';
import Image, { StaticImageData } from 'next/image';
interface BackgroundProps {
  imageUrl: string | StaticImageData;
  children: number;
}

const Background: React.FC<BackgroundProps> = ({ imageUrl, children }) => {
  return (
    <div className="relative h-screen w-full">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        {children}
      </div>
    </div>
  );
}
export default Background;