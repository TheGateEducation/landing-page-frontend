import Link from "next/link";
import React from "react";

export const Footer = () => {
    return (
        <footer id="footer">
            <hr className="w-11/12 mx-auto" />

            <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
                <div className="col-span-full xl:col-span-2">
                    <Link
                        rel="noreferrer noopener"
                        href="/"
                        className="font-bold text-xl flex"
                    >
                        The Gate Education
                    </Link>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Follow US</h3>
                    <div>
                        <Link
                            rel="noreferrer noopener"
                            href="https://www.instagram.com/the_gate_education/"
                            className="opacity-60 hover:opacity-100"
                        >
                            Instagram
                        </Link>
                    </div>

                    <div>
                        <Link
                            rel="noreferrer noopener"
                            href="https://x.com/TheGateEdux"
                            className="opacity-60 hover:opacity-100"
                        >
                            X
                        </Link>
                    </div>

                    <div>
                        <Link
                            rel="noreferrer noopener"
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Facebook
                        </Link>
                    </div>
                    <div>
                        <Link
                            rel="noreferrer noopener"
                            href="https://www.linkedin.com/company/thegate-education/"
                            className="opacity-60 hover:opacity-100"
                        >
                            Linkedin
                        </Link>
                    </div>
                </div>



                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">About</h3>
                    <div>
                        <Link
                            rel="noreferrer noopener"
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Features
                        </Link>
                    </div>

                    <div>
                        <Link
                            rel="noreferrer noopener"
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Programas
                        </Link>
                    </div>

                    <div>
                        <Link
                            rel="noreferrer noopener"
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Servicios
                        </Link>
                    </div>
                    <div>
                        <Link
                            rel="noreferrer noopener"
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Noticias
                        </Link>
                    </div>
                    <div>
                        <Link
                            rel="noreferrer noopener"
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Contacto
                        </Link>
                    </div>
                </div>


            </section>

            <section className="container pb-14 text-center">
                <h3>
                    &copy; 2024 Landing page made for {" "}
                    <Link
                        rel="noreferrer noopener"
                        target="_blank"
                        href="/"
                        className="text-primary transition-all border-primary hover:border-b-2"
                    >
                        The Gate Education
                    </Link>
                </h3>
            </section>
        </footer>
    );
};