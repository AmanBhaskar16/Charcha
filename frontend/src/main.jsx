import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SignupPage } from './pages/auth/SignUp.jsx'
import { LoginPage } from './pages/auth/Login.jsx'

const router = createBrowserRouter([
  { 
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <div>About Page</div>,
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
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
