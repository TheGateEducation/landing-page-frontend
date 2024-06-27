import React from "react";
import Image from "next/image";
import Link from "next/link";
import working from "@src/images/working.jpg";

const AboutUs = () => {
    return (
        <div className="relative w-full h-auto">
      <div className="flex flex-col items-center justify-center w-full h-full text-center relative p-5  border-4 border-red-400">
        <div className="max-w-screen-lg space-y-10 p-10 pb-10 ">
          <h1 className=" text-2xl md:text-3xl lg:text-4xl font-bold text-customOrange">Conoce el equipo</h1>
        </div>
        </div>
        </div>
    )
}

export default AboutUs