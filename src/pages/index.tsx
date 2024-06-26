import { Inter } from "next/font/google";
import { Navbar } from "@src/components/Navbar/Navbar";
import Imagen from "@src/components/Images/Image.component";
//import Background from "@src/components/Images/Background.component";
import PrimaryText from "@src/components/Text/PrimaryText.component";
import SecondaryText from "@src/components/Text/SecondaryText.component";
import UnderlinedTexts from "@src/components/Text/UnderlinedText.component";
import { Footer } from "@src/components/Footer/Footer";
import Stadistics, { StadisticsProps } from "@src/components/Text/Stadistics.component";
import Link from "next/link";
import Button from "@src/components/Buttons/Button.component";
import working from "@src/images/working.jpg";
import beach from "@src/images/mainpage.png";
import Background from "@src/components/Images/Background.component";
const inter = Inter({ subsets: ["latin"] });


const commonNumberProps: Pick<StadisticsProps, 'secondaryColor' | 'secondaryTextAlign'> = {
    secondaryColor: 'whiteNotWhite',
    secondaryTextAlign: 'left'
};

const dataStadistics: {
    counterTo: number;
    secondaryText: string;
}[] = [
        {
            counterTo: 10,
            secondaryText: "Países"
        },
        {
            counterTo: 100,
            secondaryText: "Instituciones educacionales"
        },
        {
            counterTo: 300,
            secondaryText: "Programas"

        }
    ]


export default function Home() {
    return (
        <main>
            <div className="relative ">
                <Navbar />
                <Background imageUrl={beach.src}>
                    <div className="max-w-screen-lg px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 ">
                        <div className="text-center sm:text-start ">
                            <SecondaryText text="BIENVENIDOS" />
                            <PrimaryText text="HAZ REALIDAD TU SUEÑO DE EDUCACIÓN INTERNACIONAL" />
                            <div className="flex justify-center mt-8 space-x-4 sm:space-x-8">
                                <Link href="/aboutus">
                                    <Button text="Sobre nosotros" />
                                </Link>
                                <Link href="/program">
                                    <Button text="Contáctanos" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Background>
            </div>

            <section id="aboutus" className="relative w-full">
                <div className="flex flex-col md:flex-row items-center justify-center px-14 md:px-6 lg:px-12 xl:px-40 pb-20">
                    <div className="md:w-1/2 ">
                        <Imagen src={working} width={0} height={310} />
                    </div>
                    <div className="md:w-1/2 mt-0 md:mt-0 md:ml-10 flex flex-col items-start justify-center text-justify md:text-left">
                        <SecondaryText text="Quiénes somos" color="customOrange" textarea="left" />
                        <p className="text-textGray mt-4 md:mt-6 mb-4 md:mb-5">
                            Somos una empresa dedicada a brindar servicios de asesoría educativa para estudiantes que desean estudiar en el extranjero. Nuestro objetivo es ayudarte a encontrar la mejor opción de estudio para ti, de acuerdo a tus necesidades y expectativas. Contamos con un equipo de profesionales altamente capacitados y con amplia experiencia en el área de educación internacional. Estamos comprometidos en brindarte un servicio de calidad y en acompañarte en todo el proceso de postulación a la universidad de tus sueños. ¡Haz realidad tu sueño de estudiar en el extranjero con nosotros!
                        </p>
                        <Link href="/">
                            <UnderlinedTexts text="Agenda una consulta gratis" color="customPurple" textarea="left" />
                        </Link>
                    </div>
                </div>
            </section>

            <section id="stadistics" className='flex w-full h-auto justify-center p-2 sm:p-8 md:p-12 lg:p-24 sm:space-x-40 md:space-x-60  bg-customMint '>
                <div className='flex flex-row items-center justify-center space-x-4 h-20 w-20 sm:w-32 md:w-40 lg:w-48 xl:w-56'>
                    {dataStadistics.map((data, index) => (
                        <Stadistics
                            key={index}
                            counterTo={data.counterTo}
                            secondaryText={data.secondaryText}
                            {...commonNumberProps}
                        />
                    ))}
                </div>
            </section>
            <Footer />
        </main >

    );
}

{/* border-4 border-red-500/100 */ }