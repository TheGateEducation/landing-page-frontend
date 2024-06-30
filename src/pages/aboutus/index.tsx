import { Inter } from "next/font/google";
import { Navbar } from "@src/components/Navbar/Navbar";
import Image from "next/legacy/image";
import { Footer } from "@src/components/Footer/Footer";
import aboutus from '@src/images/aboutus.jpg';
const inter = Inter({ subsets: ["latin"] });

export default function AboutUs() {
    return (
        <>
            <main>
                <div className="relative ">
                    <Navbar />
                    <div className="relative h-screen 6 w-full ">
                        <Image
                            src={aboutus.src}
                            layout="fill"
                            objectFit="cover" />
                    </div>
                    <Footer />
                </div>
            </main>
        </>
    );
}