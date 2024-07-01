import { Inter } from "next/font/google";
import { Navbar } from "@src/components/Navbar/Navbar";
import { Footer } from "@src/components/Footer/Footer";
import services from '@public/services.jpg';
const inter = Inter({ subsets: ["latin"] });


export default function Programs() {
    return (
        <main>
            <div className="relative ">
                <div className="fixed top-0 left-0 right-0 bg-white bg-opacity-60 shadow-lg z-50">
                    <Navbar />
                </div>
                <div className="relative h-screen 6 w-full ">
                    <div
                        className="absolute inset-0 z-1 bg-cover bg-center"
                        style={{ backgroundImage: `url(${services.src})` }} 
                    ></div>
                </div>
                <Footer />
            </div>
        </main>

    );
}