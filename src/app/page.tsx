"use client";
import Image from 'next/image';
import { useEffect, useState, ReactElement, useRef } from 'react';
import { useCookies } from 'react-cookie';

function updateAnimation(i:any, lastPosition:any, baseName:any, hexagonType:any) {
  if (!lastPosition) {
    lastPosition = { x: 0, y: 0 };
  }
  const newPoints = [...Array(3)].map(() => ({
    x: Math.random() * 300 - 150,
    y: Math.random() * 300 - 150
  }));

  const keyframes = `
  @keyframes floatAnimation${baseName}${i} {
      0% { transform: translate(${lastPosition.x}px, ${lastPosition.y}px); }
      33% { transform: translate(${newPoints[0].x}px, ${newPoints[0].y}px); }
      66% { transform: translate(${newPoints[1].x}px, ${newPoints[1].y}px); }
      100% { transform: translate(${newPoints[2].x}px, ${newPoints[2].y}px); }
    }
  `;
  try {
    document.styleSheets[0].insertRule(keyframes, document.styleSheets[0].cssRules.length);
  } catch (e) {
    console.error('Error inserting keyframes:', e);
  }
  console.log(`Animation ${baseName}${i}: Start - x: ${lastPosition.x}, y: ${lastPosition.y}`);
  console.log(`Animation ${baseName}${i}: End - x: ${newPoints[2].x}, y: ${newPoints[2].y}`);
  
  // Differentiate the debug message based on hexagonType
  console.log(`Next cycle start for ${baseName}${i}: x: ${newPoints[2].x}, y: ${newPoints[2].y} (${hexagonType} hexagon)`);

  return { x: newPoints[2].x, y: newPoints[2].y }; // Return new last position
}
function getRandomStyle(animationName:any) {
  // Random size between 50px and 100px
  const size = Math.random() * (100 - 50) + 50;

  // Random opacity between 0.4 and 1
  const opacity = Math.random() * (0.6 - 0.2) + 0.2;

  // Default values for server-side rendering
  let maxTop = 100;
  let maxLeft = 100;


  const animationDuration = `${Math.random() * 5 + 10}s`; // Random between 10 and x seconds
  const animationDelay = `${Math.random() * 2}s`; // Random up to 2 seconds delay

  // Adjusting the position limits based on size
  if (typeof window !== 'undefined') {
    maxTop = 100 - (size / window.innerHeight) * 100;
    maxLeft = 100 - (size / window.innerWidth) * 100;
  }

  const top = Math.random() * maxTop;
  const left = Math.random() * maxLeft;

  return { top: `${top}%`, left: `${left}%`, width: `${size}px`, height: `${size}px`, opacity, animation: `${animationName} ${animationDuration} ${animationDelay} infinite linear` };
}
function Hexagons() {
  const [hexagons, setHexagons] = useState<ReactElement[]>([]);
  const lastPositions = useRef([...Array(15)].map(() => ({ x: 0, y: 0 })));

  useEffect(() => {
    const newHexagons = [];
    const lastPositionFilled = { x: 0, y: 0 };
    const lastPositionHollow = { x: 0, y: 0 };
    for (let i = 0; i < 15; i++) {
      const j = i+15;
      lastPositions.current[i] = updateAnimation(i, lastPositionFilled, 'Filled', 'Filled');
      lastPositions.current[j] = updateAnimation(j, lastPositionHollow, 'Hollow', 'Hollow');

        const animationNameFilled = `floatAnimationFilled${i}`;
        const animationNameHollow = `floatAnimationHollow${j}`;

        const filledHexagonStyle = getRandomStyle(animationNameFilled);
        const hollowHexagonStyle = getRandomStyle(animationNameHollow); 

        newHexagons.push(
          <svg key={`filled-${i}`} data-index={i} data-type="filled" style={{ ...filledHexagonStyle, position: 'absolute' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184.751 184.751">
          <path d="M0,92.375l46.188-80h92.378l46.185,80l-46.185,80H46.188L0,92.375z"/>
        </svg>,
        <svg key={`hollow-${j}`} data-index={j} data-type="hollow" style={{ ...hollowHexagonStyle, position: 'absolute' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 485.688 485.688">
          <path d="M364.269,453.155H121.416L0,242.844L121.416,32.533h242.853l121.419,210.312L364.269,453.155z M131.905,434.997h221.878 l110.939-192.152L353.783,50.691H131.905L20.966,242.844L131.905,434.997z"/>
        </svg>
      );
    }

    setHexagons(newHexagons);
  }, []);

  useEffect(() => {
    function onAnimationIteration(e:any) {
      const index = parseInt(e.target.dataset.index, 10);
      const isHollow = e.target.dataset.type === "hollow";
      let hexagonType: string; // or any other appropriate type
      const baseName = isHollow ? "Hollow" : "Filled";
      console.log(`Animation cycle completed for ${baseName} hexagon ${index}`);
      console.log(`Next cycle start for ${baseName}${index}: x: ${lastPositions.current[index].x}, y: ${lastPositions.current[index].y}`);
    

      requestAnimationFrame(() => {
        const newPosition = updateAnimation(index, lastPositions.current[index], baseName, hexagonType);
        console.log(`Next cycle start for ${baseName}${index}: x: ${newPosition.x}, y: ${newPosition.y}`);
        lastPositions.current[index] = newPosition;
      });
    }
  
    // Remove the 'hexagon' parameter as it's not used
    hexagons.forEach((_, i) => {
      const element = document.querySelector(`[data-index='${i}']`);
      if (element) {
        element.addEventListener('animationiteration', onAnimationIteration);
      }
    });
    hexagons.forEach((_, j) => {
      const element = document.querySelector(`[data-index='${j}']`);
      if (element) {
        element.addEventListener('animationiteration', onAnimationIteration);
      }
      
    });
  
    return () => {
      // Similarly, remove the 'hexagon' parameter here
      hexagons.forEach((_, i) => {
        const element = document.querySelector(`[data-index='${i}']`);
        if (element) {
          element.removeEventListener('animationiteration', onAnimationIteration);
        }
      });
      hexagons.forEach((_, j) => {
        const element = document.querySelector(`[data-index='${j}']`);
        if (element) {
          element.removeEventListener('animationiteration', onAnimationIteration);
        }
      });
    };
  }, [hexagons]);
  

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