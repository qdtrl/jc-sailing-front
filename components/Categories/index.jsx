import Image from 'next/image'

const Categories = () => {
  return (
    <section>
      <div>
        <h2>Réparation poly / époxy</h2>
        <Image
          src="/images/reparation.jpeg"
          alt="reparation poly & epoxy"
          height={144}
          width={144}
        />
        <p className="description">
          On répare ce que vous cassez
        </p>
      </div>
      <div>
        <h2>Carenage / Antifouling / Calage de bateau</h2>
        <Image
          src="/images/carenage.jpeg"
          alt="carenage"
          height={144}
          width={144}
        />
        <p className="description">
          Nous prenons en charge le bateau pour, le carenage, nettoyage, mise à nue, primaire epoxy, antifouling, remplacement des anodes 
        </p>
        </div>
      <div>
        <h2>Peinture</h2>
        <Image
          src="/images/peinture.jpeg"
          alt="peinture bateau"
          height={144}
          width={144}
        />
        <p className="description">
          On peint !
        </p>
      </div>
      <div>
        <h2>Vente de produit</h2>
        <Image
          src="/images/vente.jpeg"
          alt="vente de produit bateau"
          height={144}
          width={144}
        />
        <p className="description">
          Antifouling et laque
        </p>
      </div>
      <div>
        <h2>Remplacement de hublot</h2>
        <Image
          src="/images/hublot.jpeg"
          alt="hublot"
          height={144}
          width={144}
        />
        <p className="description">
          Antifouling et laque
        </p>
      </div>
      <div>
        <h2>Stratification création & réparation</h2>
        <Image
          src="/images/stratification.jpeg"
          alt="stratification"
          height={144}
          width={144}
        />
        <p className="description">
          Installation de propulseur, fabrication et réalisation de piéce sur mesure
        </p>
      </div>
    </section>
  )
};

export default Categories;