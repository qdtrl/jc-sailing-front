import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { API_URL } from "../../config";
import styles from './realisations.module.scss';

export const getStaticProps = async () => {
  const response = await fetch(`${API_URL}productions`);
  const productions = await response.json();
  return {
    props: { productions },
  };
};

const Productions = ({ productions }) => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>Réalisations & prestation de réparation et d'entretien par Jean-Cristophe Théo à Granville sur des voiliers et bateux moteurs</title>
      </Head>
      <Layout>
        <section className={styles.realisations}>
          <h1 className={windowHeight >= 1200 ? styles.title_web : styles.title_mobile }>Réalisations</h1>
          <p>Voici certains de nos travaux effectués ! Cliquez dessus pour en découvrir plus !</p>
          { productions.length > 0 || <h2 className={styles.empty_productions}> Aucune réalisation pour le moment</h2> }
          { productions.length > 0 && (
            <ul>
              {productions.map(({ id, images }) => (
                <Link key={id} href={`realisations/${id}`}>
                <li>
                  <Image
                    id={id}
                    src={`${images[0].formats.medium.url}`}
                    alt={`${images[0].hash}`}
                    width={300}
                    height={300}
                  />
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

export default Productions;