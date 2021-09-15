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
      <div className={styles.truck}>
        <Image 
          src="/images/camion.png"
          alt="camion entretien jc-sailing"
          height={windowHeight/3.3}
          width={windowHeight/1.6}
        />
      </div>
    </>
  )
}

export default Truck;