const Ad = ({ adData }) => {
  console.log(adData);
  const { name, description, price, published_at, images} = adData;

  return (
    <>
      {name}
      <br />
      {description}
      <br />
      {price}
      <br />
      {published_at}
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
    </>
  )
}

export default Ad;
const getAllAdIds = () => {
  const fileNames = fs.readdirSync(adsDirectory);

  return fileNames.map(fileName => {
    console.log(fileName);
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}
const getStaticPaths = () => {
  const paths = getAllAdIds();
  return {
    paths,
    fallback: false
  }
}
const getAdData = (id) => {
  const fullPath = path.join(adsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Combine the data with the id
  return {
    id,
    ...matterResult.data
  }
}
const getStaticProps = ({ params }) => {
  const adData = getAdData(params.id)  
  return {
    props: {
      adData
    }
  }
}