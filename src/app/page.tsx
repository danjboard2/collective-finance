"use client";
import Image from 'next/image';
import React, {useLayoutEffect, useEffect,  useRef, useState} from "react";
import { useCookies } from 'react-cookie';
import Hexagons from '../app/components/Hexagons'
import Who from  '../app/components/Who'
import NFT from  '../app/components/NFT'
import Timeline from  '../app/components/Timeline'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

export default function Home() {
  const [cookies, setCookie] = useCookies(['splashShown']);
  const [isSplashShown, setIsSplashShown] = useState(false);

  useLayoutEffect(() => {
    // Define animations for #who
    let ctx = gsap.context(() => {
    gsap.to("#who", {
        scrollTrigger: {
            trigger: "#who",
            pin: true,
            start: "top top",
            end: "bottom+=4000 bottom",
            pinSpacing:'margin',
            scrub: true,
            id: "Who",
            //markers: true
        }
    });
  },);
    // Cleanup function
    return () => ctx.revert(); // cleanup
}, []);

  useEffect(() => {
    // Check if the splash screen was already shown
    if (!cookies.splashShown) {
      // Show the splash screen
      setIsSplashShown(true);

      // Set a timer to wait for 3 seconds
      const timer = setTimeout(() => {
        // After 3.5 seconds, set the cookie and hide the splash screen
        setCookie('splashShown', true, { path: '/' });
        setIsSplashShown(false);
      }, 3400);

      // Clear the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [cookies, setCookie]);

  return (
    <>
    <div className={`w-full h-full relative ${isSplashShown ? 'hide-overflow' : 'show'}`}>
     {isSplashShown && (
      <main className={`absolute top-0 bottom-0 left-0 right-0 z-[100] h-screen w-full flex justify-center items-center bg-[#131313]`} id="splash">
          <Image className="spin-anim" src="/media/images/collective-finance-logo-spin.png" alt="Collective Finance" height={160} width={160}></Image>
      </main>
        )}
      <main className={`h-full w-full flex flex-col bg-[#131313]`} id="home">
        <section className="relative w-full h-screen" id="hero">
        <div id="bg-layer" className="pt-[100px] h-full absolute top-0 bottom-0 left-0 right-0  overflow-hidden">
            <Hexagons startingI={0} startingJ={30} />
          </div>
          <div className="flex flex-row w-full h-full">
            <div className="w-[40%] bg-black bg-opacity-50 h-full flex justify-center flex-col relative z-10 pl-28">
                <h1 id="gold" className="text-white font-bold sm:text-[50px] md:text-[60px] lg:text-[90px] xl:text-[120px] mb-0">Gold</h1>
                <h1 id="silver"className="text-white font-bold sm:text-[50px] md:text-[60px] lg:text-[90px] xl:text-[120px]  -mt-[50px] mb-0">Silver</h1>
                <h1 id="diamond" className="text-white font-bold sm:text-[50px] md:text-[60px] lg:text-[90px] xl:text-[120px] -mt-[50px] mb-0">Diamond</h1>
                <h2 className="text-white font-light text-[45px] max-w-[550px] leading-tight mt-0">Earn passive yield on the commodities asset class</h2>
                <button className="text-white hover:text-black hover:bg-white duration-300 flex items-center border-2 text-3xl mt-20 py-1 justify-around w-[300px] px-6"><Image className="hover:spin-anim" src="/media/images/collective-finance-logo.png" alt="Collective Finance" height={40} width={40}></Image> Open dApp</button>
            </div>
            <div className="w-[60%] flex-row relative z-10 overflow-hidden">
              <Image className="max-w-none pl-40" src="/media/images/collective-finance-logo.png" loading="eager" alt="Collective Finance" height={1600} width={1600}></Image>
            </div>
          </div>
          </section>
          <section className="w-full flex  min-h-full h-screen bg-black bg-opacity-70 overflow-hidden z-10" id="who">
            <Who />
            <NFT />
            </section>
            
            <section className="w-full flex  min-h-full bg-black bg-opacity-70 overflow-hidden z-10" id="timeline">
            <Timeline />
            </section>
      </main>
      </div>
    </>
  );
}