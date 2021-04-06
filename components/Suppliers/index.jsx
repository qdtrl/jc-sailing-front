import Image from 'next/image'
import styles from './suppliers.module.scss';

const Suppliers = () => {
  return (
    <section className={styles.suppliers}>
      <h2>Nos Fournisseurs</h2>
      <ul>
        <li>
          <Image
            src="/images/osculati.png"
            alt="Osculati"
            height={120}
            width={120}
          />
        </li>
        <li>
          <Image
            src="/images/boero.png"
            alt="Boero"
            height={90}
            width={90}
          />
        </li>
        <li>
          <Image
            src="/images/soloplast.png"
            alt="Soloplast"
            height={50}
            width={144}
          />
        </li>
        <li>
          <Image
            src="/images/agl_marine.png"
            alt="Agl Marine"
            height={60}
            width={144}
          />
        </li>
        <li>
          <Image
            src="/images/awl_grip.png"
            alt="Awl Grip"
            height={40}
            width={144}
          />
        </li>
      </ul>
    </section>
  )
};

export default Suppliers;