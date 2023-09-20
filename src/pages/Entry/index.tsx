import { Outlet } from "react-router-dom";

import { NavBar } from "../../components/NavBar";

import Map from '../../assets/map.jpg';
import IFLogo from '../../assets/if-logo.svg';

export function Entry() {
  return (
    <main>
      <img src={Map} alt="" width="500px"/>
      <NavBar />
      <Outlet />
      <div className="site-title">
        <h1>Mapa Acessível</h1>
        <img src={IFLogo} alt="IF Logo" width="100px"/>
      </div>
    </main>
  )
}
