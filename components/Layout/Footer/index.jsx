import Link from 'next/link';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <>
     <footer className={styles.footer}>
       <section>
          <div className={styles.descriptions}>
            <Link href="/">                
              <a className={styles.logo}><span>JC</span> Sailing</a>
            </Link>
            <p><span>JC</span> Sailing est une entreprise spécialisée dans la vente et réparation de bateaux de plaisance</p>
          </div>
          <div className={styles.list_links}>
            <h3>Liens utiles</h3>
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
          <address className={styles.details}>
            <h3>Contactez-nous</h3>
            <p className={styles.address}>Rue des Pommiers <br/> 50400, Saint-Planchers</p>
            <p>Téléphone: <a href="tel:0620753173">06.20.75.31.73</a> </p>
            <p>E-mail: <a href="mailto:jcsailing@gmail.com">jcsailing@gmail.com</a> </p>
          </address>
        </section>
        <p className={styles.mentions}>© 2021 <span>JC</span> Sailing, tous droits réservés.</p>
      </footer>
    </>
  )
};

export default Footer;