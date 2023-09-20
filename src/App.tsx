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
import axios from 'axios';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'establishments',
        element: <Establishments />,
        loader: () => {
          const establishments = axios.get('http://localhost:3000/establishment').then(response => response.data);
          console.log(establishments)
          return  { establishments };
        },
      },
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
