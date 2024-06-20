import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@src/components/Navbar/Navbar";
import { Welcome } from "@src/components/Homepage/Welcome/Welcome";
import {AboutUs} from "@src/components/Homepage/AboutUs/AboutUs";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
    return (
        <main>
            <Navbar />
            <Welcome />
            <AboutUs />
        </main>
    );
}
