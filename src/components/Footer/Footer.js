import React from 'react'
// import {IoCall} from 'react-icons/io5'
// import {IoMail} from 'react-icons/io5'
// import {MdLocationPin} from 'react-icons/md'
// import {BsFacebook} from 'react-icons/bs'
// import {AiFillInstagram} from 'react-icons/ai'
// import {AiFillGithub} from 'react-icons/ai'
// import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
      <div>
          <div className='grid grid-cols-5 p-[1rem] items-center'>
              <div>
                  <strong className="text-[25px] font-semibold text-yellowColor">Bumble</strong>
                  <span className="text-[25px] text-shdowColor opacity-70 font-semibold">bee</span>
              </div>
              <div className='text-shdowColor text-[12px] opacity-70 hover:opacity-100 flex flex-col gap-4'>
                  <h3 className='text-shdowColor text-[20px] font-semibold opacity-70 hover:opacity-100 hover:text-yellowColor'>Company</h3>
                  <p>A hiring Company</p>
                  <p>Product Based</p>
                  <p>Contact us</p>
              </div>
              <div className='text-shdowColor text-[12px] font-semibold opacity-70 hover:opacity-100 flex flex-col gap-4 '>
                  <h3 className='text-[20px] hover:text-yellowColor'>Privacy</h3>
                  <p>Privacy Policy</p>
                  <p>Information</p>
                  <p>Additional Value</p>
              </div>
              <div className='text-shdowColor text-[12px] font-semibold opacity-70 hover:opacity-100 flex flex-col gap-4'>
                  <h3 className='text-[20px] hover:text-yellowColor'>Training</h3>
                  <p>Privacy Policy</p>
                  <p>Information</p>
                  <p>Additional Value</p>
              </div>
              <div className='text-shdowColor text-[12px] opacity-70 hover:opacity-100 flex flex-col gap-4'>
                  <h3 className='font-semibold hover:text-yellowColor text-[20px]'>Work</h3>
                  <p>FrontEnd Developer</p>
                  <p>BackEnd Developer</p>
                  <p>Network Engineer</p>
                  <p>Tester</p>
                  {/* <div>
                  <h1 className="font-bold  text-2xl tracking-wide text-yellowColor">Contact Us</h1>
                  <p className="pt-2 text-shdowColor text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda pariatur natus expedita vitae minima</p>
              </div>
              <div></div>
              <div className=" flex">
                  <div className='text-yellowColor'><IoCall /></div>
                  <span className='text-shdowColor'>+(123) 9876 5432</span>
              </div>

              <div className=" flex">
                  <div className='text-yellowColor'><IoMail /></div>
                  <span className='text-shdowColor'>manojkumar0209@gmail.com</span>
              </div>

              <div className=" flex">
                  <div className='text-yellowColor'><MdLocationPin /></div>
                  <span className='text-shdowColor'>11,Street 342, Abcd fgh</span>
              </div>
              <div className=' flex text-yellowColor space-x-4 text-xl '>
                  <a href="a" className='hover:text-shdowColor'><BsFacebook /></a>
                  <a href="a" className='hover:text-shdowColor'><AiFillInstagram /></a>
                  <a href="a" className='hover:text-shdowColor'><AiFillGithub /></a>
                  <a href="a" className='hover:text-shdowColor'><AiFillTwitterCircle /></a>
              </div> */}
              </div>
          </div>
          <div>
            <p className='text-shdowColor text-center'>Copyrights for <span>@</span>2023</p>
          </div>
      </div>
  )
}

export default Footer
