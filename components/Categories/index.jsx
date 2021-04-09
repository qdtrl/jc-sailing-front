import Image from 'next/image'
import Link from 'next/link';
import styles from './categories.module.scss';

const Categories = () => {
  return (
    <section className={styles.categories}>
      <div className={styles.card_categorie_left}>
        <Image
          src="/images/reparation.jpeg"
          alt="reparation poly & epoxy"
          height={400}
          width={400}
        />
        <div className={styles.description}>
          <h2>Réparation polyester & époxy</h2>
          <p>
            On répare ce que vous cassez
          </p>
          <Link href="/contact"><button>Prendre rendez-vous</button></Link>
        </div>
      </div>
      <div className={styles.card_categorie_right}>
        <div className={styles.description}>
          <h2>Carènage / Antifouling / Calage de bateau</h2>
          <p>
            Nous prenons en charge le bateau pour, le carenage, nettoyage, mise à nue, primaire epoxy, antifouling, remplacement des anodes 
          </p>
          <Link href="/contact"><button>Prendre rendez-vous</button></Link>
        </div>
        <Image
          src="/images/carenage.jpeg"
          alt="carenage"
          height={400}
          width={400}
        />
      </div>
      <div className={styles.card_categorie_left}>
        <Image
          src="/images/peinture.jpeg"
          alt="peinture bateau"
          height={400}
          width={400}
        />
        <div className={styles.description}>
          <h2>Peinture</h2>
          <p>
            Réalisation de laque au pistolet !
          </p>
          <Link href="/contact"><button>Prendre rendez-vous</button></Link>
        </div>
      </div>
      <div className={styles.card_categorie_right}>
        <div className={styles.description}>
          <h2>Vente de produits & produits d'entretiens</h2>
          <p>
            Antifouling et laque
          </p>
          <Link href="/contact"><button>Prendre rendez-vous</button></Link>
        </div>
        <Image
          src="/images/vente.jpeg"
          alt="vente de produit bateau"
          height={400}
          width={400}
        />
      </div>
      <div className={styles.card_categorie_left}>
        <Image
          src="/images/hublot.jpeg"
          alt="hublot"
          height={400}
          width={400}
        />
        <div className={styles.description}>
          <h2>Remplacement de hublot</h2>
          <p>

          </p>
          <Link href="/contact"><button>Prendre rendez-vous</button></Link>
        </div>
      </div>
      <div className={styles.card_categorie_right}>
        <div className={styles.description}>
          <h2>Stratification création & réparation</h2>
          <p>
            Installation de propulseur, fabrication et réalisation de piéce sur mesure
          </p>
          <Link href="/contact"><button>Prendre rendez-vous</button></Link>
        </div>
        <Image
          src="/images/stratification.jpeg"
          alt="stratification"
          height={400}
          width={400}
        />
      </div>
    </section>
  )
};

export default Categories;