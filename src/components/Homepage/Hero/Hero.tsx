import React from 'react'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url(https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 px-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Bienvenidos</h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-8">Haz realidad tu sueño de educación internacional</p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <Link href="/contactus">
                    <button style={{ fontSize: '20px' }} className="bg-customOrange text-white py-3 px-4 rounded-3xl hover:bg-customOrangeHover">Contáctanos</button>
                    </Link>
                    <Link href='/aboutus'>
                    <button style={{ fontSize: '20px' }} className="bg-customOrange text-white py-2 px-4 rounded-3xl hover:bg-customOrangeHover">Sobre Nosotros</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
