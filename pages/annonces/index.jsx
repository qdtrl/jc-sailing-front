import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'
import Moment from 'moment';
import Layout from "../../components/Layout";
import { API_URL } from "../../config";
import styles from './annonces.module.scss';

export const getStaticProps = async () => {
  const response = await fetch(`${API_URL}ads`);
  const ads = await response.json();
  return {
    props: { ads },
  };
};

const Ads = ({ ads }) => {
  Moment.locale("fr");

  return (
    <>
      <Head>
        <title>Annonces Nautiques - Ventes de bateaux à voiles et moteurs et Equipements de Nautisme sur Granville</title>
      </Head>
      <Layout>
        <section className={styles.annonces}>
          <h1>Annonces</h1>
          { ads.length > 0 || <h2 className={styles.empty_ads}> Aucune annonce pour le moment</h2> }
          { ads.length > 0 && (
            <ul>
              {ads.map(({ id, name, description, price, updated_at, images }) => (
                <Link href={`annonces/${id}`}>
                <li key={id}>
                  <div className={styles.ad_image}>
                    <Image
                      id={id}
                      src={`${images[0].formats.medium.url}`}
                      alt={`${images[0].hash}`}
                      width={140}
                      height={140}
                    />
                  </div>
                  <div className={styles.ad_description}>
                    <h2>{`${name}`}</h2>
                    <p>{`${description}`}</p>
                  </div>
                  <div className={styles.ad_details}>
                    <p className={styles.ad_price}>{`${price}`}	€</p>
                    <p className={styles.ad_date}>Date de mise en ligne <br/> {Moment(updated_at).format('LL')}</p>  
                  </div>
                </li>
                </Link>
              ))}
            </ul>
          )}
        </section>
      </Layout>
    </>
  )
}

export default Ads;