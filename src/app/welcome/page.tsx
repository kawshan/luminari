"use client"
import React, {useEffect} from 'react';
import {NavBar} from "@/app/welcome/NavBar";
import Image from "next/image";
import {TypewriterEffectSmooth} from "@/components/ui/typewriter-effect";
import {mainText} from "@/lib/constance/norway"
import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-card";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";

function Page() {

    useEffect(() => {
        getNorwayMainText()
    }, [])


    function getNorwayMainText(): any {
        return mainText.map(oneText => ({
            text: oneText.text,
            className: oneText.className,
        }))
    }


    return (
        <div>



                <div className="relative w-full h-[1000px]">
                    <NavBar/>
                    <Image src="/images/norway.jpg" alt="Norway" fill className="h-auto max-w-full"/>

                    <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white">
                        <TypewriterEffectSmooth className="text-white" words={getNorwayMainText()}/>
                    </div>

                    <div className="absolute top-6/10 left-4/10 text-center text-xl text-white">
                        <p className="text-white">
                            Norway: Pushing the boundaries for foodie adventurers
                        </p>
                    </div>


                </div>


                {/*first image start*/}
                <div className="grid grid-cols-4 gap-4">
                    <div>
                        <CardContainer className="inter-var">
                            <CardBody
                                className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[35rem] h-auto rounded-xl p-6 border  ">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    DAY 1 - MEET TRAILBLAZING CHEFS IN THE NORDIC WILDERNESS
                                </CardItem>
                                <CardItem
                                    translateZ="100"
                                    rotateX={20}
                                    rotateZ={-10}
                                    className="w-full mt-4"
                                >
                                    <img
                                        src="/images/outdoor-cooking.jpg"
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>

                                <div className="mt-5">
                                    <p>Few travellers have visited the
                                        Lofoten Islands. On the edge of the Arctic Circle, this remote archipelago in the northern
                                        reaches of Norway has just two small towns, but has fast garnered a reputation for becoming
                                        home
                                        to some of the most innovative, yet most traditional culinary talent in the world.</p>

                                    <p className="mt-5">Take family or friends on an
                                        expedition to discover heritage, food and a way of life.</p>

                                    <p className="mt-5">The sheer abundance of ingredients,
                                        from cod, crab and sea urchin, to foraged mountain herbs and globally renowned Lofoten lamb,
                                        offers chefs extraordinary opportunity for experimentation.</p>

                                    <p className="mt-5">On this 7-day journey, travel
                                        across the archipelago, stay in centuries-old farmhouses, and explore land and sea in search
                                        of
                                        ingredient origins along this fissured coast.</p>

                                </div>
                            </CardBody>
                        </CardContainer>
                    </div>
                {/*first image end*/}

                    {/*  second image start  */}
                    <div>
                        <CardContainer className="inter-var">
                            <CardBody
                                className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[35rem] h-auto rounded-xl p-6 border  ">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    DAY 2 - CONNECT INGREDIENTS TO THEIR ROOTS
                                </CardItem>
                                <CardItem
                                    translateZ="100"
                                    rotateX={20}
                                    rotateZ={-10}
                                    className="w-full mt-4"
                                >
                                    <img
                                        src="/images/cabin.jpg"
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                <div>
                                    <p className="mt-5">Visit a well-preserved fishing
                                        settlement which traces its origins back to the 1500s. The village of Å is located at the
                                        very southern tip of the Lofoten islands, reaching out into the Norwegian Sea.</p>
                                    <p className="mt-5">Later, meet a local foraging
                                        expert to discover the abundance of the wild pantry that surrounds the islands year-round.
                                        The experience changes entirely depending on the time of year, providing insight into how
                                        the variety of plants, algae and seaweeds found on the islands can be used, and those to be
                                        avoided! Spend the evening at leisure.</p>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </div>
                    {/*  second image end       */}

                    {/*third image start*/}
                    <div>
                        <CardContainer className="inter-var">
                            <CardBody
                                className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[35rem] h-auto rounded-xl p-6 border  ">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    DAY 3 - ANCIENT FISHING ROUTES
                                </CardItem>
                                <CardItem
                                    translateZ="100"
                                    rotateX={20}
                                    rotateZ={-10}
                                    className="w-full mt-4"
                                >
                                    <img
                                        src="/images/fishing.jpg"
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                <div>
                                    <p className="mt-5">The fishing tradition in the
                                        Lofoten Islands dates back centuries and distinctive red Rorbuer fishermen's huts line the
                                        coastline here. The islands are well noted for their cod fishing season which runs from February
                                        to April, and for their air-drying method used to create stockfish – a delicacy exported around
                                        the world.</p>
                                    <p className="mt-5">Take a late start to the day or
                                        wander around the seafront, and then meet a local captain at the harbour who will lead you out
                                        into the pristine water for a fishing expedition aboard a traditional vessel. Change into your
                                        overalls and experience how these islanders have subsisted for centuries.</p>
                                    <p className="mt-5">As you return to shore, the day's
                                        catch is prepared over a beachside bonfire for a truly memorable dinner.</p>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </div>
                    {/*third image end*/}


                    {/*fourth image start*/}
                    <div>
                        <CardContainer className="inter-var">
                            <CardBody
                                className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[35rem] h-auto rounded-xl p-6 border  ">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    DAY 4 - THE CHEF’S TABLE AND AN INCONGRUOUS GALLERY
                                </CardItem>
                                <CardItem
                                    translateZ="100"
                                    rotateX={20}
                                    rotateZ={-10}
                                    className="w-full mt-4"
                                >
                                    <img
                                        src="/images/aurora.jpg"
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                <div>
                                    <p className="mt-5">Depart Holmen and
                                        venture north across the archipelago to the town of Ballstad. Here, chef
                                        proprietor Roy-Magne Berglund welcomes you to the immersive chef’s table
                                        experience at his dynamic restaurant, Lofoten Food Studio. He’ll share the
                                        provenance of a smorgasbord of seasonal ingredients from the immediate vicinity,
                                        and the innovative techniques he applies to bring them to life.</p>
                                    <p className="mt-5">Continuing north,
                                        arrive at the picturesque town of Henningsvær in the late afternoon and check in
                                        to Henningsvær Bryggehotell, a hotel featuring Rooms and Suites arranged over a
                                        series of lodges nestled within the fisherman's cabins of the harbour.</p>
                                    <p className="mt-5">Before dinner,
                                        discover the town’s lively cultural scene and explore the KaviarFactory, a
                                        leading gallery and museum for contemporary art by Norwegian and international
                                        artists, such as Bjarne Melgaard, Ai Weiwei, Marina Abramovic, and Yoko Ono. Its
                                        off-grid location aims to offer experiences and confrontations not normally
                                        found in such a remote region.</p>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </div>
                    {/*fourth image end*/}


                </div>



            <div className="grid grid-cols-4 gap-4">
                {/*fifth image start*/}
                <div>
                    <CardContainer className="inter-var">
                        <CardBody
                            className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[35rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                DAY 5 - FLOAT THROUGH FJORDS
                            </CardItem>
                            <CardItem
                                translateZ="100"
                                rotateX={20}
                                rotateZ={-10}
                                className="w-full mt-4"
                            >
                                <img
                                    src="/images/fjords.jpg"
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div>
                                <p className="mt-5">Glide through hidden
                                    coves, navigate narrow channels, and explore diverse marine life by paddle board. In
                                    a hooded Arctic wetsuit meet your Standup Paddleboarding (SUP) instructor on the
                                    crystal-clear waters of the fjords to take in the breathtaking mountain
                                    landscape.</p>
                                <p className="mt-5">Later that afternoon,
                                    explore the area around Henningsvær in your SUV. Look out for a pop-up restaurant or
                                    stop for a local fish burger as you go. In summer, enjoy the midnight sun, and the
                                    winter could offer an opportunity to spot the Northern Lights. Return to your room
                                    in Henningsvær.</p>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
                {/*fifth image end*/}


                {/*sixth image start*/}
                <div>
                    <CardContainer className="inter-var">
                        <CardBody
                            className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[35rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                DAY 6 - FINE DINING IN A REMOTE FARMSTEAD
                            </CardItem>
                            <CardItem
                                translateZ="100"
                                rotateX={20}
                                rotateZ={-10}
                                className="w-full mt-4"
                            >
                                <img
                                    src="/images/sweet.jpg"
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div>
                                <p>Drive north, stopping
                                    en route in the islands’ ‘capital’ Svolvær for a stroll.</p>
                                <p>Continue on to Kvitnes
                                    Gård, a farm operating in harmony with its pristine natural environment. Here, one
                                    of Norway’s most prominent chefs, Halvar Ellingsen creates an exceptional culinary
                                    adventure in his intimate restaurant, which has become globally renowned in recent
                                    years. Born and raised in a family of gatherers, butchers and fishermen, Halvar came
                                    to appreciate the value of traditionally disregarded ingredients.</p>
                                <p>Enjoy homegrown and
                                    locally sourced ingredients, tasting flavours of the region in their expansive
                                    tasting menu that evening. Stay overnight in the historic farmhouse.</p>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
                {/*sixth image end*/}


                {/*seven image start*/}
                <div>
                    <CardContainer className="inter-var">
                        <CardBody
                            className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[35rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                DAY 7 - DEPARTURE
                            </CardItem>
                            <CardItem
                                translateZ="100"
                                rotateX={20}
                                rotateZ={-10}
                                className="w-full mt-4"
                            >
                                <img
                                    src="/images/airport.jpg"
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div>
                                 <p className="mt-5">Drive to Evenes. The connecting flight home departs from Harstad/Narvik Airport.</p>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
                {/*seven image end*/}


            </div>


        </div>
    );
}

export default Page;