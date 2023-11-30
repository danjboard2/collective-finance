import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

export default function TimelineAnims() {

  return (
          <>
      <section className="company-timeline one pt-[100px]" id="company-timeline">
          <div className="contain">
            <div className="company-timeline-wrapper">
            <div className="timeline-heading overflow-x-clip">
                  <h2 className="year-2021 sm:text-[50px] md:text-[80px] lg:text-[100px] xl:text-[180px] xxl:text-[220px] leading-[1] ml-[1000px] text-white  -mb-[450px] font-extrabold whitespace-nowrap">2023 Roadmap</h2>
                 </div>
              <div className="company-timeline-list">
            <div className="company-timeline-year">
                <span className="timeline-date">
                    <div className="date"><span className="date relative"><span className="date2 z-10 relative font-semibold text-white text-base sm:text-2xl md:text-2xl xl:text-4xl !leading-[4rem]">Jan<span className="hidden lg:inline">uary</span></span><div className="absolute top-0 bottom-0 left-0 right-0 z-0"></div></span></div>
                </span>
                <span className="timeline-date">
                    <div className="date"><span className="date relative"><span className="date2 z-10 relative font-semibold text-white text-base sm:text-2xl md:text-2xl xl:text-4xl !leading-[4rem]">Mar<span className="hidden lg:inline">ch</span></span><div className="absolute top-0 bottom-0 left-0 right-0 z-0"></div></span></div>
                </span>
                <span className="timeline-date">
                    <div className="date"><span className="date relative"><span className="date2 z-10 relative font-semibold text-white text-base sm:text-2xl md:text-2xl xl:text-4xl !leading-[4rem]">Jun<span className="hidden lg:inline">e</span></span><div className="absolute top-0 bottom-0 left-0 right-0 z-0"></div></span></div>
                 </span>
                 <span className="timeline-date">
                     <div className="date"><span className="date relative"><span className="date2 z-10 relative font-semibold text-white text-base sm:text-2xl md:text-2xl xl:text-4xl !leading-[4rem]">Aug<span className="hidden lg:inline">ust</span></span><div className="absolute top-0 bottom-0 left-0 right z-0"></div></span></div>
                 </span>
                 <span className="timeline-date">
                     <div className="date"><span className="date relative"><span className="date2 z-10 relative font-semibold text-white text-base sm:text-2xl md:text-2xl xl:text-4xl !leading-[4rem]">Dec<span className="hidden lg:inline">ember</span></span><div className="absolute top-0 bottom-0 left-0 right-0 z-0"></div></span></div>
                </span>
             </div>
    </div>
      <div className="company-timeline-slider pl-[30px] sm:pl-[40px] md:pl-[80px] lg:pt-[20px] xl:pt-[120px] lg:pl-[180px] xl:pl-[210px]">
        <div className="company-timeline-block active"><div className="block-inner"><span className="timeline-date">January</span><span className="circle"></span><h4 className="text-white text-2xl xl:text-3xl xxl:text-4xl font-bold">First event happened.</h4><p className="text-white md:text-base lg:text-xl">Lorem ipsum dolor sit amet, consetetur lorem ips sadipscing elitr, sed diam nonumy eirmorem ipsum dolor sit amet, consetetur lorem ips sadipscing elitr, sed diam nonumy eirmod.d.</p></div></div>
        <div className="company-timeline-block active"><div className="block-inner"><span className="timeline-date">March</span><span className="circle"></span><h4 className="text-white text-2xl xl:text-3xl xxl:text-4xl font-bold">Lorem Ipsum Dolor 3</h4><p className="text-white  md:text-base lg:text-xl">pscing elitr, sed pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verpscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed pscing elitr, sed pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verpscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verdiam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verdiam voluptua. At verdiam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua.  At verlorem </p></div></div>
        <div className="company-timeline-block active"><div className="block-inner"><span className="timeline-date">June</span><span className="circle"></span><h4 className="text-white text-2xl xl:text-3xl xxl:text-4xl font-bold">Lorem Ipsum Dolor 3</h4><p className="text-white  md:text-base lg:text-xl">Lorem ipsum dolor sit amet, consetetur lorem ips sadipscing elitr, sed diam nonumy eirmorem ipsum dolor sit amet, consetetur lorem ips sadipscing elitr, sed diam nonumy eirmod.d.</p></div></div>
        <div className="company-timeline-block active"><div className="block-inner"><span className="timeline-date">August</span><span className="circle"></span><h4 className="text-white text-2xl xl:text-3xl xxl:text-4xl font-bold">Lorem Ipsum Dolor 3</h4><p className="text-white  md:text-base lg:text-xl">pscing elitr, sed pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verpscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed pscing elitr, sed pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verpscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verdiam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verdiam voluptua. At verdiam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua.  At verlorem </p></div></div>
        <div className="company-timeline-block active"><div className="block-inner"><span className="timeline-date">December</span><span className="circle"></span><h4 className="text-white text-2xl xl:text-3xl xxl:text-4xl font-bold">Lorem Ipsum Dolor 3</h4><p className="text-white  md:text-base lg:text-xl">Apscing elitr, sed pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verpscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed pscing elitr, sed pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verpscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verdiam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verdiam voluptua. At verdiam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua.  At verlorem </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      </>
  );
};
