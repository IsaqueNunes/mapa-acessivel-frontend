import { useNavigate } from 'react-router-dom';
import Hero from '../../assets/map.jpg'
import { Button } from '../../components/Button';

import styles from './home.module.css'

export function Home() {
  const navigate = useNavigate();
  const mapRedirect = () => {
    navigate('/map')
  }

  const establishmentRegisterRedirect = () => {
    navigate('/new-establishment')
  }

  return (
    <main className={styles["main-home"]}>
      <div className={styles["info"]}>
        <div className={styles["info-text"]}>
          <h1>Seu acesso em primeiro lugar</h1>
          <p>Bem-vindo ao Meu Mapa Acessível, o seu guia online para estabelecimentos acessíveis na região de Campinas. Descubra uma maneira mais inclusiva e conveniente de planejar suas saídas.</p>
        </div>
        <div className={styles["choices"]}>
          <Button
            type='button'
            variation='solid'
            onClick={mapRedirect}
            >
            Ver Mapa
          </Button>
          <Button
            type='button'
            variation='outline'
            onClick={establishmentRegisterRedirect}
          >
            Cadastrar Estabelecimento
          </Button>
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
