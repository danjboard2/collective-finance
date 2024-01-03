"use client"
import React, {useLayoutEffect, useEffect,  useRef, useState} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Hexagons from '../components/Hexagons'
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const NFT = () => {
    
    return (
        <>
        <section className="w-full flex min-h-full bg-[#D7D7D7] bg-opacity-100 opacity-0 absolute top-0 bottom-0 left-0 right-0 z-10" id="nft">
        <div className="opacity-40"><Hexagons startingI={100} startingJ={130} /></div>
        <div className="nft-content flex-col w-full h-full flex overflow-hidden">
        <div className="header-text w-full bg-[#BBB] flex pt-[80px] relative">
          <h1 className="ml-[20px] xs:ml-[20px] sm:ml-[40px] md:ml-[93px] lg:ml-[93px] xs:text-[48px] sm:text-[48px] md:text-[65px] lg:text-[75px] xl:text-[100px] text-black font-bold">Our NFTs</h1>
          </div>
          <div className="xs:w-[166.6666666%] md:w-[150%] content-wrap flex flex-row h-full" id="nft-wrap">
           <div className="xs:w-2/3 md:w-1/2 flex flex-col justify-center relative" id="collector">
              <h2 className="ml-[20px] xs:ml-[20px] sm:ml-[40px] md:ml-[93px] lg:ml-[140px] mb-10 text-3xl md:text-4xl text-black font-bold">Why become a Collector?</h2>
              <p className="wwa-text ml-[20px] xs:ml-[20px] sm:ml-[40px] md:ml-[93px] lg:ml-[140px] lg:w-4/5 xs:text-sm sm:text-base lg:text-xl xl:text-xl font-bold text-black z-1 relative pb-4 sm:pb-16">By owning a Collective Finance NFT, you gain exposure to any and all of the
growing revenue streams the protocol has, and will have in the future. Simply
hold the our NFTs in your Collective Finance wallet to earn yield.<br/><br/>No complex staking layers, lock periods, or leverage loops needed.</p>
           </div>
           <div className="w-full  xs:w-1/3 md:w-1/2 flex flex-col relative justify-center xl:justify-end items-center">
           <Image className="opacity-100 hidden xl:block" src="/media/images/phone-1.png" alt="Collective Finance Phone" loading="eager" height={800} width={800}></Image>
           <Image className="opacity-100 block xl:hidden md:px-20" src="/media/images/phone-mobile.png" alt="Collective Finance Phone" loading="eager" height={800} width={800}></Image>
            </div>
            <div className="xs:w-2/3 md:w-1/2 h-full overflow:hidden flex flex-col justify-center relative" id="benefits">
              <h2 className="ml-[20px] xs:ml-[20px] sm:ml-[40px] lg:ml-[40px] mb-10 text-3xl md:text-4xl text-black font-bold">What is <span id="goldsm" className="">CGLD?</span></h2>
              <p className="wwa-text ml-[20px] xs:ml-[20px] sm:ml-[40px] lg:ml-[40px] mr-[20px] sm:mr-[40px] lg:mr-[40px] lg:w-4/5 xs:text-sm sm:text-base lg:text-xl xl:text-xl font-bold text-black z-1 relative pb-4 sm:pb-16">
               Collectors (NFT hodlers) receive rewards in the native token <span id="goldsm" className="">CGLD</span>, which
is a fee-less, fully-collaterallized, non-custodial, tokenized version of <span id="goldsm" className="">GOLD</span>.
<br/><br/><span id="goldsm" className="">CGLD</span> is backed with a combination of PAXG (Paxos’ gold stablecoin),
USDC.e & USDT. It serves as an on-chain liquidity solution for the classically
hard-to-move, wealth-preserving commodity <span id="goldsm" className="">GOLD</span>.<br/><br/>1 <span id="goldsm" className="">CGLD</span> = 1 gram of <span id="goldsm" className="">GOLD</span>.</p>
           </div>
            </div>
         </div>
         </section>
         </>
    )
}

export default NFT