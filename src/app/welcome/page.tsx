"use client"
import React, {useEffect} from 'react';
import {NavBar} from "@/app/welcome/NavBar";
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import {mainText} from "@/lib/constance/norway"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";





function Page() {

    useEffect(()=>{
        getNorwayMainText()
    },[])


    function getNorwayMainText ():any{
        return mainText.map(oneText=>({
            text: oneText.text,
            className: oneText.className,
        }))
    }




    return (
        <div>

            <div className="relative w-full h-[1000px]">
                <NavBar />
                <Image src="/images/norway.jpg" alt="Norway" fill className="h-auto max-w-full" />

                <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white">
                    <TypewriterEffectSmooth className="text-white" words={getNorwayMainText()} />
                </div>

                <div className="absolute top-6/10 left-4/10 text-center text-xl text-white">
                    <p className="text-white">
                        Norway: Pushing the boundaries for foodie adventurers
                    </p>
                </div>


            </div>





        </div>
    );
}

export default Page;