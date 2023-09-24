import { NavLink, useNavigate } from "react-router-dom";

import styles from './nav-bar.module.css'
import { Button } from "../Button";

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/map', label: 'Mapa' },
  { to: '/establishments', label: 'Estabelecimentos' },
  { to: '/about', label: 'Sobre' },
]

export function NavBar(props: React.HTMLAttributes<HTMLElement>) {
  const navigate = useNavigate()
  const onLoginClick = () => {
    navigate('/login')
  }

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
      ))}
      <Button variation="solid"
        onClick={onLoginClick}
      >
        Login
      </Button>
      </ul>
    </nav>
  )
}
