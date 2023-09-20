import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar";

import styles from './header.module.css'

export function Header() {
  return (
    <>
      <header id={styles["header"]}>
        <h1>Nome do Site</h1>
        <NavBar />
      </header>
      <Outlet />
    </>
  )
}
