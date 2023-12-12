import { Link, useLoaderData } from "react-router-dom";
import styles from './establishments.module.css'

export type EstablishmentResponse = {
  id: number;
  name: string;
  address: string;
  lat: number,
  lng: number,
  ownerId: number
}

export function Establishments() {
  const establishments = useLoaderData() as EstablishmentResponse[];
  return (
    <main id={styles['container']}>
      <h1>Estabelecimentos</h1>

      <ul>
        {establishments.map((establishment: EstablishmentResponse) => (
          <li id={styles['comment']} key={establishment.id} >
            <Link to={`/map?establishmentId=${establishment.id}`}>
              <h2>{establishment.name}</h2>
              <p>{establishment.address}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
