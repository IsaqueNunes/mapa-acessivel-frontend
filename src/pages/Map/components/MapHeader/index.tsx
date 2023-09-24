import { NavBar } from "../../../../components/NavBar";

import styles from './map-header.module.css'

export function MapHeader() {
  return (
    <header
      id={styles['map-header']}
    >
      <input
        className={styles['map-search']}
        placeholder='Pesquisar'
        type="search"
      />
      <NavBar />
    </header>
  )
}
