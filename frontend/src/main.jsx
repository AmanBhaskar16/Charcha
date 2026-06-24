import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SignupPage } from './pages/auth/SignUp.jsx'
import { LoginPage } from './pages/auth/Login.jsx'
import {store} from "./store/store";
import {Provider} from "react-redux";
import Home from './pages/home/Home.jsx'

const router = createBrowserRouter([
  { 
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>  
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
  ,
)
