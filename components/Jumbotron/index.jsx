import { useState, useEffect } from "react";

import Link from "next/link";
import styles from './jumbotron.module.scss';
const Jumbotron = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <section className={styles.jumbotron}>
      <h1 id="jumbotron">
        Bienvenue chez <br/><div className={styles.logo}><span>JC</span> Sailing</div>
      </h1>
      <div className={styles.contact}>
        <p>Un problème avec votre bateau ? </p>
        <Link href="#contact"><button>Contactez nous</button></Link>  
      </div>
      <div className={styles.continue}>
        ᐯ <p>Continuer pour voir les prestations que nous proposons</p>
      </div> 
    </section>
  )
}

export default Jumbotron;