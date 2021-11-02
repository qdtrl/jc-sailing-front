import { useState, useEffect } from "react";
import NavBar from './Navbar';
import Button from './Button';

const Header = ({show}) => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <>
      { windowHeight >= 1200 ? <NavBar show={show}/> : <Button/> }
    </>
  )
}

export default Header;