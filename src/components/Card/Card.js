import React from 'react' 
import person_1 from '../../assets/images/per1.png'
import {motion} from 'framer-motion'
import {MdLocationOn} from 'react-icons/md'

import person_2 from '../../assets/images/per2.png'
// import person_3 from '../../assets/images/per3.png'


const Card = () => {
  return (
    <div className='grid grid-cols-2 w-[100vw] h-[90vh]'>
        <motion.div
        animate={{
          x:110
        }}
        initial={{
          x:0
        }}
        transition={{
          duration: 1
        }}
         className='text-shdowColor  flex flex-col justify-center items-start gap-[1rem]'>
             <h2 className='w-[80%] text-[35px]'>
                <strong >As we express our gratitude,</strong> 
                we must never forget that the highest appreciation is not to utter words, but to live by them.
             </h2>
             <form className='w-[60%] flex items-center justify-between bg-white rounded-sm'>
                <MdLocationOn className='bg-transparent text-blackColor m-1  text-xl'/>
                <input type='text' className='bg-white text-black p-2'/>
                <button className='bg-yellowColor hover:bg-shdowColor text-blackColor font-medium text-[15px] m-1 p-1 rounded-sm '>Search Jobs</button>
             </form>
        </motion.div>
        <motion.div 
        animate={{
          x:0
        }}
        initial={{
          x:100
        }}
        transition={{
          duration: 1
        }}
        className='flex items-center justify-center gap-[1.5rem] p-[1rem]'>
            <img className='w-[30%] shadow-md shadow-yellowColor' src={person_1} alt='per1'/>
            <hr className='text-yellowColor border-2 border-yellowColor h-[80%]'/>
            <img className='w-[30%] mt-[5rem] shadow-md shadow-yellowColor' src={person_2} alt='per2'/>

        </motion.div>
    </div>
  )
}

export default Card;
