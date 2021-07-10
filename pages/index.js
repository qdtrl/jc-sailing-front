import Head from 'next/head'
import Categories from '../components/Categories';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import Suppliers from '../components/Suppliers';
import Truck from '../components/Truck';

const Home = () => {
  return (
    <>
      <Head>
        <title>JC Sailing - Entretien, réparation et vente de voilier bateaux moteur et d'équipement nautique</title>
      </Head>
      <Layout show={false}>
        <main>
          <Truck />
          <Jumbotron/>
          <Categories/>
          <Suppliers/>
        </main>
      </Layout>
    </>
  )
}

export default Home;