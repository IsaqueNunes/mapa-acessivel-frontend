import EstablishmentImage from '../../../../assets/shop.svg'

import styles from './map-modal.module.css'

import star from '../../../../assets/Star.png';

type MapModalProps = {
  name: string;
  street: string,
  stars: number,
}

export function MapModal({ name, street, stars }: MapModalProps) {
  return (
    <div id={styles['map-modal']}>
      <img
        id={styles['establishment-image']}
        src={EstablishmentImage} alt="Imagem do estabelecimento"
      />
      <div>
        <h1
          id={styles['establishment-details']}
        >{name}</h1>
        <div id={styles['stars-container']}>
          {stars.toFixed(2).toString()}
          {Array.from(Array(stars)).map((_, index) => {
            return (
              <img key={index} src={star} id={styles['stars-image']} />
            )
          })}
        </div>
      </div>
      <div id={styles['establishment-description-container']}>
        <>
          <h3>Do proprietário</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sapiente. Consequatur debitis saepe esse facilis voluptates, iure voluptate reiciendis ex fugit placeat ratione blanditiis aspernatur veniam doloremque, iste ea deleniti!  </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sapiente. Consequatur debitis saepe esse facilis voluptates, iure voluptate reiciendis ex fugit placeat ratione blanditiis aspernatur veniam doloremque, iste ea deleniti!  </p>
        </>
        <>
          <h3>Endereço</h3>
          <p>{street}</p>
        </>
      </div>
    </div>
  )
}
