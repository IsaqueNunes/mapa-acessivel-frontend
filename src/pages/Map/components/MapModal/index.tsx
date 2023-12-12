import { SyntheticEvent, useState } from 'react';
import EstablishmentImage from '../../../../assets/shop.svg'

import styles from './map-modal.module.css'

type MapModalProps = {
  id: number;
  name: string;
  stars: number;
  description: string;
  comments: string[];
}

export function MapModal({ name, comments }: MapModalProps) {
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
      <h1
        id={styles['establishment-details']}
      >{name}</h1>
      <form onSubmit={formAction}>
        <textarea
          name="comments"
          id="comments"
          cols={30}
          rows={10}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <button>Enviar</button>
      </form>

      {newComments ? (
        <div id={styles['comments']}>
          {newComments.map(comment => (
            <p>{comment}</p>
          ))}
        </div>
      ): (
        <p id={styles['no-comments']}>Nenhum comentário</p>
      )}
    </div>
  )
}
