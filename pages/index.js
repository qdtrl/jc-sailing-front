import Head from 'next/head'
import Categories from '../components/Categories';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import Suppliers from '../components/Suppliers';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>JC Sailing - Entretien, réparation et vente de voilier bateaux moteur et d'équipement nautique</title>
        <meta name='description' content={`JC Sailing est une entreprise spécialisée dans l'entretien, la vente et la réparation de bateaux de plaisance à voile et moteur et d'équipement nautique`}/>
        <meta name='keywords' content='jc sailing, jean-christophe théo, granville, entretien, réparation, antifouling, stratification, nettoyage, carénage, peinture, polyester, primaire époxy, calage de bateau, achat, voilier, moteur, bateau, semi-rigide' />
        <meta name="google-site-verification" content="eOeLV1_1S32wt2D9FDkCgZkSFLIWwHthE2LhzmfiuEQ" />
      </Head>
      <Layout show={false}>
        <main>
          <Jumbotron/>
          <Categories/>
          <Contact/>
          <Suppliers/>
         </main>
      </Layout>
    </>
  )
}

export default Home;