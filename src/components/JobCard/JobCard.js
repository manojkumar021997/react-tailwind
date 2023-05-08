import React from 'react'

const JobCard = () => {
    const UserDetails =[
        {
            id: 1,
            'Work':'FrontEnd Developer',
            'Employees':'6',
            'description':'Front end developers for Websites',
        },
        {
            id: 2,
            'Work':'BackEnd Developer',
            'Employees':'2',
            'description':'Front end developers for Websites',
        },
        {
            id: 3,
            'Work':'FullStack Developer',
            'Employees':'3',
            'description':'Front end developers for Websites',
        }
    ]
  return (
    <div className='flex flex-wrap text-shdowColor '>
      {UserDetails.map((val)=>{
        return(
            <div className=' h-[120px] w-[30%] p-[1rem] hover:bg-yellowColor '>

                <p className='bg-transparent'>{val.Work}</p>
                <p className='bg-transparent'>{val.description}</p>
                <span className='bg-transparent'>{val.Employees}</span>
            </div>
        )
      })}
    </div>
  )
}

export default JobCard
