import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@src/components/Navbar/Navbar";
import { Welcome } from "@src/components/Background/Welcome";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main>
            <Navbar />
            <Welcome />
        </main>
    );
}
