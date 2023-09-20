import { useLoaderData } from "react-router-dom";

type EstablishmentResponse = {
  id: string;
  name: string;
  address: string;
  ownerId: string
}

type LoaderData = {
  establishments: EstablishmentResponse[];
}

export function Establishments() {
  const { establishments } = useLoaderData() as LoaderData;
  return (
    <main>
      <h1>Estabelecimentos</h1>

      <ul>
        {establishments.map(establishment => (
          <li key={establishment.id}>
            <h2>{establishment.name}</h2>
            <p>{establishment.address}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
