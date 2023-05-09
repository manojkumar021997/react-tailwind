import React from 'react'

const JobCard = () => {
    const UserDetails = [
      {
        id: 1,
        Work: "FrontEnd Developer",
        Employees: "6",
        description: "Front end developers for Websites",
      },
      {
        id: 2,
        Work: "BackEnd Developer",
        Employees: "2",
        description: "Front end developers for Websites",
      },
      {
        id: 3,
        Work: "FullStack Developer",
        Employees: "3",
        description: "Front end developers for Websites",
      },
      {
        id: 4,
        Work: "NetWork Engineer",
        Employees: "3",
        description: "Front end developers for Websites",
      },
      {
        id: 3,
        Work: "Tech-Support",
        Employees: "3",
        description: "Front end developers for Websites",
      },
    ];
  return (
    <div className='flex flex-wrap gap-[1rem] text-shdowColor p-[2rem]'>
      {UserDetails.map((val)=>{
        return(
            <div className=' flex flex-col items-start justify-center h-[120px] w-[30%] p-[1rem] hover:bg-yellowColor hover:text-blackColor'>

                <p className='bg-transparent'>Work: {val.Work}</p>
                <p className='bg-transparent'>Description: {val.description}</p>
                <span className='bg-transparent'>Total Employees: {val.Employees}</span>
            </div>
        )
      })}
    </div>
  )
}

export default JobCard
