"use client";
import Image from 'next/image';
import { useEffect, useState, ReactElement } from 'react';
import { useCookies } from 'react-cookie';

function getRandomStyle() {
  // Random size between 50px and 100px
  const size = Math.random() * (100 - 50) + 50;

  // Random opacity between 0.4 and 1
  const opacity = Math.random() * (0.6 - 0.2) + 0.2;

  // Default values for server-side rendering
  let maxTop = 100;
  let maxLeft = 100;

  // Adjusting the position limits based on size
  if (typeof window !== 'undefined') {
    maxTop = 100 - (size / window.innerHeight) * 100;
    maxLeft = 100 - (size / window.innerWidth) * 100;
  }

  const top = Math.random() * maxTop;
  const left = Math.random() * maxLeft;

  return { top: `${top}%`, left: `${left}%`, width: `${size}px`, height: `${size}px`, opacity };
}
function Hexagons() {
  const [hexagons, setHexagons] = useState<ReactElement[]>([]);
  useEffect(() => {
    const newHexagons = [];

    for (let i = 0; i < 15; i++) {
      const hollowHexagonStyle = getRandomStyle();
      const filledHexagonStyle = getRandomStyle();

      newHexagons.push(
        <svg key={`hollow-${i}`} style={{  ...hollowHexagonStyle, fill: "#000000", position: 'absolute' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 485.688 485.688">
        <path d="M364.269,453.155H121.416L0,242.844L121.416,32.533h242.853l121.419,210.312L364.269,453.155z M131.905,434.997h221.878 l110.939-192.152L353.783,50.691H131.905L20.966,242.844L131.905,434.997z"/>
      </svg>,
       <svg key={`filled-${i}`} style={{ ...filledHexagonStyle, fill: "#000000", position: 'absolute' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184.751 184.751">
         <path d="M0,92.375l46.188-80h92.378l46.185,80l-46.185,80H46.188L0,92.375z"/>
      </svg>
      );
    }

    setHexagons(newHexagons);
  }, []);

  return <>{hexagons}</>;
}
export default function Home() {
  const [cookies, setCookie] = useCookies(['splashShown']);
  const [isSplashShown, setIsSplashShown] = useState(false);

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
    <div className={`w-full relative ${isSplashShown ? 'hide-overflow' : 'show'}`}>
     {isSplashShown && (
      <main className={`absolute top-0 bottom-0 left-0 right-0 z-[100] h-screen w-full flex justify-center items-center bg-[#131313]`} id="splash">
          <Image className="spin-anim" src="/media/images/collective-finance-logo-spin.png" alt="Collective Finance" height={160} width={160}></Image>
      </main>
        )}
      <main className={`h-[500vh] w-full flex bg-[#131313]`} id="home">
        <section className="relative w-full h-screen" id="hero">
          <div id="bg-layer" className="pt-[100px] absolute top-0 bottom-0 left-0 right-0  overflow-hidden">
            <Hexagons />
          </div>
          </section>
      </main>
      </div>
    </>
  );
}