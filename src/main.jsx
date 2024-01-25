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
import { PageLogic } from './pages/content/pageLogic/pageLogic'
import { PageComplex } from './pages/content/pageComplex/pageComplex'
import { PageProbability } from './pages/content/pageProbability/pageProbability'


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
    path: "/topics/logic",
    element: <>
      <Navbar />
      <PageLogic />
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
  },
  {
    path: "/topics/complex-number",
    element: <>
      <Navbar />
      <PageComplex />
    </>
  },
  {
    path: "/topics/probability",
    element: <>
      <Navbar />
      <PageProbability />
    </>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
