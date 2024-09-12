import React, { useState } from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import 'flowbite/dist/flowbite.css'; 

const Contact = () => {
  return (

    
    <div className="container  mx-auto py-16 justify-center items-center ">
    <h1 className='text-center py-8 font-bold uppercase text-4xl'>conatct section</h1>
    <div className="text-center flex align-middle justify-center">
      <div className="text-center flex items-center justify-center my-6">
        <div className="line bg-blue-900 w-32 h-1"></div>
        <i className="fa-solid fa-star mx-3"></i>
        <div className="line bg-blue-900 w-32 h-1"></div>
      </div>
    </div>
    <form className="flex max-w-md flex-col gap-4 mx-auto mt-20">
  <div>
    <div className="mb-2 block">
      <Label htmlFor="Name" value="Your Name" />
    </div>
    <TextInput id="Name" type="text" placeholder="user Name" required />
  </div>
  <div>
    <div className="mb-2 block">
      <Label htmlFor="Age" value="user age" />
    </div>
    <TextInput id="age" type="number" placeholder="age" required />
  </div>
  <div>
    <div className="mb-2 block">
      <Label htmlFor="email1" value="user mail" />
    </div>
    <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
  </div>
  <div>
    <div className="mb-2 block">
      <Label htmlFor="password1" value="Your password" />
    </div>
    <TextInput id="password1" type="password" required />
  </div>
  <Button className='bg-green-400' type="submit">Submit</Button>
</form>
    </div>
  );
}

export default Contact;
