import Link from 'next/link';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <>
     <footer className={styles.footer}>
       <section>
          <div className={styles.descriptions}>
            <Link href="/">                
              <a className={styles.logo}>JC <span>Sailing</span></a>
            </Link>
            <p><span>JC</span> Sailing est une entreprise spécialisée dans la réparation de bateaux</p>
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
        </section>
        <p>© 2021 <span>JC</span> Sailing, tous droits réservés.</p>
      </footer>
    </>
  )
};

export default Footer;