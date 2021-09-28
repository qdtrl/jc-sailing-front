import Image from 'next/image'
import styles from './truck.module.scss';
import { useState, useEffect } from 'react';

const Truck = () => {
  const [windowHeight, setWindowHeight] = useState(800);

  useEffect(() => {
    if (window?.innerWidth) {
      setWindowHeight(window.innerWidth);
    }
  }, [windowHeight])

  return (
    <>
    { windowHeight >= 1200 ? 
      <div className={styles.truck}>
        <Image 
          src="/images/camion.png"
          alt="camion entretien jc-sailing"
          height={windowHeight/3.3}
          width={windowHeight/1.6}
        />
      </div>
      : 
      <div className={styles.truck_mobile}>
        <Image 
          src="/images/camion.png"
          alt="camion entretien jc-sailing"
          height={windowHeight/1.9}
          width={windowHeight/1.1}
        />
      </div>
    }
    </>
  )
}

export default Truck;