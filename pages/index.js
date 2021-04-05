import Head from 'next/head'
import Categories from '../components/Categories';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import Suppliers from '../components/Suppliers';

const Home = () => {
  return (
    <>
      <Head>
        <title>JC Sailing</title>
      </Head>
      <Layout>
        <main>
          <Jumbotron/>
          <Categories/>
          <Suppliers/>
        </main>
      </Layout>
    </>
  )
}

export default Home;