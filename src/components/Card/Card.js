import React from 'react' 
import person_1 from '../../assets/images/per1.png'
import person_2 from '../../assets/images/per2.png'
import person_3 from '../../assets/images/per3.png'


const Card = () => {
  return (
    <div className='grid grid-cols-2'>
        <div className='w-[100%] h-[80vh] flex items-center justify-center -space-x-5 overflow-hidden'>
              <img className='w-[120px] rounded-full ' src={person_2} alt='per2' />
              <img className='w-[120px] rounded-full mt-[4rem] ' src={person_1} alt='per1' />
              <img className='w-[120px] rounded-full mt-[8rem]' src={person_3} alt='per3' />
        </div>
        <div>

        </div>
    </div>
  )
}

export default Card;
