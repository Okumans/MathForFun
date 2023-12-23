import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { HomePage } from './homePage'
import { Navbar } from './navbar'
import { PageContentTemplate } from './content/pageContentTemplate/pageContentTemplate'
import { SearchPage } from './searchPage'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <Navbar/>
    <HomePage/>
    </>
  },
  {
    path: "/topics/:topic",
    element: <>
    <Navbar/>
    <PageContentTemplate/>
    </>
  },
  {
    path: "/search",
    element: <>
    <Navbar/>
    <SearchPage/>
    </>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
