import { useState, useEffect } from "react";
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
      <section id="contact" className={windowHeight >= 1500 ? styles.contact_web : styles.contact_mobile}>
        <div className={windowHeight >= 1500 ? styles.web : styles.mobile}>
          <h2>Contactez-nous</h2>
          <div className={ windowHeight >= 1500 ? styles.details_web : styles.details_mobile }>
            <h3>Téléphone : </h3>
            <a href="tel:0620753173">06.20.75.31.73</a>
            <h3>E-mail : </h3>
            <a href="mailto:jcsailing@gmail.com">jcsailing@gmail.com</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;