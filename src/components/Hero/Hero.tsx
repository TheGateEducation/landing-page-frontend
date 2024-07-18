import { Inter } from "next/font/google";
import { StaticImageData } from 'next/image';
const inter = Inter({ subsets: ["latin"] })

interface HeroProps {
    url: string,
    title: string,
    subitle?: string
}

const Hero = ({ url, title, subitle }: HeroProps) => {
    return (
        <div className="relative flex items-center justify-center h-[30vh] md:h-[40vh] bg-cover bg-center mt-16" style={{ backgroundImage: `url(${url})`, backgroundPosition: "center" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-opacity-50 px-4 ">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"> {title} </h1>
                <p className="text-lg md:text-2xl lg:text-3xl font-light"> {subitle} </p>
            </div>
        </div>
    )
}

export default Hero