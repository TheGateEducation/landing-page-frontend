import React from "react";
import Image from "next/image";

import adelaide from "@src/images/logo/adelaide.png"
import aiit from "@src/images/logo/aiit.png"
import alc from "@src/images/logo/alc.png"
import cbs from "@src/images/logo/cbs.png"
import ciencias from "@src/images/logo/ciencias.png"
import ciss from "@src/images/logo/ciss.png"
import constructor from "@src/images/logo/constructor.png"
import curtini from "@src/images/logo/curtini.png"
import eduinter from "@src/images/logo/eduinter.png"
import ep from "@src/images/logo/ep.png"
import holmes from "@src/images/logo/holmes.png"
import james from "@src/images/logo/james.png"
import lakehead from "@src/images/logo/lakehead.png"
import latrobe from "@src/images/logo/latrobe.png"
import macquarie from "@src/images/logo/macquarie.png"
import ncl from "@src/images/logo/ncl.png"
import ohc from "@src/images/logo/ohc.png"
import outsorce from "@src/images/logo/outsorce.png"
import rmit from "@src/images/logo/rmit.png"
import schiller from "@src/images/logo/schiller.png"
import souther from "@src/images/logo/souther.png"
import srh from "@src/images/logo/srh.png"
import stanley from "@src/images/logo/stanley.png"
import tm from "@src/images/logo/tm.png"

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
                                    {Logos.map(([name, src]) => (
                                        <li key={name}>
                                            <img src={src} alt={name} />
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