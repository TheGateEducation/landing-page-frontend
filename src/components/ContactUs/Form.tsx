
import React from "react";

const Form = () => {
    return(
    <>
        <form className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {/* Nombre completo */}
            <label className="block">
                <span className="block text-sm font-medium text-gray-700">Nombre completo</span>
                <input
                    type="text"
                    placeholder="Escribe tu nombre completo"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
            </label>

            {/* Email */}
            <label className="block mt-4">
                <span className="block text-sm font-medium text-gray-700">Email</span>
                <input
                    type="email"
                    placeholder="Escribe tu correo electrónico"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
            </label>

            {/* Teléfono */}
            <label className="block mt-4">
                <span className="block text-sm font-medium text-gray-700">Teléfono</span>
                <input
                    type="tel"
                    placeholder="Escribe tu número de teléfono"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
            </label>

            {/* País de origen */}
            <label className="block mt-4">
                <span className="block text-sm font-medium text-gray-700">País de origen</span>
                <select
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                    <option value="">Selecciona tu país de origen</option>
                    <option value="mexico">México</option>
                    <option value="usa">Estados Unidos</option>
                    <option value="espana">España</option>
                    {/* Agrega más países según sea necesario */}
                </select>
            </label>

            {/* País de destino */}
            <label className="block mt-4">
                <span className="block text-sm font-medium text-gray-700">País de destino</span>
                <select
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                    <option value="">Selecciona tu país de destino</option>
                    <option value="canada">Canadá</option>
                    <option value="uk">Reino Unido</option>
                    <option value="francia">Francia</option>
                    {/* Agrega más países según sea necesario */}
                </select>
            </label>

            {/* Programa de interés */}
            <label className="block mt-4">
                <span className="block text-sm font-medium text-gray-700">Programa de interés</span>
                <select
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                    <option value="">Selecciona tu programa de interés</option>
                    <option value="ingenieria">Ingeniería</option>
                    <option value="arquitectura">Arquitectura</option>
                    <option value="medicina">Medicina</option>
                    {/* Agrega más programas según sea necesario */}
                </select>
            </label>

            {/* Botón de enviar */}
            <button
                type="submit"
                className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Enviar
            </button>
        </form>

    </>
    )
}
export default Form;