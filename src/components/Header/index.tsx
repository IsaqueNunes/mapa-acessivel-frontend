import { Link, Outlet } from "react-router-dom";
import { NavBar } from "../NavBar";

import styles from './header.module.css'

export function Header() {
  return (
    <>
      <header id={styles["header"]}>
        <Link to={'/'}>
          <h1>Mapa Acessível</h1>
        </Link>
        <NavBar />
      </header>
      <Outlet />
    </>
  )
}
