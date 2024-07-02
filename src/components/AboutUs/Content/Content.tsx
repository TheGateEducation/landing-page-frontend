import React from "react";
import Image from "next/image";
import group from "@public/groupwoman.jpg";

const Content = () => {
    return (
        <div className="flex items-center justify-center h-auto p-4 bg-gray-100  ">
            <div className="flex md:flex-row flex-col items-center justify-center w-4/5 md:w-3/5 lg:w-2/5 rounded-lg shadow-lg ">
                <div className="mb-4">
                    <Image src={group} alt="group" />
                </div>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Quienes somos?</h1>

        </div>
    )
}

export default Content