import Head from "next/head";
import Link from "next/link";
import Moment from 'moment';
import Layout from "../../components/Layout";
import SeeOthers from "../../components/SeeOthers";
import ImagesShower from "../../components/ImagesShower";
import styles from './realisation.module.scss';


import { API_URL } from "../../config";

const Production = ({production}) => {
  Moment.locale("fr");

  const { name, description, price, updated_at, images, id } = production;
  
  return (
    <>
      <Head>
        <title>{name} - Réalisation de JC Sailing Nautique Granville</title>
      </Head>
      <Layout>
        <section className={styles.annonce}>
          <div className={styles.linkBack} >
          <Link href="/realisations">Retour aux réalisations</Link>
          </div>
          <h1>{name}</h1>
          <ImagesShower 
            images = {images}
          />
          <p>{description}</p>
          <p>{price} €</p>
        </section>
        {/* <SeeOthers
          id={id}
        /> */}
      </Layout>
    </>
  )
}

export const getStaticPaths = async () => {
  const response = await fetch(`${API_URL}productions`);
  const productions = await response.json();
  const paths = await productions.map(production =>({
    params: {id: production.id.toString()},
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({params}) => {
  const { id } = params;

  const response = await fetch(`${API_URL}productions/${id}`);
  const production = await response.json();
  
  return {
    props: { production },
  };
}

export default Production;