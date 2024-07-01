import React from "react";
import Image from "next/image";

import adelaide from "@public/logo/adelaide.png"
import aiit from "@public/logo/aiit.png"
import alc from "@public/logo/alc.png"
import cbs from "@public/logo/cbs.png"
import ciencias from "@public/logo/ciencias.png"
import ciss from "@public/logo/ciss.png"
import constructor from "@public/logo/constructor.png"
import curtini from "@public/logo/curtini.png"
import eduinter from "@public/logo/eduinter.png"
import ep from "@public/logo/ep.png"
import holmes from "@public/logo/holmes.png"
import james from "@public/logo/james.png"
import lakehead from "@public/logo/lakehead.png"
import latrobe from "@public/logo/latrobe.png"
import macquarie from "@public/logo/macquarie.png"
import ncl from "@public/logo/ncl.png"
import ohc from "@public/logo/ohc.png"
import outsorce from "@public/logo/outsorce.png"
import rmit from "@public/logo/rmit.png"
import schiller from "@public/logo/schiller.png"
import souther from "@public/logo/souther.png"
import srh from "@public/logo/srh.png"
import stanley from "@public/logo/stanley.png"
import tm from "@public/logo/tm.png"

const logos = {
    adelaide,
    aiit,
    alc,
    cbs,
    ciencias,
    ciss,
    constructor,
    curtini,
    eduinter,
    ep,
    holmes,
    james,
    lakehead,
    latrobe,
    macquarie,
    ncl,
    ohc,
    outsorce,
    rmit,
    schiller,
    souther,
    srh,
    stanley,
    tm
};

const Logos = Object.entries(logos);

export const Carousel = () => {
    return (
        <>
            <div className="relative font-inter antialiased">
                <div className="relative h-3/5 flex flex-col justify-center  overflow-hidden">
                    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-24">
                        <div className="text-center">
                            <div x-data="{}" x-init="$nextTick(() => {
                                    let ul = $refs.logos;
                                    ul.insertAdjacentHTML('afterend', ul.outerHTML);
                                    ul.nextSibling.setAttribute('aria-hidden', 'true');
                                })"
                                className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                                <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll ">
                                    {Logos.map(([name, logo]) => (
                                        <li key={name}>
                                            <Image src={logo} alt={name} width={100} height={100} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};