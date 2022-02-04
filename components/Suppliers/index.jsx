import Image from 'next/image';
import { useState, useEffect } from "react";
import styles from './suppliers.module.scss';


const Suppliers = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [index, setIndex ] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const suppliers = [
    <Image
    src="/images/soloplast.png"
    alt="Soloplast"
    height={50}
    width={144}
    />,
    <Image
    src="/images/agl_marine.png"
    alt="Agl Marine"
    height={60}
    width={144}
    />,
    <Image
    src="/images/osculati.png"
    alt="Osculati"
    height={120}
    width={120}
    />,
    <Image
    src="/images/boero.png"
    alt="Boero"
    height={90}
    width={90}
    />,
    <Image
      src="/images/awl_grip.png"
      alt="Awl Grip"
      height={40}
      width={144}
    />
  ];

  const handleBack = () => {
    setIndex(index - 2);
  }

  const handleNext = () => {
    setIndex(index + 2);
  }
  return (
    <>
    { windowHeight >= 1200 ?  
      <section className={styles.suppliers_web}>
        <h2>Nos Fournisseurs</h2>
        <ul>
          {suppliers.map((supplier, index) => (<li key={index}>{supplier}</li>))}
        </ul>
      </section> 
      : 
      <section className={styles.suppliers_mobile}>
        <h2>Nos Fournisseurs</h2>
        { index !== 4 ? 
          <>
          { index != 0 && <div className={styles.arrow_left} onClick={handleBack}>{`<`}</div>}
          <div className={styles.arrow_right} onClick={handleNext}>{`>`}</div> 
          <ul>
            <li>{suppliers[index]}</li>
            <li>{suppliers[index + 1]}</li>
          </ul>
          </>
          :
          <>
          <div className={styles.arrow_left} onClick={handleBack}>{`<`}</div> 
          <ul>
            <li>{suppliers[index]}</li>
          </ul>
          </>
        }
      </section>  }
    </>
   
  )
};

export default Suppliers;