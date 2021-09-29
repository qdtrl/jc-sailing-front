import Image from 'next/image'
import Link from 'next/link';
import styles from './mobile.module.scss';

const Mobile = () => { 
  return (
    <>
    <section className={styles.categories}>
      <div className={styles.center}>
        <div className={styles.description}>
          <h2>Carènage - Antifouling - Calage de bateau</h2>
          <p>
            Nous prenons en charge le bateau pour, le carenage, nettoyage, mise à nue, primaire epoxy, antifouling, remplacement des anodes 
          </p>
          <h2>Peinture</h2>
          <p>
            Réalisation de laque au pistolet !
          </p>
        </div>
        <Image
          src="/images/peinture.png"
          alt="laque-peinture-bateau-marin-pecheur"
          height={425}
          width={425}
        />
        <div className={styles.description}>
          <h2>Réparation polyester & époxy</h2>
          <p>
            On répare ce que vous cassez
          </p>
          <h2>Remplacement de hublot</h2>
          <p>
              Bas on les remplacement
          </p>
          <h2>Stratification création & réparation</h2>
          <p>
            Installation de propulseur, fabrication et réalisation de piéce sur mesure
          </p>
        </div>
        <Image
          src="/images/stratification.jpeg"
          alt="stratification"
          height={400}
          width={400}
        />
        <div className={styles.description}>
          <h2>Vente de produits & produits d'entretiens</h2>
          <p>
            Antifouling et laque
          </p>
        </div>
        <Image
          src="/images/vente.png"
          alt="vente-de-produit-entretien-voilier-bateaux-moteur"
          height={400}
          width={400}
        />
      </div>
    </section>
    </>
  )
}

export default Mobile;