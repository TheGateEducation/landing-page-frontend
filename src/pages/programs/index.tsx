import { Inter } from "next/font/google";
import { Navbar } from "@src/components/Navbar/Navbar";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@src/components/Footer/Footer";
import programs from '@src/images/programs.jpg';
const inter = Inter({ subsets: ["latin"] });


export default function Programs() {
    return (
        <>
        <main>
            <div className="relative ">
                <Navbar />
                <div className="relative h-screen 6 w-full ">
                    <div
                        className="absolute inset-0 z-1 bg-cover bg-center"
                        style={{ backgroundImage: `url(${programs.src})` }} // Using the src property of the imported image
                    ></div>
                </div>
                <Footer />
            </div>
        </main>
        </>

    );
}