import Link from 'next/link'
import { useState, useEffect } from "react";
import cn from 'classnames';
import styles from './header.module.scss';

const Header = ({show}) => {
  const [navToggle, setNavToggle] = useState(show);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = () => { 
    if (show) {
      return
    } else {
      const navHeight = window.innerHeight/10; 
      if (window.scrollY > navHeight){
        setNavToggle(true)
      } else {        
        setNavToggle(false)
      }
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
  
  return (
    <>
      <nav className={navbarStyle} >  
        <div className={styles.left}>    
          <Link href="#jumbotron">                
            {navToggle ? 
            <a className={logoStyle}>JC <span>Sailing</span> 
            {windowHeight > 580 ? <em>by Jean-Cristophe Théo</em>:""}
            </a> : <a className={logoStyle}></a>}
          </Link>
        </div>
        <div className={styles.right}>
          <Link href="#contact">
            {navToggle ? <a className={styles.navbar_links}>Contact</a> : ""}
          </Link>                
        </div>
      </nav>    
    </>
  )
}

export default Header;