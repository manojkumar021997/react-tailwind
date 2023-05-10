import React, { useState } from 'react';
import {UserAuth} from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../Context/AuthContext';

const SignUpWithEmail = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]= useState('')
  const { createUser } = UserAuth();

  const handleSubmit = async(event) => {
    event.preventDefault();
    setError('')
    try {
      await createUser(email, password)
      navigate('/')
    } catch (e) {
      setError(e.message)
      console.log(e.message);
    }
    
  };

  return (
    <div className="bg-transparent border-2 border-shdowColor rounded-lg shadow-md shadow-gray-500 w-[50%]">
      <form className="bg-transparent  flex flex-col gap-[1.5rem] p-[2rem] cursor-pointer font-bold" 
      onSubmit={handleSubmit}>
        <h2 className="bg-transparent text-center">Register Here</h2>
        <input className='bg-transparent shadow-shdowColor shadow-md text-whiteColor border-white ' type="text" placeholder="Enter Name"/>
        <input className='bg-transparent shadow-shdowColor shadow-md text-whiteColor font-semibold border-white' 
        name="email"
        onChange={(e)=>setEmail(e.target.value)}
         type="text" placeholder="Enter Email"/>
        <input className='bg-transparent shadow-shdowColor shadow-md text-whiteColor border-white' 
        onChange={(e)=>setPassword(e.target.value)}
        name="password" type="password" placeholder="Enter Password"/>
        <input className='bg-transparent shadow-shdowColor shadow-md text-whiteColor border-white' type="text" placeholder="Confirm password" />
        <button className="border-2 rounded-md font-semibold border-shdowColor opacity-100 hover:bg-white hover:text-blackColor">Submit</button>
        <p className='bg-transparent flex items-center'>Already Have an account? <strong className='text-yellowColor' onClick={()=>navigate('/signin')}>Signin</strong></p>
      </form>
    </div>
  );
};

export default SignUpWithEmail;
