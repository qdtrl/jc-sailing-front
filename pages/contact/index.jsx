import Head from "next/head";
import Layout from "../../components/Layout"
import styles from './contact.module.scss';


const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact JC Sailing sur Granville pour de la vente, l'entretien et la réparation de voiliers et bateaux moteurs</title>
      </Head>
      <Layout>
        <section className={styles.contact}>
          <div className={styles.contact}>
            <h1>Contactez-nous</h1>
            <div className={styles.details}>
              <h2>Téléphone : </h2>
              <a href="tel:0620753173">06.20.75.31.73</a>
              <h2>E-mail : </h2>
              <a href="mailto:jcsailing@gmail.com">jcsailing@gmail.com</a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Contact;