import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaHourglassHalf } from "react-icons/fa6";
import { IoCalendarSharp } from "react-icons/io5";


// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

export default function TimelineAnims() {

  return (
          <>
      <section className="company-timeline one pt-[100px]" id="company-timeline">
          <div className="contain">
            <div className="company-timeline-wrapper">
            <div className="timeline-heading overflow-x-clip">
                  <h2 className="year-2021 xs:text-[40px] sm:text-[50px] md:text-[80px] lg:text-[100px] xl:text-[180px] xxl:text-[220px] leading-[1] ml-[1000px] text-white  -mb-[450px] font-extrabold whitespace-nowrap">Roadmap</h2>
                 </div>
              <div className="company-timeline-list">
            <div className="company-timeline-year">
                <span className="timeline-date">
                    <div className="date"><span className="date relative"><span className="date2 z-10 relative font-semibold text-white text-base sm:text-2xl md:text-2xl xl:text-4xl !leading-[4rem]">Q3 <span className="hidden lg:inline">20</span>23</span><div className="absolute top-0 bottom-0 left-0 right-0 z-0"></div></span></div>
                </span>
                <span className="timeline-date">
                    <div className="date"><span className="date relative"><span className="date2 z-10 relative font-semibold text-white text-base sm:text-2xl md:text-2xl xl:text-4xl !leading-[4rem]">Q4 <span className="hidden lg:inline">20</span>23</span><div className="absolute top-0 bottom-0 left-0 right-0 z-0"></div></span></div>
                </span>
                <span className="timeline-date">
                    <div className="date"><span className="date relative"><span className="date2 z-10 relative font-semibold text-white text-base sm:text-2xl md:text-2xl xl:text-4xl !leading-[4rem]">Q1 <span className="hidden lg:inline">20</span>24</span><div className="absolute top-0 bottom-0 left-0 right-0 z-0"></div></span></div>
                 </span>
                 <span className="timeline-date">
                     <div className="date"><span className="date relative"><span className="date2 z-10 relative font-semibold text-white text-base sm:text-2xl md:text-2xl xl:text-4xl !leading-[4rem]">Q2 <span className="hidden lg:inline">20</span>24</span><div className="absolute top-0 bottom-0 left-0 right z-0"></div></span></div>
                 </span>
                 <span className="timeline-date">
                     <div className="date"><span className="date relative"><span className="date2 z-10 relative font-semibold text-white text-base sm:text-2xl md:text-2xl xl:text-4xl !leading-[1rem] !inline-block">Q3 <span className="hidden lg:inline">20</span>24<br/><span className="text-sm md:text-lg">onwards</span></span><div className="absolute top-0 bottom-0 left-0 right-0 z-0"></div></span></div>
                </span>
             </div>
    </div>
      <div className="company-timeline-slider xs:pl-[85px] sm:pl-[40px] md:pl-[100px] lg:pt-[20px] xl:pt-[120px] lg:pl-[180px] xl:pl-[210px]">
        <div className="company-timeline-block active mb-10"><div className="block-inner"><span className="timeline-date">Q3 2023</span><span className="circle"></span><p className="text-white xs:text-sm sm:text-base md:text-base lg:text-2xl"><IoCheckmarkCircle className=" text-green-400" size="25" /> Collective Finance team assembled<br/><IoCheckmarkCircle className=" text-green-400" size="25" /> Discord + Socials<br/><IoCheckmarkCircle className=" text-green-400" size="25" /> Seed-round investments and Angel NFT launched<br/><IoCheckmarkCircle className=" text-green-400" size="25" /> CGLD deployed on Arbitrum <br/></p></div></div>
        <div className="company-timeline-block active mb-10"><div className="block-inner"><span className="timeline-date">Q4 2023</span><span className="circle"></span><p className="text-white  xs:text-sm sm:text-base md:text-base lg:text-2xl">
        <IoCheckmarkCircle className=" text-green-400" size="25" /> Core product development of dApp<br/>
        <IoCheckmarkCircle className=" text-green-400" size="25" /> Trading portfolio allocation and partnership with successful on-chain crypto traders<br/>
        <IoCheckmarkCircle className=" text-green-400" size="25" /> Networking with ReFi projects both on-chain and off-chain<br/>
        <FaHourglassHalf className=" text-orange-300 pl-[3px]" size="20" /> Smart Contract development for dApp backend and NFT sale<br/>
        <FaHourglassHalf className=" text-orange-300 pl-[3px]" size="20"/> Native Collective Finance wallet<br/>
          </p></div></div>
        <div className="company-timeline-block active mb-10"><div className="block-inner"><span className="timeline-date">Q1 2024</span><span className="circle"></span><p className="text-white  xs:text-sm sm:text-base md:text-base lg:text-2xl">
        <IoCalendarSharp className=" text-red-500" size="24"/> Preparation for NFT launch<br/>
        <IoCalendarSharp className=" text-red-500" size="24"/> Marketing campaign<br/>
        <IoCalendarSharp className=" text-red-500" size="24"/> Community building<br/>
        <IoCalendarSharp className=" text-red-500" size="24"/> Collective Finance NFT launch<br/>
          </p></div></div>
        <div className="company-timeline-block active mb-10"><div className="block-inner"><span className="timeline-date">Q2 2024</span><span className="circle"></span><p className="text-white  xs:text-sm sm:text-base md:text-base lg:text-2xl">
        <IoCalendarSharp className=" text-red-500" size="24"/> Revenue stream expansion (RWA)<br/>
        <IoCalendarSharp className=" text-red-500" size="24"/> ReFi collaboration<br/>
        <IoCalendarSharp className=" text-red-500" size="24"/> Raise for the construction of a hyper-efficient agritech farm that also
produces excess energy. Proposed usage of excess energy is to mine Bitcoin<br/>
        </p>
      </div>
      </div>
      <div className="company-timeline-block active"><div className="block-inner"><span className="timeline-date">Q3 2024 and beyond</span><span className="circle"></span><p className="text-white  xs:text-sm sm:text-base md:text-base lg:text-2xl">
      <IoCalendarSharp className=" text-red-500" size="24"/> dApp improvements<br/>
      <IoCalendarSharp className=" text-red-500" size="24"/> Collective Finance DAO<br/>
      <IoCalendarSharp className=" text-red-500" size="24"/> VISA/Mastercard integration with Collective Finance wallet. Users will
be able to pay with crypto held while still earning yield.<br/>
        </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      </>
  );
};
