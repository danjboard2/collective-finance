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

    useLayoutEffect(() => {

        
    // Define animations for #nft
    gsap.to("#nft", {
        opacity:1,
        scrollTrigger: {
          trigger: ".assured",
          pin: true,
          start: "top-=500 bottom",
          end: "bottom-=400 bottom",
          scrub: true,
          pinSpacing: true,
          id: "nft",
          //markers: true
        }
      });
    gsap.to("#nft", {
        scrollTrigger: {
          trigger: ".assured",
          pin: true,
          start: "top bottom",
          end: "bottom+=4000 bottom",
          scrub: true,
          pinSpacing: true,
          id: "nft",
          //markers: true
        }
      });
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
          gsap.to(".box.a", {
            marginLeft: xs ? 20 : sm ? 40 : 93,
            rotation: 0,
            filter: "blur(0px)",
            scrollTrigger: {
              trigger: ".box.a",
              start: "top bottom-=100px",
              end: "bottom+=100px bottom-=500px",
              scrub: true,
              //markers: true,
              id: "Who"
            }
          });
          
          gsap.to(".box.b", {
            marginLeft: 0,
            rotation: 0,
            filter: "blur(0px)",
            scrollTrigger: {
              trigger: ".box.b",
              start: "top bottom-=400px",
              end: "bottom+=100px bottom-=600px",
              scrub: true,
              //markers: true,
              id: "We"
            }
          });
    
          gsap.to(".box.c", {
            marginLeft: 0,
            rotation: 0,
            filter: "blur(0px)",
            scrollTrigger: {
              trigger: ".box.c",
              start: "top bottom-=500px",
              end: "bottom+=100px bottom-=700px",
              scrub: true,
              //markers: true,
              id: "Are"
            }
          });
          gsap.to(".spin-container", {
            marginTop: 0,
            rotation: 0,
            scrollTrigger: {
              trigger: ".box.a",
              start: "top bottom-=700px",
              end: "bottom+=100px bottom-=700px",
              scrub: true,
              //markers: true,
              id: "Spin Container"
            }
          });
          gsap.to(".spinning-logo", {
            marginTop: 0,
            rotation: 360,
            scrollTrigger: {
              trigger: ".box.a",
              start: "top bottom-=300px",
              end: "bottom+=100px bottom-=700px",
              scrub: true,
              //markers: true,
              id: "Spinning Logo"
            }
          });

        gsap.to(".assured", {
            marginTop: 0,
            opacity:1,
            bottom: '12rem',
            filter: "blur(0px)",
            scrollTrigger: {
              trigger: ".box.a",
              start: "top bottom-=800px",
              end: "bottom+=100px bottom-=700px",
              scrub: true,
              //markers: true,
              id: "assured"
            }
          });

          gsap.to(".spinning-logo", {
            height:'9000px',
            width:'8000px',
            marginLeft:'-2200px',
            marginTop:'2800px',
            scrollTrigger: {
              trigger: ".box.a",
              start: "top bottom-=1400px",
              end: "bottom+=100px bottom-=2500px",
              scrub: true,
              //markers: true,
              id: "Spinning Logo"
            }
          });

          
          gsap.to(".svghex", {
            width:'4500px',
            height:'4500px',
            top:'3800px',
            left: '-150rem',
            opacity:1,
            scrollTrigger: {
              trigger: ".box.a",
              start: "top bottom-=1400px",
              end: "bottom+=100px bottom-=2500px",
              scrub: true,
              //markers: true,
              id: "Spinning Logo"
            }
          });

          gsap.to(".spinning-logo", {
            opacity:'0',
            scrollTrigger: {
              trigger: ".box.a",
              start: "top bottom-=2300px",
              end: "bottom+=100px bottom-=2500px",
              scrub: true,
              //markers: true,
              id: "Spinning Logo"
            }
          });
        },); // <- IMPORTANT! Scopes selector text
    
        return () => mm.revert();
      }, []); // <- empty dependency Array so it doesn't re-run on every render

    return (
        <>
        <div className="wwa-content sm:justify-center flex-col sm:flex-row w-full h-full flex overflow-hidden">
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
         </>
    )
}

export default Who