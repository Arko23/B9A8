import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root';
import Home from './component/Home';
import PagesRead from './component/PagesRead';
import ErrorPage from './component/ErrorPage';
import CardDetail from './component/CardDetail';
import ListedBook from './ListedBook';
import Sub from './component/Sub';
import ReadersForum from './component/ReadersForum';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/list',
      element:<ListedBook></ListedBook>,
      loader:()=>fetch('../info.json')
     
    },
    {
      path:'/page',
      element:<PagesRead></PagesRead>,
      loader:()=>fetch('../info.json')
      
    },
    {
      path:'/detail/:bookId',
      element:<CardDetail></CardDetail>,
      loader:()=>fetch('../info.json')
    },
    {
      path:'/subs',
      element:<Sub></Sub>
    },
    {
      path:'/com',
      element:<ReadersForum></ReadersForum>
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
