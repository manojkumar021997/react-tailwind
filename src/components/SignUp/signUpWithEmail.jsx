import React, { useContext } from 'react';
import { useAuth } from '../../Context/AuthContext';

const SignUpWithEmail = () => {
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    login(email, password);
  };

  return (
    <div className="bg-transparent border-2 border-shdowColor rounded-lg shadow-md shadow-gray-500 w-[50%]">
      <form className="bg-transparent  flex flex-col gap-[1.5rem] p-[2rem] cursor-pointer font-bold" 
      onSubmit={handleSubmit}>
        <h2 className="bg-transparent text-center">Register Here</h2>
        <input className='bg-transparent shadow-shdowColor shadow-md text-whiteColor border-white ' type="text" placeholder="Enter Name"/>
        <input className='bg-transparent shadow-shdowColor shadow-md text-whiteColor font-semibold border-white' name="email" type="text" placeholder="Enter Email"/>
        <input className='bg-transparent shadow-shdowColor shadow-md text-whiteColor border-white' name="password" type="password" placeholder="Enter Password"/>
        <input className='bg-transparent shadow-shdowColor shadow-md text-whiteColor border-white' type="text" placeholder="Confirm password" />
        <button className="border-2 rounded-md font-semibold border-shdowColor opacity-100 hover:bg-white hover:text-blackColor">Submit</button>
      </form>
    </div>
  );
};

export default SignUpWithEmail;
