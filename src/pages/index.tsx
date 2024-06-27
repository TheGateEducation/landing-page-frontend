import { Inter } from "next/font/google";
import { Footer } from "@src/components/Footer/Footer";

import Hero from "@src/components/Homepage/Hero/Hero";
import AboutUs from "@src/components/Homepage/AboutUs/AboutUs";
import Stadistics from "@src/components/Homepage/Stadistics/Stadistics";
import { Safeway } from "@src/components/Homepage/SafeWay/Safeway";



const inter = Inter({ subsets: ["latin"] });


const Home = () => {
    return (
        <main>
            <Hero />
            <AboutUs />
            <Stadistics/>
            <Safeway/>
            



            <Footer />
        </main>
    )
}

export default Home