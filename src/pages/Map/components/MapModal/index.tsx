import { SyntheticEvent, useState } from 'react';
import EstablishmentImage from '../../../../assets/shop.svg'

import styles from './map-modal.module.css'

import star from '../../../../assets/Star.png';
import { Button } from '../../../../components/Button';

type MapModalProps = {
  id: number;
  address: string,
  name: string;
  stars: number;
  description: string;
  comments: string[];
}

export function MapModal({ name, comments, stars, description, address }: MapModalProps) {
  const [comment, setComment] = useState<string>('')
  const [newComments, setNewComments] = useState<string[]>([...comments ? comments : []])

  const formAction = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()

    setNewComments([...newComments, comment])
  }

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
          <p>{description}</p>

        </>
        <>
          <h3>Endereço</h3>
          <p>{address}</p>
        </>
      </div>
      <form onSubmit={formAction} id={styles['form-container']}>
        <textarea
          name="comments"
          id={styles['comments']}
          placeholder='Digite seu comentário'
          cols={30}
          rows={10}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <Button >Enviar</Button>
      </form>

      {newComments ? (
        <ul id={styles['comments-list']}>
          {newComments.map(comment => (
            <li key={comment}>{comment}</li>
          ))}
        </ul>
      ) : (
        <p id={styles['no-comments']}>Nenhum comentário</p>
      )}
    </div>
  )
}
