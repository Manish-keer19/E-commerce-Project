import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Detail from './components/Detail.jsx'
import ProductContextProvider from './context/ProductContextProvider.jsx'
import Edit from './components/Edit.jsx'
import Create from './components/Create.jsx'
import ErrorPage from './components/ErrorPage.jsx'


const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />,
   
  },
  {
    path: "/detail/:id",
    element: <Detail />
  },
  {
    path: "/edit",
    element: <Edit />
  },
  {
    path: "/create",
    element: <Create />
  }

]
)




ReactDOM.createRoot(document.getElementById('root')).render(

  <ProductContextProvider>
    <RouterProvider router={router}>

      <App />
    </RouterProvider>
  </ProductContextProvider>

)
