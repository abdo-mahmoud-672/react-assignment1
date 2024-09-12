import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './Components/About/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import Porto from './Components/Porto/Porto'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Notfound from './Components/Notfound/Notfound'

let routers=createBrowserRouter([
  {path:'',element:<Layout/> , children: [
  {index:true,element:<Home/>},
  {path:'about',element:<About/>},
  {path:'Contact',element:<Contact/>},
  {path:'Porto',element:<Porto/>},
  {path:'*',element:<Notfound/>},
  

  ]}
])


function App() {
  

  return   <RouterProvider router={routers}></RouterProvider>
    
  
}

export default App
