import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Error from './Components/ErrorPage/Error';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import CardDetails from './Components/CardDetails/CardDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/cards/:id",
        element: <CardDetails></CardDetails>,
        loader: ()=> fetch('card.json')
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
