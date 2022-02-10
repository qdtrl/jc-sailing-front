import Image from 'next/image';
import styles from './mobile.module.scss';

const Mobile = () => { 
  return (
    <>
    <section id="categories" className={styles.categories}>
      <div>
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
        <Image
          src="/images/peinture.png"
          alt="laque-peinture-bateau-marin-pecheur"
          height={375}
          width={375}
        />
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
          src="/images/stratification.png"
          alt="stratification"
          height={250}
          width={350}
        />
        <div className={styles.description}>
          <h2>Vente de produits</h2>
          <ul>
            <li>Produits d'entretiens</li>
            <li>Antifouling</li> 
            <li>Laque</li> 
          </ul>
        </div>
        <Image
          src="/images/vente.png"
          alt="vente-de-produit-entretien-voilier-bateaux-moteur"
          height={350}
          width={350}
        />
      </div>
    </section>
    </>
  )
}

export default Mobile;