import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomePage } from './pages/homePage'
import { Navbar } from './navbar'
import { PageContentTemplate } from './pages/content/pageContentTemplate/pageContentTemplate'
import { PageRealNumber } from './pages/content/pageRealNumber/pageRealNumber'
import { SearchPage } from './pages/searchPage'
import { ReferencePage } from './pages/referencePage'
import { TagPage } from './pages/tagPage'
import './index.css'
import { PageSet } from './pages/content/pageSet/pageContentTemplate'

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Navbar />
      <HomePage />
    </>
  },
  {
    path: "/topics/all",
    element: <>
      <Navbar />
      <PageContentTemplate />
    </>
  },
  {
    path: "/topics/real-number",
    element: <>
      <Navbar />
      <PageRealNumber />
    </>
  },
  {
    path: "/topics/set",
    element: <>
      <Navbar />
      <PageSet />
    </>
  },
  {
    path: "/search",
    element: <>
      <Navbar />
      <SearchPage />
    </>
  },
  {
    path: "/reference",
    element: <>
      <Navbar />
      <ReferencePage />
    </>
  },
  {
    path: "/tags/:tag",
    element: <>
      <Navbar />
      <TagPage />
    </>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
