import Image from "next/image";
import { useState } from "react";
import styles from './imagesshower.module.scss';

const ImagesShower = ( {images} ) => {
  const [ bigPicture, setBigPicture ] = useState(images[0]);

  const handleClickImage = (e) => {
    const imageId = images.findIndex(image => image.id == e.target.id);
    setBigPicture(images[imageId]);
  }

  return (
    <>
      <div className={styles.bigPicture}>
        <Image
          id={bigPicture.id}
          src={`${bigPicture.formats.medium.url}`}
          alt={`${bigPicture.hash}`}
          width={400}
          height={400}
        />
      </div>
      <div className={styles.list}>
      { images.length > 1
      && (
        images.map((image, index) => ( 
          <div key={index} onClick={handleClickImage}>
            <Image
              id={image.id}
              src={`${image.formats.thumbnail.url}`}
              alt={`${image.hash}`}
              width={100}
              height={100}
            />
          </div>
        ))
      )}
      </div>
    </>
  )
}

export default ImagesShower