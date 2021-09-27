import Link from "next/link"
import styles from './mobile.module.scss';

const Mobile = () => {
  return (
    <section className={styles.jumbotron}>
      <h1>
        Bienvenue chez <br/><span>JC</span> Sailing !
      </h1>
      <p>Un problème avec votre bateaux ?</p>  
      <div className={styles.center}>
        <Link href="/contact"><button>Contacter nous !</button></Link>
      </div> 
    </section>
  )
};

export default Mobile;