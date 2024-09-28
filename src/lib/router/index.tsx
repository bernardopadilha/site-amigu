
import { Home } from '@/pages/home'
import { About } from '@/pages/sobre-nos'
import { createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from '@/_layout/default-layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {path: "/", element: <Home />},
      {path: "/sobre-nos", element: <About />},
    ]
  },
])