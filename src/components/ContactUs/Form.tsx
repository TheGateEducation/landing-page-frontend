import React from "react";

const ContactUsForm = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center px-4 md:px-6 lg:px-12 xl:px-40 pt-10">
            <div className="mb-6 md:mb-0 flex items-center justify-center">
                <h1 className="text-2xl md:text-4xl font-bold text-customPurple text-center">¡Aquí empieza tu viaje!</h1>
            </div>
            <div className="w-full shadow-md rounded-lg p-10 pt-6 pb-8 mb-4 bg-gray-100">
                <label className="block mb-4">
                    <span className="block text-lg font-medium text-gray-700">Nombre completo</span>
                    <input
                        type="text"
                        placeholder="Escribe tu nombre completo"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 
                            focus:outline-none 
                            focus:border-purple-900 
                            focus:ring-2 focus:ring-customPurple"
                    />
                </label>
                <label className="block mb-4">
                    <span className="block text-lg font-medium text-gray-700">Email</span>
                    <input
                        type="email"
                        placeholder="Escribe tu correo electrónico"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-purple-900 
                            focus:ring-2 focus:ring-customPurple"
                    />
                </label>

                <label className="block mb-4">
                    <span className="block text-lg font-medium text-gray-700">Teléfono</span>
                    <input
                        type="tel"
                        placeholder="Escribe tu número de teléfono"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-purple-900 
                            focus:ring-2 focus:ring-customPurple"
                    />
                </label>

                <label className="block mb-4">
                    <span className="block text-lg font-medium text-gray-700">País de origen</span>
                    <select
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-purple-900 
                            focus:ring-2 focus:ring-customPurple"
                    >
                        <option value="">Selecciona tu país de origen</option>
                        <option value="mexico">México</option>
                        <option value="usa">Estados Unidos</option>
                        <option value="espana">España</option>
                    </select>
                </label>

                <label className="block mb-4">
                    <span className="block text-lg font-medium text-gray-700">País de destino</span>
                    <select
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-purple-900 
                            focus:ring-2 focus:ring-customPurple"
                    >
                        <option value="">Selecciona tu país de destino</option>
                        <option value="canada">Canadá</option>
                        <option value="uk">Reino Unido</option>
                        <option value="francia">Francia</option>
                    </select>
                </label>

                <label className="block mb-4">
                    <span className="block text-lg font-medium text-gray-700">Programa de interés</span>
                    <select
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-purple-900 
                            focus:ring-2 focus:ring-customPurple"
                    >
                        <option value="">Selecciona tu programa de interés</option>
                        <option value="Undergraduate">Undergraduate</option>
                        <option value="High School">High School</option>
                        <option value="Master">Master</option>
                        <option value="Junior High School">Junior High School</option>
                    </select>
                </label>

                <label className="block mb-4">
                    <span className="block text-lg font-medium text-gray-700">
                        ¿Cómo te enteraste de nosotros?
                    </span>
                    <select
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-purple-900 
                            focus:ring-2 focus:ring-customPurple"
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="Google">Google</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Referencia">Referencia</option>
                    </select>
                </label>

                <div className="pt-4">
                    <button
                        type="submit"
                        className="w-full bg-customOrange text-white py-2 px-4 rounded-3xl hover:bg-customOrangeHover transition-colors"
                    >
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactUsForm;
