import Head from "next/head";
import Link from 'next/link';
import { useState, useEffect } from "react";
import Layout from "../../components/Layout"
import styles from './contact.module.scss';


const Contact = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  
  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>Contact JC Sailing sur Granville pour de la vente, l'entretien et la réparation de voiliers et bateaux moteurs</title>
      </Head>
      <Layout>
        <section className={windowHeight >= 1200 ? styles.contact_web : styles.contact_mobile}>
        { windowHeight < 1200 && <div className={styles.left}>    
          <Link href="/">                
            <a className={styles.logo}>JC <span>Sailing</span><br/><em>by Jean-Cristophe Théo</em></a>
          </Link>
          </div>}
          <div className={windowHeight >= 1200 ? styles.web : styles.mobile}>
            <h1>Contactez-nous</h1>
            <div className={ windowHeight >= 1200 ? styles.details_web : styles.details_mobile }>
              <h2>Téléphone : </h2>
              <a href="tel:0620753173">06.20.75.31.73</a>
              <h2>E-mail : </h2>
              <a href="mailto:jcsailing@gmail.com">jcsailing@gmail.com</a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Contact;