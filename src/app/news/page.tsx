import { Inter } from "next/font/google";
import Hero from '@src/components/Hero/Hero';
import news from '@public/news.jpg';
const inter = Inter({ subsets: ["latin"] });


export default function Programs() {
    return (
        <>
            <main>
                <Hero
                    url={news}
                    title="Noticias" 
                />
            </main>
        </>

    );
}