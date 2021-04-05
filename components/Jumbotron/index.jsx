import Link from "next/link"
import styles from './jumbotron.module.scss';

const Jumbotron = () => {
  return (
    <section className={styles.jumbotron}>
      <h1>
        Bienvenue chez <span>JC</span> Sailing !
      </h1>
      <p>Un problème avec votre bateaux ?</p>   
      <Link href="/contact"><button>Contacter nous !</button></Link>
    </section>
  )
};

export default Jumbotron;