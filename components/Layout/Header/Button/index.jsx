import Head from "next/head";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './button.module.scss';



const Button = () => {
  // const page = useLocation();
  const [ toggle, setToggle ] = useState(false);
  const [ hover, setHover ] = useState(false);

  const [navToggle, setNavToggle] = useState(false);
  
  // const handleActive = (path) => {
  //   if (path === page.pathname) {
  //       return true
  //   }
  //   return false
  // }
  
  const handleEnter = () => {
    setHover(true)
  }
  const handleLeave = () => {
    setHover(false)
  }
  const handleClick = () => {    
    setToggle(!toggle);
  }

  const btnStyle = cn(
    styles.menu_btn,
    styles.burger, 
    { [styles.open]: toggle }
  );

  const navStyle = cn(
    styles.nav_burger,
    { [styles.open]: toggle }
  );
  
  const menuStyle = cn(
    styles.menu_nav,
    { [styles.open]: toggle }
  );
  const itemStyle = cn(
    styles.menu_nav_item,
    { [styles.open]: toggle }
  );

  const logoStyle = cn(
    styles.logo, 
    { [styles.scrolled_logo]: toggle }
  );
  

  return (
    <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div onClick={handleClick} className={styles.menu_btn}>
        <span  className={btnStyle}></span>
    </div>
    <nav className={styles.nav_burger} >  
        
      <div className={navStyle}>
        <ul className={menuStyle}>
        <div className={styles.left}>    
          <Link href="/">                
            <a className={logoStyle} >JC <span>Sailing</span> <em>by Jean-Cristophe Théo</em></a>
          </Link>
        </div>
          <li 
              onMouseEnter={handleEnter} 
              onMouseLeave={handleLeave} 
              className={itemStyle}>
            <Link 
              onClick={handleClick} 
              href="/">
              <a className={styles.navItemsBurger}>Accueil</a>
            </Link>
          </li> 
          <li 
            onMouseEnter={handleEnter} 
            onMouseLeave={handleLeave} 
            className={itemStyle}>
            <Link 
              onClick={handleClick} 
              href="/annonces">
              <a className={styles.navItemsBurger}>Annonces</a>
            </Link> 
          </li>
          <li 
            onMouseEnter={handleEnter} 
            onMouseLeave={handleLeave} 
            className={itemStyle}>
            <Link 
              onClick={handleClick} 
              href="/realisations">
              <a className={styles.navItemsBurger}>Réalisations</a>
            </Link> 
          </li>
          <li 
            onMouseEnter={handleEnter} 
            onMouseLeave={handleLeave} 
            className={itemStyle}>
            <Link 
              onClick={handleClick}
              href="/contact">
              <a className={styles.navItemsBurger}>Contact</a>
            </Link> 
          </li> 
        </ul>              
      </div>
    </nav>    
    </>
  )
}

export default Button;

