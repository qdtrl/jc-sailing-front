import { useState, useEffect } from "react";
import Web from './Web';
import Mobile from './Mobile';

const Jumbotron = () => {
  const [windowHeight, setWindowHeight] = useState(800);

  useEffect(() => {
    if (window.innerWidth) {
      setWindowHeight(window.innerWidth);
    }
  }, [])
  
  return (
    <>
      { windowHeight >= 1200 ? <Web/> : <Mobile/> }
    </>
  )
}

export default Jumbotron;