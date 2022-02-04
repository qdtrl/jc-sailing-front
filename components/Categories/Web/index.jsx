import Image from 'next/image'
import Link from 'next/link';
import styles from './web.module.scss';

const Web = () => {
  return (
    <section id="categories" className={styles.categories}>
      <div className={styles.center}>
        <div className={styles.card_categorie_right}>
          <Image
            src="/images/peinture.png"
            alt="peinture bateau"
            height={800}
            width={800}
          />
          <div className={styles.description}>
            <h2>Carénage - Antifouling - Calage de bateau</h2>
            <p>
              Nous prenons en charge le bateau pour le <strong>carénage</strong>, le nettoyage, la mise à nue, appliquer la primaire epoxy, puis l'<strong>antifouling</strong>, ainsi que le remplacement des anodes. 
            </p>
            <h2>Peinture</h2>
            <p>
              Réalisation de <strong>laque</strong> au pistolet !
            </p>
          </div>
        </div>
        <div className={styles.card_categorie_left}>
          <div className={styles.description}>
            <h2>Polyester & époxy</h2>
            <p>
              Nous pouvons <strong>réparer</strong> vos pieces en polyester et époxy. 
            </p>
            <h2>Hublot & Propulseur</h2>
            <p>
                Nous vous remplaçons vos anciens <strong>hublots</strong>. Besoin d'un propulseur ? On vous l'installe.
            </p>
            <h2>Stratification</h2>
            <p>
              Nous vous réparons vos pièces et pouvons aussi les créer sur mesures en fonctions de vos besoins.
            </p>
          </div>
          <Image
            src="/images/stratification.jpeg"
            alt="stratification"
            height={400}
            width={400}
          />
        </div>
        <div className={styles.card_categorie_center}>
          <Image
            src="/images/vente.png"
            alt="vente de produit bateau"
            height={400}
            width={400}
          />
          <div className={styles.description}>
            <h2>Vente de produits</h2>
            <ul>
              <li>Produits d'entretiens</li>
              <li>Antifouling</li> 
              <li>Laque</li> 
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Web;