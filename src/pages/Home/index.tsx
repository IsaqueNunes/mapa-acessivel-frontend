import Hero from '../../assets/map.jpg'

import styles from './home.module.css'

export function Home() {
  const mapRedirect = () => {
    console.log("Redirecting to map")
  }

  const establishmentRegisterRedirect = () => {
    console.log("Redirecting to establishment register")
  }

  return (
    <main className={styles["main-home"]}>
      <div className={styles["info"]}>
        <div className={styles["info-text"]}>
          <h1>Seu acesso em primeiro lugar</h1>
          <p>Veja aqui uma lista de todos os estabelecimentos que possuem suporte para pessoas com debilidades motoras</p>
        </div>
        <div className={styles["choices"]}>
          <button
            onClick={mapRedirect}
          >
            Ver Mapa
          </button>
          <button
            onClick={establishmentRegisterRedirect}
          >
            Cadastrar Estabelecimento
          </button>
        </div>
      </div>
      <img
        id={styles["hero"]}
        src={Hero}
        alt="Imagem de um mapa fictício"
      />
    </main>
  )
}
