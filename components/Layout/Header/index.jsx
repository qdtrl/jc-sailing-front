import Head from "next/head";
import Link from 'next/link'
import { useState, useEffect } from "react";
import cn from 'classnames'
import styles from './header.module.scss';

const Header = () => {
  const [navToggle, setNavToggle] = useState(false);

  const handleScroll =() => {   
    const navHeight = window.innerHeight/10; 
    if (window.scrollY > navHeight){
        setNavToggle(true)
    } else {        
        setNavToggle(false)
    }
  }

  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navbarStyle = cn(
    styles.navbar, 
    { [styles.scrolled_navbar]: navToggle }
  );

  const logoStyle = cn(
    styles.logo, 
    { [styles.scrolled_logo]: navToggle }
  );
  
  useEffect(()=> {
    console.log(navbarStyle);
  }, [navToggle]);
  return (
    <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <nav className={navbarStyle} >  
      <div className={styles.left}>    
      
        <Link href="/">                
          <a className={logoStyle}>JC <span>Sailing</span></a>
        </Link>
      
      </div>
      
      <div className={styles.right}>
        <Link href="/">
          <a className={styles.navbar_links}>Accueil</a>
        </Link> 
        <Link href="/annonces">
          <a className={styles.navbar_links}>Annonces</a> 
        </Link>  
        <Link href="/realisations">
          <a className={styles.navbar_links}>Réalisations</a>
        </Link>   
        <Link href="/contact">
          <a className={styles.navbar_links}>Contact</a>
        </Link>                
      </div>
    </nav>    
    </>
  )
}

export default Header;