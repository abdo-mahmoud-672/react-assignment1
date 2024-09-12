import React from 'react';
import logo from "../../assets/avataaars.svg";
import axios from "axios"

export default function Home() {
  return (
    <>
    
      <div className="flex justify-center items-center min-h-4">
        <img src={logo} alt="logo" className="w-80" />
      </div>
      <div className="text">
        <h1 className="text-center py-8 font-bold uppercase text-4xl">start Framework</h1>
      </div>
      <div className="text-center flex align-middle justify-center">
          <div className="text-center flex items-center justify-center my-6">
            <div className="line bg-blue-900 w-32 h-1"></div>
            <i className="fa-solid fa-star mx-3"></i>
            <div className="line bg-blue-900 w-32 h-1"></div>
          </div>
        </div>
      <p className="text-center py-6">Graphic Artist - Web Designer - Illustrator</p>
    </>
  );
}
