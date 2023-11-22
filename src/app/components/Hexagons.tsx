import { useEffect, useState, ReactElement, useRef } from 'react';

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
     // console.error('Error inserting keyframes:', e);
    }
   //console.log(`Animation ${baseName}${i}: Start - x: ${lastPosition.x}, y: ${lastPosition.y}`);
    //console.log(`Animation ${baseName}${i}: End - x: ${newPoints[2].x}, y: ${newPoints[2].y}`);
    
    // Differentiate the debug message based on hexagonType
    //console.log(`Next cycle start for ${baseName}${i}: x: ${newPoints[2].x}, y: ${newPoints[2].y} (${hexagonType} hexagon)`);
  
    return { x: newPoints[2].x, y: newPoints[2].y }; // Return new last position
  }
  function getRandomStyle(animationName:any) {
    // Random size between 50px and 100px
    const size = Math.random() * (280 - 100) + 50;
  
    // Random opacity between 0.4 and 1
    const opacity = Math.random() * (0.3 - 0.2) + 0.2;
  
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
  
    return { top: `${top}%`, left: `${left}%`, width: `${size}px`, height: `${size}px`, opacity, animation: `${animationName} ${animationDuration} ${animationDelay} infinite linear alternate` };
  }
  function Hexagons({ startingI, startingJ }:any) {
    const [hexagons, setHexagons] = useState<ReactElement[]>([]);
    const lastPositions = useRef([...Array(1000)].map(() => ({ x: 0, y: 0 })));
  
    useEffect(() => {
      const newHexagons = []; 
      const lastPositionFilled = { x: 0, y: 0 };
      const lastPositionHollow = { x: 0, y: 0 };
      for (let i = startingI, j = startingJ; i < startingI + 25; i++, j++) {
        // For filled hexagons
        lastPositions.current[i] = updateAnimation(i, lastPositionFilled, 'Filled', 'Filled');
        lastPositions.current[j] = updateAnimation(j, lastPositionHollow, 'Hollow', 'Hollow');
  
          const animationNameFilled = `floatAnimationFilled${i}`;
          const animationNameHollow = `floatAnimationHollow${j}`;
  
          const filledHexagonStyle = getRandomStyle(animationNameFilled);
          const hollowHexagonStyle = getRandomStyle(animationNameHollow); 
  
          newHexagons.push(
            <svg key={`filled-${i}`} data-index={`filled-${i}`} data-type="filled" style={{ ...filledHexagonStyle, position: 'absolute' }} fill="#232323" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184.751 184.751" >
            <path d="M0,92.375l46.188-80h92.378l46.185,80l-46.185,80H46.188L0,92.375z"/>
          </svg>,
          <svg key={`hollow-${j}`} data-index={`hollow-${j}`} data-type="hollow" style={{ ...hollowHexagonStyle, position: 'absolute' }} fill="#232323" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 485.688 485.688">
            <path d="M364.269,453.155H121.416L0,242.844L121.416,32.533h242.853l121.419,210.312L364.269,453.155z M131.905,434.997h221.878 l110.939-192.152L353.783,50.691H131.905L20.966,242.844L131.905,434.997z" />
          </svg>
        );
      }
  
      setHexagons(newHexagons);
    }, [startingI, startingJ]);
  
    useEffect(() => {
      function onAnimationEnd(e: any) {
        const dataIndex = e.target.dataset.index; // This will be something like 'filled-1' or 'hollow-1'
        const [type, indexStr] = dataIndex.split('-');
        const index = parseInt(indexStr, 10);
        const isHollow = type === "hollow";
        let hexagonType = isHollow ? "Hollow" : "Filled";
        const baseName = isHollow ? "Hollow" : "Filled";
       // console.log(`Animation completed for ${baseName} hexagon ${index}`);
      
        // Update the animation parameters
        const newPosition = updateAnimation(index, lastPositions.current[index], baseName, hexagonType);
        console.log(`Next cycle start for ${baseName}${index}: x: ${newPosition.x}, y: ${newPosition.y}`);
        lastPositions.current[index] = newPosition;
      
        // Update the animation style
        const animationName = `floatAnimation${baseName}${index}`;
        const animationStyle = getRandomStyle(animationName);
      
        // Cast the element to an HTMLElement object
        const element = document.querySelector(`[data-index='${dataIndex}']`) as HTMLElement;
      
        if (element) {
          element.style.animationName = animationName;
        }
      }
    
     // Attach event listeners
    hexagons.forEach(hexagon => {
      const dataIndex = hexagon.props['data-index'];
      const element = document.querySelector(`[data-index='${dataIndex}']`);
      if (element) {
        element.addEventListener('animationend', onAnimationEnd);
      }
    });
  
    // Detach event listeners on cleanup
    return () => {
      hexagons.forEach(hexagon => {
        const dataIndex = hexagon.props['data-index'];
        const element = document.querySelector(`[data-index='${dataIndex}']`);
        if (element) {
          element.removeEventListener('animationend', onAnimationEnd);
        }
      });
    };
  }, [hexagons]);
    
  
    return <>{hexagons}</>;
  }

  export default Hexagons