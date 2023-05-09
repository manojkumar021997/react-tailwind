import React from 'react'
// import {MdOutlineWorkHistory} from 'react-icons/md'

const JobCard = () => {
    const UserDetails = [
      {
        id: 1,
        Work: "FrontEnd Developer",
        'image':'https://e7.pngegg.com/pngimages/876/605/png-clipart-front-end-web-development-web-design-front-and-back-ends-web-developer-web-design-web-design-text.png',
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
        id: 5,
        Work: "Tech-Support",
        Employees: "3",
        description: "Front end developers for Websites",
      },
      {
        id: 6,
        Work: "Tester",
        Employees: "1",
        description: "Tester For web App",
      },
    ];
  return (
    <div className='flex flex-wrap gap-[1rem] p-[2rem]'>
      {UserDetails.map((val)=>{
        return(
          <div className=' flex flex-col items-center bg-whiteColor rounded-lg text-blackColor font-medium justify-between h-[240px] w-[30%] p-[1rem] hover:bg-blackColor hover:text-yellowColor'>
            <div className='bg-transparent w-[100%] flex items-center justify-center'>
              <p className='bg-transparent font-semibold flex items-center text-[1.1rem]'>{val.Work}</p>
            </div>
            <div className='bg-transparent'>
              <p className='bg-transparent flex items-center flex-col'>
                <span className='bg-transparent'>Description:</span> {val.description}
              </p>
              <p className='bg-transparent flex items-center flex-col'>
                <span className='bg-transparent'>Total Employees:</span>
                <span className='text-[25px] bg-transparent  rounded-full'>{val.Employees}</span>
              </p>
            </div>
            <button className='border-2 border-blackColor hover:text-shdowColor hover:border-shdowColor p-2'>View Details</button>
          </div>
        )
      })}
    </div>
  )
}

export default JobCard
