import React from 'react'
import Navbar from '../Navbar/Navbar'


export default function Footer() {
  return <>
  <br />
  <br />
  <br />
  <br />  

<div className="flex items-center justify-center gap-80 text-3xl ">
  <div className="flex  space-x-28">
    <div>
      <h1>LOCATION</h1>
      <h3>2215 John Daniel Drive</h3>
      Clark, MO 65243
    </div>
    <div className="flex flex-col items-center justify-center ">
      <h1>AROUND THE WEB</h1>
      <div className="icon flex gap-4">
        <i className="fa-brands fa-facebook text-blue-600 text-2xl mr-2 hover:text-blue-800 transition-colors duration-300"></i>
        <i className="fa-brands fa-twitter text-blue-600 text-2xl mr-2 hover:text-blue-800 transition-colors duration-300"></i>
        <i className="fa-brands fa-linkedin text-blue-600 text-2xl mr-2 hover:text-blue-800 transition-colors duration-300"></i>
        <i className="fa-brands fa-instgram text-blue-600 text-2xl mr-2 hover:text-blue-800 transition-colors duration-300"></i>
      </div>
    </div>
    <div>
      <h1>ABOUT FREELANCER</h1>
      <p>Freelance is a free to use, licensed Bootstrap theme <br /> created by Route</p>
    </div>
  </div>
</div>
</>
}
