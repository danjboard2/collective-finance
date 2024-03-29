"use client";
import Image from 'next/image';
import React, {useLayoutEffect, useEffect,  useRef, useState} from "react";
import { useCookies } from 'react-cookie';
import Hexagons from '../app/components/Hexagons'
import Who from  '../app/components/Who'
import NFT from  '../app/components/NFT'
import Timeline from  '../app/components/Timeline'
import Team from  '../app/components/Team'
import Footer from  '../app/components/Footer'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [cookies, setCookie] = useCookies(['splashShown']);
  const [isSplashShown, setIsSplashShown] = useState(false);
  useLayoutEffect(() => {

        
      let mm = gsap.matchMedia();
    
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
          let { xs, sm, md, lg, xl, xxl }:any = c.conditions;

          gsap.to(".box.a", {
            marginLeft: xs ? 20 : sm ? 20 : 93,
            rotation: 0,
            filter: "blur(0px)",
            scrollTrigger: {
              trigger: "#who .box.a",
              start: "top bottom-=100px",
              end: "bottom+=100px bottom-=500px",
              scrub: true,
              //markers: true,
              id: "Who-first",
            }
          });
          gsap.to(".assured", {
            marginTop: 0,
            opacity:1,
            bottom: xs ? '1rem' : sm ? '1rem' : '12rem',
            filter: "blur(0px)",
            scrollTrigger: {
              trigger: ".box.a",
              start: "center bottom",
              end: "bottom+=500px bottom-=900px",
              scrub: true,
             // markers: true,
              id: "assured",
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
              id: "We",
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
              id: "Spin Container",
            }
          });
          gsap.to(".spinning-logo", {
            marginTop: 0,
            rotation: 720,
            scrollTrigger: {
              trigger: ".box.a",
              start: "top bottom-=600px",
              end: "bottom+=100px bottom-=700px",
              scrub: true,
              //markers: true,
              id: "Spinning Logo",
              toggleActions: "play reverse play reverse"
            }
          });
          if (window.innerWidth >= 479) {
            gsap.fromTo(".svghex", {
              opacity: 0, // Starting state
            }, {
              opacity:1,
              scrollTrigger: {
                trigger: ".box.a",
                start: "top bottom-=1100px",
                end: "bottom-=200px bottom-=1600px",
                scrub: true,
                //markers: true,
                id: "Spinning Logo",
              }
            }),
            gsap.to(".svghex", {
              width:'4500px',
              height:'4500px',
              top:'3800px',
              left: '-150rem',
              scrollTrigger: {
                trigger: ".box.a",
                start: "top bottom-=1400px",
                end: "bottom+=100px bottom-=2500px",
                scrub: true,
                //markers: true,
                id: "Spinning Logo",
                toggleActions: "play reverse play reverse"
              }
            });
          }
          if (window.innerWidth >= 479) {
            gsap.fromTo(".spinning-logo", {
              marginTop: 0, // Starting state
            }, {
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
              id: "Spinning Logo",
              toggleActions: "play reverse play reverse"
            }
          });
        }
            // Create a timeline context
            const nftTimeline = gsap.timeline();
            nftTimeline.to("#nft", {
              opacity: 1,
              // other animation properties here
            });
            
            // Create a reverse animation
            const reverseTimeline = gsap.timeline();
            reverseTimeline.to("#nft", {
              opacity: 0, // Start at opacity: 1
              // other animation properties here
              reversed:false, // Initially, the timeline is reversed
            });
            gsap.to("#nft", {
              opacity:1,
              scrollTrigger: {
                trigger: ".pin2",
                pin: true,
                start: "top+=2500px bottom",
                end: "top+=3500px bottom",
                scrub: true,
                pinSpacing: true,
                id: "PIN2",
                onEnter: () => nftTimeline.play(), // Play the animation when entering
                onLeaveBack: () => reverseTimeline.play(), // Play the reverse animation when leaving back
               // markers: true,
                toggleActions: "play reverse play reverse", // This line controls the reverse behavior
              }
            });
            gsap.to("#who", {
              scrollTrigger: {
                  trigger: "#who",
                  pin: "#who",
                  start: "top top",
                  end: "bottom+=5000px bottom",
                  pinSpacing:"true",
                  scrub: true,
                  id: "Who",
                  //markers: true,
                 toggleActions: "play reverse play reverse", // This line controls the reverse behavior
  
              }
          });
        if (window.innerWidth >= 479) {
          gsap.to("#team", {
            scrollTrigger: {
                trigger: "#team",
                pin: "#team",
                start: "top top",
                end: "bottom+=2000px bottom",
                pinSpacing:true,
                scrub: true,
                id: "team",

              // markers: true
            }
        });
      }


          gsap.to(".spinning-logo", {
            opacity:'0',
            scrollTrigger: {
              trigger: ".box.a",
              start: "top bottom-=2300px",
              end: "bottom+=100px bottom-=2500px",
              scrub: true,
              //markers: true,
              id: "Spinning Logo",
    
            }
          });
          gsap.to("#collector", {
            //marginLeft: xs ? '-66.66666%' : sm ? '-66.66666%' :'-50%',
            scrollTrigger: {
              trigger: ".pin2",
              start: "top+=2900px center",
              end: "bottom+=4000px bottom",
              scrub: true,
              //markers: true,
              id: "benefits",
              toggleActions: "play reverse play reverse", // This line controls the reverse behavior

            }
          });
          gsap.to("#nft-wrap", {
            marginLeft: xs ? '-66.66666%' : sm ? '-66.66666%' :'-50%',
            scrollTrigger: {
              trigger: ".pin2",
              start: "top+=2900px center",
              end: "bottom+=3600px bottom",
              scrub: true,
              //markers: true,
              id: "benefits",
              toggleActions: "play reverse play reverse", // This line controls the reverse behavior

            }
          });
          gsap.to("#benefits", {
            scrollTrigger: {
              trigger: ".pin2",
              start: "top+=2900 center",
              end: "bottom+=4000 bottom",
              scrub: true,
              //markers: true,
              id: "benefits",
              toggleActions: "play reverse play reverse", // This line controls the reverse behavior
            }
          });
          if (window.innerWidth >= 479) {
          gsap.to(".team-inner-left", {
            filter: "blur(0px)",
            autoAlpha:1,
            scrollTrigger: {
              trigger: "#team",
              start: "top+=600px bottom-=100px",
              end: "bottom-=200px bottom-=100px",
              scrub: true,
              //markers: true,
              id: "team"
            }
          });
        }
        if (window.innerWidth >= 479) {
          gsap.to(".profile-photo", {
            transform: "scale(1)",
            scrollTrigger: {
              trigger: "#team",
              start: "top+=600px bottom-=100px",
              end: "bottom-=200px bottom-=100px",
              scrub: true,
              //markers: true,
              id: "team"
            }
          });
        }
        if (window.innerWidth >= 479) {
            gsap.to(".single-member", {
              autoAlpha:1,
              paddingTop:0,
              scrollTrigger: {
                trigger: "#team",
                start: "top+=900px bottom-=100px",
                end: "bottom+=100px bottom",
                scrub: true,
                //markers: true,
                id: "team"
              }
          });
        }
        gsap.to(".company-timeline.one .year-2021", {
          marginLeft: xs ? 95 : sm ? 95 : md ? 120 : lg ? 220 : 240,
          rotation: 0,
          scrollTrigger: {
            trigger: "#company-timeline",
            start: xs ? 'top bottom' : sm ? 'top bottom' :'top+=300px bottom',
            end: xs ? 'top bottom-=400px' : sm ? 'top bottom-=300px' :'bottom bottom',
            scrub: true,
           //markers: true,
            id: "2021"
          }
        });
          const blocks = gsap.utils.toArray(".company-timeline.one .company-timeline-block");
          const firstBlockIndex = 0;
          const firstBlock = blocks[firstBlockIndex]; // Accessing the first block
          const lastIndex = blocks.length - 1; // Get the index of the last block
              // Set the opacity of the first block to 1
      
          blocks.forEach((block, index):any => {
              gsap.to(block as gsap.DOMTarget, {
                opacity: 1,
                duration: 0.1,
                scrollTrigger: {
                  trigger: block  as gsap.DOMTarget,
                  start: "top 80%",
                  end: "bottom 30%",
                  scrub: true,
                  id: `timeline-block-${index}`,
                },
              });
      
              const dateElement = document.querySelector(
                `.company-timeline.one .timeline-date:nth-child(${index + 1}) .date span.date .date2`
              );
      
              if (dateElement) {
                gsap.to(dateElement, {
                  opacity: 1,
                  display:"none",
                  duration: 0.5,
                  //onStart: function(){ console.log('play') },
                  //onComplete: function(){  $(this).addClass('mainAnimatedClass');},
                  zIndex:10,
                  onComplete: () => {
                     // Check if it's the last iteration and prevent onComplete
                        if (index === lastIndex) {
                          gsap.set(dateElement, { display: "inline" });
                            console.log(`.company-timeline.one .timeline-date:nth-child(${index+1}) span.circle`)
                            console.log(`Removed onComplete for last iteration (index ${index})`);
                         }
                    console.log(`Play animation for index ${index}`);
                    // Hide the circle element when the animation is complete
                  },
                  scrollTrigger: {
                    trigger: block as gsap.DOMTarget,
                    start: "top 51.8%",
                    end: "bottom 51.8%",
                    scrub: true,
                    //markers:true,
                    id: `nth-child-${index}`,
                    toggleActions: "play none none none",
                  },
                });
              }
        });
        },); // <- IMPORTANT! Scopes selector text
        return () => mm.revert();
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
      <main className={` w-full flex flex-col bg-[#131313]`} id="home">
        <section className="relative w-full h-screen" id="hero">
        <div id="bg-layer" className="pt-[100px] h-full absolute top-0 bottom-0 left-0 right-0  overflow-hidden">
            <Hexagons startingI={0} startingJ={30} />
          </div>
          <div className="flex flex-row w-full min-h-full h-screen">
            <div className="w-[48.135%] bg-black xs:bg-opacity-0 sm:bg-opacity-50 h-full flex justify-center flex-col relative z-10 pl-6 xl:pl-28 xs:min-w-full sm:min-w-[280px] md:min-w-[400px] lg:min-w-[500px] xl:min-w-[720px]">
                <h1 id="gold" className="text-white font-bold md:pt-0 xs:text-[48px] sm:text-[48px] md:text-[65px] lg:text-[75px] xl:text-[100px] mb-12 leading-[1.0]"><span>Tokenized</span> Gold</h1>
                <h2 className="text-white font-light xs:text-xl md:text-xl lg:text-2xl xl:text-[38px] max-w-[550px] leading-tight xl:!leading-[2.75rem] mt-0 xs:pr-4 sm:pr-0">Earn up to 9% APR in the most stable store of value in the world.</h2>
                <button className="text-white hover:text-black xs:text-base hover:bg-white duration-300 flex items-center border-2 md:text-xl xl:text-2xl mt-20 py-1 justify-around xs:w-[200px] sm:w-[230px] md:w-[300px] px-6"><Image className="hover:spin-anim" src="/media/images/collective-finance-logo.png" alt="Collective Finance" height={40} width={40}/> Open dApp</button>
            </div>
            <div className="w-[60%] flex flex-row justify-center items-center relative z-10 overflow-hidden">
              <Image className="ml-[60%] max-h-none max-w-[150%] md:max-w-[150%] lg:max-w-[160%] xl:max-w-[160%] 2xl:max-w-[140%]" src="/media/images/collective-finance-logo.png" loading="eager" alt="Collective Finance" height={1600} width={1600}></Image>
            </div>
          </div>
          </section>
          <section className="w-full flex min-h-full h-screen bg-black bg-opacity-50 overflow-hidden z-10" id="who">
            <Who />
            <div className="pin2"></div>
            <NFT />
            </section>
            <div className="timeline"></div> {/* gsap trigger point - leave alone */}
            <Timeline />
              <Team />
      </main>
      <Footer />
      </div>
    </>
  );
}