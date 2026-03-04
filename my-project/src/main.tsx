import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Nyheter from './Nyheter.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([{
  path: '/Bj-rnmamman-LIA/',
  element: <App/>,
  errorElement: <div>404 Not Found</div>
},
{
  path: '/Bj-rnmamman-LIA/Nyheter',
  element: <Nyheter/>,
  errorElement: <div>404 Not Found</div>
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
