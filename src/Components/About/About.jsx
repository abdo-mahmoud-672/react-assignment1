import React from 'react'

export default function About() {
  return (<>
  <div className="flex items-center justify-center min-h-screen">
  <div className="container text-center">
    <h1 className="text-center py-8 font-bold uppercase text-4xl text-white">About Component</h1>
    <div className="flex items-center justify-center mb-4">
      <div className="line bg-white w-32 h-1"></div>
      <i className="fa-solid fa-star text-white mx-3 text-xl"></i>
      <div className="line bg-white w-32 h-1"></div>
    </div>
    <div className="flex items-center justify-center text-white">
      <p className="mb-4">
      
        Freelancer is a free bootstrap theme created by Route. The<br />
        download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
      </p>
      <p>
        Freelancer is a free bootstrap theme created by Route. The<br />
        download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
      </p>
    </div>
  </div>
</div>
    </>
  )
}