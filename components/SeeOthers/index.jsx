import { useEffect, useState } from 'react';
import Link from 'next/link';
import { API_URL } from "../../config";
import styles from './seeothers.module.scss';



const SeeOthers = ({id}) => {
  const [ads, setAds] = useState('');

  const getAds = async () => {
    const response = await fetch(`${API_URL}ads`);
    const adsWithoutClean = await response.json();
    const adsWithClean = adsWithoutClean.filter( ad => ad.id != id).slice(0,3);
    console.log(adsWithClean);
    setAds(adsWithClean);
  };

  useEffect(() => {
    getAds();
  }, []);


  return (
    <>
    <p>test</p>
    <section>
      { ads.length > 1 && (
        <ul>
          {ads.map(({ id, name, description, price, updated_at, images }) => (
            <Link href={`annonces/${id}`}>
            <li className={styles.ad_image} key={id}>
              <Image
                id={id}
                src={`${images[0].formats.medium.url}`}
                alt={`${images[0].hash}`}
                width={140}
                height={140}
              />
              <h2>{`${name}`}</h2>
            </li>
            </Link>
          ))}
        </ul>
      )}
    </section>
    </>
  )
}

export default SeeOthers;