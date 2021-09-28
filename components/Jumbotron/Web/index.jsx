import Link from "next/link"
import Truck from "../../Truck";
import styles from './web.module.scss';

const Web = () => {
  return (
    <section className={styles.jumbotron}>
      <h1>
        Bienvenue chez <span>JC</span> Sailing !
      </h1>
      <p>Un problème avec votre bateaux ?</p> 
      <Truck/>  
      <Link href="/contact"><button>Contacter nous !</button></Link>
    </section>
  )
};

export default Web;