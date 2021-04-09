import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Modal from 'react-modal';
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
  const [openModal, setOpenModal] = useState(false)
  const [addata, setAddata] = useState([])
  const [images, setImages] = useState([])
  const [image, setImage] = useState([])

  const handleClick = (event) => {
    setOpenModal(true);
    setAddata(ads[Number(event.target.id)].ad);
    setImages(ads[Number(event.target.id)].images);
    setImage(ads[Number(event.target.id)].images[0]);
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
        contentLabel="Card Annonce"
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
        <section className={styles.ads_images}>
          <div className={styles.ads_image}>
            <Image
              src={`${image}`}
              alt={addata.name}
              layout="fill"
            />
          </div>
          <ul className={styles.carousel_images}>
            { images.map((link, index) => (
              <li onClick={handleClickImage} key={index}>
                <Image
                  id={index}
                  src={`${link}`}
                  alt={addata.name}
                  width={80}
                  height={80}
                />
              </li>
            ))}
          </ul>
        </section>
      </Modal>
      <Head>
        <title>Annonces</title>
      </Head>
      <Layout>
        <section className={styles.annonces}>
          <h1>Annonces</h1>
          { ads.length > 0 && (
            <ul>
              {ads.map(({ ad, images }, index) => (
                <li onClick={handleClick} key={ad.id}>
                  <div className={styles.ad_image}>
                    <Image
                      id={index}
                      src={`${images[0]}`}
                      alt={ad.name}
                      width={140}
                      height={140}
                    />
                    <p>cliquez sur l'image pour l'agrandir et voir d'autres photos</p>
                  </div>
                  <div className={styles.ad_description}>
                    <h2>{ad.name}</h2>
                    <p>{ad.description}</p>
                  </div>
                  <div className={styles.ad_details}>
                    <p className={styles.ad_price}>{ad.price}	€</p>
                    <p className={styles.ad_date}>Date de mise en ligne <br/> {Moment(ad.created_at).format('LL')}</p>  
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </Layout>
    </>
  )
}

export default Ads;