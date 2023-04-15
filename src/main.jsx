import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routers/Home'
import Results from './routers/Results'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {path:'/', element: <Home/>},
      {path:'/results', element: <Results/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
