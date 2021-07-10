import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Modal from 'react-modal';
import Moment from 'moment';
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
  Moment.locale("fr");
  const [openModal, setOpenModal] = useState(false)
  const [productiondata, setProductiondata] = useState([])
  const [images, setImages] = useState([])
  const [image, setImage] = useState([])

  const handleClick = (event) => {
    setOpenModal(true);
    setProductiondata(productions[Number(event.target.id)].production);
    setImages(productions[Number(event.target.id)].images);
    setImage(productions[Number(event.target.id)].images[0]);
  }

  const handleClickImage = (event) => {
    setImage(images[Number(event.target.id)]);
  }
  const handleRequestCloseFunc = () => {
    setOpenModal(false);
  }

  return (
    <>
      <Modal
        isOpen={openModal}
        ariaHideApp={false}
        contentLabel="Card Production"
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        onRequestClose={handleRequestCloseFunc}
        style={{
          overlay: {
            padding: "0",
            margin: "0",
            backgroundColor: "#424040b0",
            zIndex: "1"
          },
          content: {
            color: "black",
            marginTop: "80px",
            height: "80vh",
            width: "60vw",
            marginLeft: "18vw"
          }
        }}
      >
        <section className={styles.modal_content}>
          <h2>{productiondata.name}</h2>
          <Image
            src={`${image}`}
            alt={productiondata.name}
            width={400}
            height={400}
          />
          <ul className={styles.carousel_images}>
            { images.map((link, index) => (
              <li onClick={handleClickImage} key={index}>
                <Image
                  id={index}
                  src={`${link}`}
                  alt={productiondata.name}
                  width={80}
                  height={80}
                />
              </li>
            ))}
          </ul>
          <p className={styles.image_description}>{productiondata.description}</p>
          <p className={styles.image_date}>Date du projet : {Moment(productiondata.created_at).format('LL')}</p>  
        </section>
      </Modal>
      <Head>
        <title>Réalisations & prestation de réparation et d'entretien par Jean-Cristophe Théo à Granville sur des voiliers et bateux moteurs</title>
      </Head>
      <Layout>
        <section className={styles.realisations}>
          <h1>Réalisations</h1>
          <p>Voici certains de nos travaux effectués ! Cliquez dessus pour en découvrir plus !</p>
          { productions.length > 0 || <h2 className={styles.empty_productions}> Aucune réalisation pour le moment</h2> }
          { productions.length > 0 && (
            <ul>
              {productions.map(({ id, name, images }, index) => (
                <li onClick={handleClick} key={id}>
                  <Image
                    id={id}
                    src={`${images[0].formats.medium.url}`}
                    alt={`${images[0].hash}`}
                    width={300}
                    height={300}
                  />
                  <p>{name}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </Layout>
    </>
  )
}

export default Productions;