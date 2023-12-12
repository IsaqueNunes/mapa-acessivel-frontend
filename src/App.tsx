import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Header } from './components/Header';

import { About } from './pages/About';
import { Entry } from './pages/Entry';
import { Establishments } from './pages/Establishments';
import { Home } from './pages/Home';
import { LoginForm } from './pages/Entry/components/LoginForm';
import { Map } from './pages/Map';
import { RegisterForm } from './pages/Entry/components/RegisterForm';

import './App.css'
import { NewEstablishment } from './pages/NewEstablishment';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'establishments',
        element: <Establishments />,
        loader: async () => {
          /* const establishments = await fetch('http://localhost:3000/establishment').then(response => response.json());
          console.log(establishments) */

          const establishments = [
              {
                id: 0,
                name: 'Grau Técnico Campinas: Administração, Enfermagem e Radiologia',
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quas reiciendis explicabo ratione dignissimos? Accusamus, voluptates enim! Eaque, harum ratione amet sed officiis ad illum commodi, laborum possimus magni eius?",
                lat: -22.908166,
                lng: -47.0597819,
                stars: 5,
                address: 'Av. Dr. Moraes Salles, 488 - Centro, Campinas - SP, 13010-001, Brazil',
                comments: []
              },
              {
                id: 1,
                name: 'JIMI Aviamentos e Artesanatos',
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quas reiciendis explicabo ratione dignissimos? Accusamus, voluptates enim! Eaque, harum ratione amet sed officiis ad illum commodi, laborum possimus magni eius?",
                lat: -22.90760,
                lng: -47.06366,
                stars: 3,
                address: 'Rua Dr. Costa Aguiar, 253 - Centro, Campinas - SP, 13010-061, Brazil',
                comments: []
              },
              {
                id: 2,
                name: "McDonald's",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quas reiciendis explicabo ratione dignissimos? Accusamus, voluptates enim! Eaque, harum ratione amet sed officiis ad illum commodi, laborum possimus magni eius?",
                lat: -22.905674,
                lng: -47.059313,
                stars: 5,
                address: 'Av. Francisco Glicério, 1000 - Centro, Campinas - SP, 13012-100, Brazil',
                comments: []
              }
            ]
          return establishments;
        },
      },
      { path: '/new-establishment', element: <NewEstablishment /> },
      { path: 'about', element: <About /> },
    ]
  },
  { path: 'map', element: <Map /> },
  {
    path: '/',
    element: <Entry />,
    children: [
      { path: 'login', element: <LoginForm /> },
      { path: 'register', element: <RegisterForm /> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
