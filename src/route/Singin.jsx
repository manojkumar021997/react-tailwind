// import bgimage from '../assets/images/bumblebee.png'

const Singnin = () => {
    return(
        <div>
            <div className="grid grid-cols-2 max-w-[100vw] h-[90vh] text-shdowColor">
                
                {/* <div style={{ backgroundImage: `url(${bgimage})` }} className='flex flex-col bg-cover opacity-50 bg-center bg-no-repeat justify-center items-center'> */}
                <div className="flex flex-col  gap-2">
                    <div className='bg-transparent text-whiteColor flex items-center justify-center'>
                        <button className='opacity-100  '>Signin With Google</button>
                    {/* </div> */}
                  </div>
                  <div className="flex flex-col mt-2 items-center justify-center">
                    <input className="w-72 h-8" type="text" placeholder="Enter Your Email"/><br/>
                    <input className="w-72  h-8" type="password" placeholder="Enter Your Password"/><br/>
                    <input className="w-72  h-8" type="password" placeholder="Enter Your Confirmpassword"/>
                  </div>
                  </div>
                <div className="bg-yellowColor opacity-70  flex items-center justify-center ">
                    <div className='bg-yellowColor w-[60%]'>
                        <h2 className='bg-transparent text-blackColor text-start font-semibold text-[30px]'>We are  </h2>
                        <h2 className='text-[30px] font-semibold text-center bg-transparent text-blackColor'>Work Like</h2>
                        <div className='text-end bg-yellowColor'>
                            <strong className=" text-[25px] text font-semibold text-yellowColor">Bumble</strong>
                            <span className="text-[25px] text-shdowColor opacity-100 font-semibold">bee</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Singnin;