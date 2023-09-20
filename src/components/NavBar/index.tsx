import { NavLink } from "react-router-dom";

import styles from './nav-bar.module.css'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/map', label: 'Mapa' },
  { to: '/establishments', label: 'Estabelecimentos' },
  { to: '/about', label: 'Sobre' },
  { to: '/login', label: 'Login' }
]

export function NavBar(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav { ...props }>
      <ul className={styles["nav-bar-options"]}>{navItems.map(item => (
        <li className={styles["nav-bar-options"]} key={item.to}>
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              isActive ? `${styles["active-nav-bar-option"]}` : ""
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}</ul>
    </nav>
  )
}
