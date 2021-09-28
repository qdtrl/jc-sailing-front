import Head from "next/head";
import Link from "next/link";
import Moment from 'moment';
import Layout from "../../components/Layout";
import SeeOthers from "../../components/SeeOthers";
import ImagesShower from "../../components/ImagesShower";
import styles from './annonce.module.scss';


import { API_URL } from "../../config";

const Ad = ({ad}) => {
  Moment.locale("fr");

  const { name, description, price, updated_at, images, id } = ad;
  
  return (
    <>
      <Head>
        <title>{name} - Annonce Nautique Granville</title>
      </Head>
      <Layout>
        <section className={styles.annonce}>
          <div className={styles.linkBack} >
            <Link href="/annonces">Retour aux annonces</Link>
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
  const response = await fetch(`${API_URL}ads`);
  const ads = await response.json();
  console.log(ads);
  const paths = await ads.map(ad =>({
    params: {id: ad.id.toString()},
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({params}) => {
  const { id } = params;

  const response = await fetch(`${API_URL}ads/${id}`);
  const ad = await response.json();
  
  return {
    props: { ad },
  };
}

export default Ad;