import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import NewUser from './pages/newUser';
import Deposit from './pages/deposit';
import Login from './pages/login';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/newUser', element: <NewUser /> },
      { path: '/deposit', element: <Deposit /> },
      { path: '/login', element: <Login /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

export default router;
