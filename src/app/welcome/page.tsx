import React from 'react';
import {NavBar} from "@/app/welcome/NavBar";
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";




function Page() {

    const norwayMainText = [
        {
            text: "KITCHEN",
            className: "text-white",
        },
        {
            text: "AT",
            className: "text-white",
        },
        {
            text: "THE",
            className: "text-white",
        },
        {
            text: "END",
            className: "text-white",
        },
        {
            text: "OF",
            className: "text-white",
        },
        {
            text: "THE",
            className: "text-white",
        },
        {
            text: "WORLD",
            className: "text-white",
        }
    ];



    return (
        <div>

            <div className="relative w-full h-[1000px]">
                <NavBar />
                <Image src="/images/norway.jpg" alt="Norway" fill className="h-auto max-w-full" />

                <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white">
                    <TypewriterEffectSmooth className="text-white" words={norwayMainText} />
                </div>

            </div>





        </div>
    );
}

export default Page;