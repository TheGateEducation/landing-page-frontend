import { Inter } from "next/font/google";
import { Navbar } from "@src/components/Navbar/Navbar";
import { Welcome } from "@src/components/Homepage/Welcome/Welcome";
import { AboutUs } from "@src/components/Homepage/AboutUs/AboutUs";
import { Numbers } from "@src/components/Homepage/Numbers/Number";
import { Safeway } from "@src/components/Homepage/SafeWay/Safeway";
import { Footer } from "@src/components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
    return (
        <main>
            
            <Welcome />
            <AboutUs />
            <Numbers />
            <Safeway />
            <Footer />


        </main>
    );
}
