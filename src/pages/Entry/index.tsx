import { Outlet } from "react-router-dom";

import { NavBar } from "../../components/NavBar";

import Map from '../../assets/map.jpg';
import IFLogo from '../../assets/if-logo.svg';

import styles from './entry.module.css'

export function Entry() {
  return (
    <main
      id={styles["main-entry"]}
    >
      <img
        src={Map} alt=""
        id={styles["map-image"]}
        width="500px"
        />
      <div id={styles["entry-content"]}>
        <NavBar />
        <Outlet />
        <div id={styles["site-title"]}>
          <h1>Mapa Acessível</h1>
          <img
            src={IFLogo}
            alt="IF Logo"
            width="100px"
            id={styles["if-logo"]}
          />
        </div>
      </div>
    </main>
  )
}
