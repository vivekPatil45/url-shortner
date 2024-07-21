
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import LinkPage from './pages/LinkPage'
import RedirectLink from './pages/RedirectLink'
import UrlProvider from './context'
import RequireAuth from './components/RequireAuth'

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path: '/',
        element:<LandingPage/>
      },
      {
        path: '/dashboard',
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
      {
        path: '/auth',
        element:<Auth/>
      },
      {
        path: '/link/:id',
        element: (
          <RequireAuth>
            <LinkPage />
          </RequireAuth>
        ),
      },
      {
        path: '/:id',
        element:<RedirectLink/>
      },
    ]
    
  }
])



function App() {

    return (
      <UrlProvider>
        <RouterProvider router={router}/>
      </UrlProvider>
    )
}

export default App
