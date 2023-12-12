import { useLoaderData } from "react-router-dom";

type EstablishmentResponse = {
  id: string;
  name: string;
  address: string;
  ownerId: string
}

export function Establishments() {
  const establishments = useLoaderData() as EstablishmentResponse[];
  return (
    <main>
      <h1>Estabelecimentos</h1>

      <ul>
        {establishments.map((establishment: EstablishmentResponse) => (
          <li key={establishment.id}>
            <h2>{establishment.name}</h2>
            <p>{establishment.address}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
