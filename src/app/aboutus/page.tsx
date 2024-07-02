import { Inter } from "next/font/google";
import Hero from '@src/components/Hero/Hero';
import Content from '@src/components/AboutUs/Content/Content';
import aboutus from '@public/aboutus.jpg';
const inter = Inter({ subsets: ["latin"] });

export default function AboutUs() {
    return (
        <>
            <main>
                <Hero url={aboutus} title="Sobre nosotros"/>
                <Content />
            </main>
        </>
    );
}