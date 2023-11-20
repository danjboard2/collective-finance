"use client"
import React, {useLayoutEffect, useEffect,  useRef, useState} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Hexagons from '../components/Hexagons'
import Image from "next/image";
import '../css/who.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

const Who = () => {

    return (
        <>
        <div className="wwa-content relative sm:justify-center flex-col sm:flex-row w-full h-full flex overflow-hidden">
        <div id="bg-layer" className="pt-[100px] h-full absolute top-0 bottom-0 left-0 right-0  overflow-hidden">
        <Hexagons startingI={40} startingJ={60} />
          </div>
           <div className="w-[95%] sm:w-2/3 md:w-1/2 flex flex-col justify-center">
               <div className="wwa-container flex min-w-[5000px] lg:pb-[20px] pt-[100px] sm:pt-[60px] md:pt-0 overflow-hidden">
                 <div className="box a mr-[20px] ml-[900px] w-fit text-[40px] sm:text-[50px] md:text-[60px] lg:text-[90px] xl:text-[120px] font-bold text-[#fff] blur-lg">Who</div>
                 <div className="box b mr-[20px] text-[40px]  ml-[900px] w-fit sm:text-[50px] md:text-[60px] lg:text-[90px] xl:text-[120px] font-bold text-[#fff] blur-lg">we</div>
                 <div className="box c mr-[20px] text-[40px]  ml-[900px]  w-fit sm:text-[50px] md:text-[60px] lg:text-[90px] xl:text-[120px] font-bold text-[#fff] blur-lg">are</div>
               </div>
             <p className="wwa-text ml-[20px] sm:ml-[40px] md:ml-[93px] lg:ml-[93px] lg:w-4/5 sm:text-base lg:text-xl xl:text-2xl xxl:text-3xl text-white z-1 relative pb-4 sm:pb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/>Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Netus et malesuada fames ac. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Iaculis at erat pellentesque adipiscing commodo elit at. Arcu felis bibendum ut tristique et egestas quis ipsum. </p>
           </div>
           <div className="w-full sm:w-1/3 md:w-1/2 flex flex-col justify-center">
            <div className="spin-container mt-[700px]">
            <svg xmlns="http://www.w3.org/2000/svg" className="svghex absolute top-28 left-0 opacity-0" viewBox="0 0 1024 1024" version="1.1" fill="#fff" width="380px">
                <path d="M896 704C896 720.213333 887.04 734.293333 873.386667 741.546667L536.32 930.986667C529.493333 936.106667 520.96 938.666667 512 938.666667 503.04 938.666667 494.506667 936.106667 487.68 930.986667L150.613333 741.546667C136.96 734.293333 128 720.213333 128 704L128 320C128 303.786667 136.96 289.706667 150.613333 282.453333L487.68 93.013333C494.506667 87.893333 503.04 85.333333 512 85.333333 520.96 85.333333 529.493333 87.893333 536.32 93.013333L873.386667 282.453333C887.04 289.706667 896 303.786667 896 320L896 704Z"/>
                </svg>
              <Image className="spinning-logo z-10 max-w-none" src="/media/images/collective-finance-logo-spin.png" alt="Collective Finance" loading="eager" height={700} width={700}></Image>
              </div>
            </div>
            <Image className="assured z-10 absolute opacity-0 bottom-0 right-32 blur-lg" src="/media/images/assured-logo.png" alt="Assured" loading="eager" height={250} width={250}></Image>
         </div>
         <div className="pin2"></div>
         </>
    )
}

export default Who