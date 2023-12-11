import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { HomePage } from './HomePage'
import { Navbar } from './navbar'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <Navbar/>
    <HomePage/>
    </>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
