import { Inter } from "next/font/google";
import { Navbar } from "@src/components/Navbar/Navbar";
import { Numbers } from "@src/components/Homepage/Numbers/Number";
import { Safeway } from "@src/components/Homepage/SafeWay/Safeway";
import { Footer } from "@src/components/Footer/Footer";
import Background from "@src/components/Images/Background.component";
const inter = Inter({ subsets: ["latin"] });

export default function AboutUs() {
    return (
        <main>
            <Navbar />
            <Footer />
            

        </main>

    );
}