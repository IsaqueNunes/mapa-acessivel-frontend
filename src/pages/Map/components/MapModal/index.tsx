import EstablishmentImage from '../../../../assets/shop.svg'

import styles from './map-modal.module.css'

type MapModalProps = {
  name: string;
}

export function MapModal({ name }: MapModalProps) {
  return (
    <div id={styles['map-modal']}>
      <img
        id={styles['establishment-image']}
        src={EstablishmentImage} alt="Imagem do estabelecimento"
      />
      <h1
        id={styles['establishment-details']}
      >{name}</h1>
    </div>
  )
}
