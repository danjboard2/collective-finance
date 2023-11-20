"use client"
import React, {useLayoutEffect, useEffect,  useRef, useState} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Hexagons from '../components/Hexagons'
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

const NFT = () => {
    
    useLayoutEffect(() => {
        // Create a timeline context
      const mm = gsap.matchMedia();
      mm.add(
        {
          xs: '(min-width: 0px) and (max-width: 479px)',
          sm: '(min-width: 480px) and (max-width: 767px)',
          md: '(min-width: 768px) and (max-width: 1023px)',
          lg: '(min-width: 1024px) and (max-width: 1439px)',
          xl: '(min-width: 1440px) and (max-width: 1919px)',
          xxl: '(min-width: 1920px) and (max-width: 5000px)',
        },
        (c) => {
          let { xs, sm, md, lg, xl, xxl } = c.conditions;
          gsap.to("#collector", {
            marginLeft:'-50%',
            scrollTrigger: {
              trigger: "#who",
              start: "top+=2500 center",
              end: "bottom+=4000 bottom",
              scrub: true,
              //markers: true,
              id: "benefits"
            }
          });
          gsap.to("#nft-wrap", {
            width: '100%',
            scrollTrigger: {
              trigger: "#who",
              start: "top+=2500 center",
              end: "bottom+=4000 bottom",
              scrub: true,
              //markers: true,
              id: "benefits"
            }
          });
          gsap.to("#benefits", {
            scrollTrigger: {
              trigger: "#who",
              start: "top+=2500 center",
              end: "bottom+=4000 bottom",
              scrub: true,
              //markers: true,
              id: "benefits"
            }
          });
    },); // <- IMPORTANT! Scopes selector text
        return () => mm.revert();
      }, []); // <- empty dependency Array so it doesn't re-run on every render

    return (
        <>
        <section className="w-full flex min-h-full bg-[#D7D7D7] bg-opacity-100 opacity-0 absolute top-0 bottom-0 left-0 right-0 z-10" id="nft">
        <Hexagons startingI={100} startingJ={130} />
        <div id=""></div>
        <div className="nft-content flex-col w-full h-full flex overflow-hidden">
        <div className="header-text w-full bg-[#BBB] flex pt-[80px] relative">
          <h1 className="ml-[20px] sm:ml-[40px] md:ml-[93px] lg:ml-[93px] sm:text-[50px] md:text-[60px] lg:text-[90px] xl:text-[120px] text-black font-bold">Our NFTs</h1>
          </div>
          <div className="w-[150%] content-wrap flex flex-row h-full" id="nft-wrap">
           <div className="w-[50%] flex flex-col justify-center relative" id="collector">
              <h2 className="ml-[20px] sm:ml-[40px] md:ml-[93px] lg:ml-[93px] mb-10 text-5xl xl:text-[44px] text-black font-bold">Why become a Collector?</h2>
              <p className="wwa-text ml-[20px] sm:ml-[40px] md:ml-[93px] lg:ml-[93px] lg:w-4/5 sm:text-base lg:text-xl xl:text-2xl font-bold text-black z-1 relative pb-4 sm:pb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/>Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Netus et malesuada fames ac. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Iaculis at erat pellentesque adipiscing commodo elit at. Arcu felis bibendum ut tristique et egestas quis ipsum.</p>
           </div>
           <div className="w-full sm:w-1/3 md:w-1/2 flex flex-col relative justify-end items-center">
           <Image className="opacity-100" src="/media/images/phone-1.png" alt="Collective Finance Phone" loading="eager" height={800} width={800}></Image>
            </div>
            <div className="w-[50%] h-full overflow:hidden flex flex-col justify-center relative" id="benefits">
              <h2 className="ml-[20px] sm:ml-[40px] md:ml-[93px] lg:ml-[93px] mb-10 text-5xl xl:text-[44px] text-black font-bold">NFT Benefits</h2>
              <p className="wwa-text ml-[20px] sm:ml-[40px] md:ml-[93px] lg:ml-[93px] lg:w-4/5 sm:text-base lg:text-xl xl:text-2xl font-bold text-black z-1 relative pb-4 sm:pb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/>Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Netus et malesuada fames ac. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Iaculis at erat pellentesque adipiscing commodo elit at. Arcu felis bibendum ut tristique et egestas quis ipsum.</p>
           </div>
            </div>
         </div>
         </section>
         </>
    )
}

export default NFT