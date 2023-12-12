import styles from './about.module.css'

import Gabrielly from '../../assets/Gabrielly.jpg'
import Vanessa from '../../assets/Vanessa.jpg'
import Carina from '../../assets/Carina.jpg'
import Felipe from '../../assets/Felipe.jpg'

export function About() {
  return (
    <div className={styles["about"]}>
      <article>
        <h2>Sobre o Site</h2>
        <p>
          No cerne deste site, dedicamo-nos a promover a inclusão plena das pessoas com deficiência na sociedade. Nossa missão fundamental é facilitar esse processo ao divulgar informações cruciais sobre a acessibilidade e desafios específicos encontrados em sua cidade. Estamos empenhados em construir uma comunidade que valoriza a diversidade e capacita cada indivíduo, buscando eliminar barreiras e promover um ambiente mais inclusivo para todos.
        </p>
      </article>
      <article>
        <h2>Sobre nós</h2>
        <ul className={styles["person-list"]}>
          <li className={styles["person-item"]}>
            <figure className={styles["person-img-container"]}>
              <img src={Gabrielly} alt="Gabrielly" className={styles["person-img"]}/>
              <figcaption className={styles["person-caption"]}>Gabrielly</figcaption>
            </figure>
            <p>Estudante do IFSP Campus Campinas e líder de projeto. Foi responsável por toda a organização das tarefas, além da sua presença na criação dos relatórios e textos escritos</p>
          </li>
          <li className={styles["person-item"]}>
            <figure className={styles["person-img-container"]}>
              <img src={Vanessa} alt="Vanessa" className={styles["person-img"]}/>
              <figcaption className={styles["person-caption"]}>Vanessa</figcaption>
            </figure>
            <p>Estudante do IFSP Campus Campinas. Contribuiu para a criação das apresentações e também foi necessária para a criação dos textos</p>
          </li>
          <li className={styles["person-item"]}>
            <figure className={styles["person-img-container"]}>
              <img src={Carina} alt="Carina" className={styles["person-img"]}/>
              <figcaption className={styles["person-caption"]}>Carina</figcaption>
            </figure>
            <p>Estudante do IFSP Campus Campinas e líder de projeo. Foi responsável por toda a organização das tarefas, além da sua presença na criação dos relatórios e textos escritos</p>
          </li>
          <li className={styles["person-item"]}>
            <figure className={styles["person-img-container"]}>
              <img src={Felipe} alt="Felipe" className={styles["person-img"]}/>
              <figcaption className={styles["person-caption"]}>Felipe</figcaption>
            </figure>
            <p>Estudante do IFSP Campus Campinas. Desenvolveu toda a programação do site</p>
          </li>
        </ul>
      </article>
    </div>
  )
}
