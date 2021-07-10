import Image from 'next/image'
import styles from './truck.module.scss';

const Truck = () => {
  return (
    <>
      <div className={styles.truck}>
        <Image 
          src="/images/camion.png"
          alt="camion entretien jc-sailing"
          height={900}
          width={1600}
        />
      </div>
    </>
  )
}

export default Truck;