import Head from "next/head";
import Link from 'next/link'
import { useState, useEffect } from "react";
import cn from 'classnames'
import NavBar from './Navbar';
import Button from './Button';

const Header = ({show}) => {
  const [ windowHeight, setWindowHeight ] = useState(800)

  useEffect(() => {
    if (window.innerWidth) {
      setWindowHeight(window.innerWidth);
    }
  }, [])
  
  return (
    <>
      { windowHeight >= 1200 ? <NavBar show={show}/> : <Button/> }
    </>
  )
}

export default Header;