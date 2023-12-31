"use client"
import React, {useLayoutEffect, useEffect,  useRef, useState} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Hexagons from '../components/Hexagons'
import Image from "next/image";
import Link from "next/link"
import '../css/who.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Who = () => {

    return (
        <>
        <div className="wwa-content relative justify-normal flex-col md:flex-row w-full h-full flex overflow-hidden">
        <div id="bg-layer" className="pt-[100px] h-full absolute top-0 bottom-0 left-0 right-0  opacity-50 overflow-hidden">
        <Hexagons startingI={40} startingJ={60} />
          </div>
           <div className="w-[95%] sm:w-full md:w-1/2 flex flex-col justify-center">
               <div className="wwa-container flex min-w-[5000px] lg:pb-[20px] pt-[100px] sm:pt-[60px] md:pt-0 overflow-hidden">
                 <div className="box a mr-[20px] ml-[900px] w-fit xs:text-[48px] sm:text-[48px] md:text-[65px] lg:text-[75px] xl:text-[100px] font-bold text-[#fff] blur-lg">Who</div>
                 <div className="box b mr-[20px] text-[40px]  ml-[900px] w-fit xs:text-[48px] sm:text-[48px] md:text-[65px] lg:text-[75px] xl:text-[100px] font-bold text-[#fff] blur-lg">we</div>
                 <div className="box c mr-[20px] text-[40px]  ml-[900px]  w-fit xs:text-[48px] sm:text-[48px] md:text-[65px] lg:text-[75px] xl:text-[100px] font-bold text-[#fff] blur-lg">are</div>
               </div>
             <p className="ml-[20px] sm:mr-[20px] md:mr-0 md:ml-[93px] lg:ml-[93px] lg:w-4/5 xs:text-sm sm:text-base lg:text-lg xl:text-xl xxl:text-xl text-white z-1 relative pb-4 md:pb-16">Collective Finance is the first DeFi protocol that allows users to earn GOLD as
passive yield. Our focus is on the RWA (Real World Assets) aspect of crypto,
and we also have ties in the ReFi sector as well.
<br/><br/>The goal is to set up verifiable revenue streams both on-chain and off-chain
that ramp up over time, creating value in the real world while using blockchain
technology to allow anyone from anywhere in the world to access them.
<br/><br/>Collective Finance currently has a portfolio managed by a team of crypto
traders who are verified on-chain millionaires, and is working towards
expanding into real world businesses as revenue streams.
<br/><br/>We are also heavily invested in and have a good relationships with
established ReFi teams such as the folks over at Kyoto Protocol - widely
considered to be one of the largest and most successful ReFi crypto projects.
</p>
           </div>
           <div className="md:pl-8 md:pt-8 sm:w-[320px] flex flex-col justify-center xs:self-center">
            <div className="spin-container xs:mt-[150px] md:mt-[700px] lg:ml-20 xl:ml-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="svghex absolute xs:top-8 xs:w-[140px] xs:-left-2 sm:top-12 sm:w-[180px] sm:-left-2 lg:w-[190px] xl:w-[380px] lg:-left-4 lg:top-10 xl:top-28 xl:left-0 opacity-0" viewBox="0 0 1024 1024" version="1.1" fill="#fff" width="380px">
                <path d="M896 704C896 720.213333 887.04 734.293333 873.386667 741.546667L536.32 930.986667C529.493333 936.106667 520.96 938.666667 512 938.666667 503.04 938.666667 494.506667 936.106667 487.68 930.986667L150.613333 741.546667C136.96 734.293333 128 720.213333 128 704L128 320C128 303.786667 136.96 289.706667 150.613333 282.453333L487.68 93.013333C494.506667 87.893333 503.04 85.333333 512 85.333333 520.96 85.333333 529.493333 87.893333 536.32 93.013333L873.386667 282.453333C887.04 289.706667 896 303.786667 896 320L896 704Z"/>
                </svg>
              <Image className="spinning-logo mt-[460px] rotate-[260deg] z-10 max-w-none xs:w-[220px] sm:w-[320px] xl:w-[700px]" src="/media/images/collective-finance-logo-spin.png" alt="Collective Finance" loading="eager" height={700} width={700}></Image>
              </div>
            </div>
            <Link href="https://assuredefi.com/projects/collective-finance/" at="Collective Finance - Assured Defi Gold Standard"><Image className="assured -z-[1] absolute opacity-0 bottom-0 right-32 blur-lg xs:right-6 w-[150px] md:w-[250px]" src="/media/images/assured-logo.webp" alt="Assured" loading="eager" height={250} width={250}></Image></Link>
         </div>
         </>
    )
}

export default Who