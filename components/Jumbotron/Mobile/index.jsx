import Link from "next/link";
import Truck from '../../Truck';
import styles from './mobile.module.scss';

const Mobile = () => {
  return (
    <section className={styles.jumbotron}>
      <h1 id="jumbotron">
        Bienvenue chez <br/><span>JC</span> Sailing !
      </h1>
      <p>Un problème avec votre bateau ?</p> 
      <Truck /> 
      <div className={styles.center}>
        <Link href="#contact"><button>Contactez nous</button></Link>
      </div> 
    </section>
  )
};

export default Mobile;