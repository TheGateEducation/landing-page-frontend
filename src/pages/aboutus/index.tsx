import { Inter } from "next/font/google";
import { Navbar } from "@src/components/Navbar/Navbar";
import Link from "next/link";
import Image from "next/image";
import Button from "@src/components/Buttons/Button.component";
import SecondaryText from "@src/components/Text/SecondaryText.component";
import PrimaryText from "@src/components/Text/PrimaryText.component";
import { Numbers } from "@src/components/Homepage/Numbers/Number";
import { Safeway } from "@src/components/Homepage/SafeWay/Safeway";
import { Footer } from "@src/components/Footer/Footer";
import Background from "@src/components/Images/Background.component";
import aboutus from '@src/images/aboutus.jpg';
const inter = Inter({ subsets: ["latin"] });


export default function AboutUs() {
    return (
        <main>
            <div className="relative ">
                <Navbar />
                <div className="relative h-screen 6 w-full ">
                    <div
                        className="absolute inset-0 z-1 bg-cover bg-center"
                        style={{ backgroundImage: `url(${aboutus.src})` }} // Using the src property of the imported image
                    ></div>
                </div>
                <Footer />

            </div>
        </main>

    );
}
{/* grid grid-cols-1 lg:grid-cols-2  */ }