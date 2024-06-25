import React from "react";
import Link from "next/link";
import PrimaryText from "@src/components/Text/PrimaryText.component";
import SecondaryText from "@src/components/Text/SecondaryText.component";
import Button from "@src/components/Buttons/Button.component";
import Background from "@src/components/Images/Background.component";
import beach from '@src//images/beach.png';

export const Welcome: React.FC = () => {
    return (
        <div className="relative w-full min-h-screen">
            <Background src={beach} width={1800} height={0} />
            <div className="absolute inset-0 flex items-center justify-center ">
                <div className="max-w-screen-lg px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 text-center border-4 border-indigo-500/100 ">
                    <SecondaryText text="BIENVENIDOS" />
                    <PrimaryText text="HAZ REALIDAD TU SUEÑO DE EDUCACIÓN INTERNACIONAL" />
                    <div className="flex justify-center mt-8 space-x-4 sm:space-x-8">
                        <Link href="#aboutus">
                            <Button text="Sobre nosotros" />
                        </Link>
                        <Link href="/">
                            <Button text="Contáctanos" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
