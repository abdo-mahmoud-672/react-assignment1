import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'


export default function Layout() {
  return <>
  <div>
  <div style={{ backgroundColor: '#2C3E50' }}>
<Navbar  />
</div>
</div>
<div className="mm"  style={{ backgroundColor: '#1ABC9C' }}>
<div className="container justify-center items-center">
<Outlet></Outlet>
 
</div>
</div>
<div style={{ backgroundColor: '#2C3E50' }}>
<Footer/>

</div>
  
  </>
}