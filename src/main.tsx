import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './routers/index.tsx';
import AuthProvider from './context/AuthContext.tsx';
import { MetaMaskProvider } from './context/MetaMaskContext.tsx';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
    <MetaMaskProvider>
    <RouterProvider router={router} />
    </MetaMaskProvider>
    </AuthProvider>
  </React.StrictMode>,
)
