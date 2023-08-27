import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './Components/Body.jsx'
import ServicePage from './Components/ServicePage.jsx'
import Contact from './Components/Contact.jsx'
import About from './Components/About.jsx'

const router=createBrowserRouter([
  {
    path: "/SriDhanalakshmiJothidam.com/",
    element:<App />,
    children:[
      {
      path:"/SriDhanalakshmiJothidam.com/",
      element:<Body/>
    },
    {
      path:"/SriDhanalakshmiJothidam.com/services",
      element:<ServicePage/>
    },
    {
      path:"/SriDhanalakshmiJothidam.com/about",
      element:<About/>
    },
    {
      path:"/SriDhanalakshmiJothidam.com/contact",
      element:<Contact/>
    },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
