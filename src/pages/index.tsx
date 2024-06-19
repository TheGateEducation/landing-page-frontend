import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@src/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main>
            <Navbar />
        </main>
    );
}
