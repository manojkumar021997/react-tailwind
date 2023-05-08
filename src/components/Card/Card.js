import React from 'react' 
import person_1 from '../../assets/images/per1.png'
// import person_2 from '../../assets/images/per2.png'
// import person_3 from '../../assets/images/per3.png'


const Card = () => {
  return (
    <div className='grid grid-cols-2 '>
        <div className='text-shdowColor  flex flex-col justify-center items-center gap-[1rem]'>
             <h2 className='w-[80%] text-[35px]'>
                <strong >As we express our gratitude,</strong> 
                we must never forget that the highest appreciation is not to utter words, but to live by them.
             </h2>
             <form className='w-[80%] flex -space-x-2 '>
                <input type='text' className='bg-white w-[50%] text-shdowcolor  rounded-md py-2'/>
                <button className='bg-yellowColor text-blackColor text-[20px] rounded-lg'>Search Jobs</button>
             </form>
        </div>
        <div className='flex items-center justify-center'>
            <img className='w-[300px] rounded-full shadow-md shadow-yellowColor' src={person_1} alt='per1'/>
        </div>
    </div>
  )
}

export default Card;
