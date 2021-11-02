import { useState, useEffect } from "react";
import Web from './Web';
import Mobile from './Mobile';

const Jumbotron = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <>
      { windowHeight >= 1200 ? <Web/> : <Mobile/> }
    </>
  )
}

export default Jumbotron;