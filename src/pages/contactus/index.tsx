import { Inter } from "next/font/google";
import { Navbar } from "@src/components/Navbar/Navbar";
import { Footer } from "@src/components/Footer/Footer";
import contactus from '@src/images/contactus.jpg';
const inter = Inter({ subsets: ["latin"] });


export default function ContactUs() {
    return (
        <main>
            <div className="relative ">
                <Navbar />
                <div className="relative h-screen 6 w-full ">
                    <div
                        className="absolute inset-0 z-1 bg-cover bg-center"
                        style={{ backgroundImage: `url(${contactus.src})` }} // Using the src property of the imported image
                    ></div>
                </div>
                <Footer />

            </div>
        </main>

    );
}
{/* grid grid-cols-1 lg:grid-cols-2  */ }