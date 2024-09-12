import React from 'react';
import photo from "../../assets/poert1.png";
import photo2 from "../../assets/port2.png";
import photo3 from "../../assets/port3.png";

export default function Porto() {
  return (
    <>
      <div className="container">
        <h1 className='text-center py-8 font-bold uppercase text-4xl'>Portfolio Component</h1>
        <div className="text-center flex align-middle justify-center">
          <div className="text-center flex items-center justify-center my-6">
            <div className="line bg-blue-900 w-32 h-1"></div>
            <i className="fa-solid fa-star mx-3"></i>
            <div className="line bg-blue-900 w-32 h-1"></div>
          </div>
        </div>
        <div className="ph1 flex gap-10 justify-center mb-4">
          <img src={photo} alt="photo" className="w-80" />
          <img src={photo2} alt="photo" className="w-80" />
          <img src={photo3} alt="photo" className="w-80" />
        </div>
        <div className="ph2 flex gap-10 justify-center">
          <img src={photo} alt="photo" className="w-80" />
          <img src={photo2} alt="photo" className="w-80" />
          <img src={photo3} alt="photo" className="w-80" />
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
