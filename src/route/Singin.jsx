// import bgimage from '../assets/images/bumblebee.png'
// import SignUpWithGoogle from "../components/SignUp/signUpWithGoogle";
const Singnin = () => {
    return(
        <div>
            <div className="grid grid-cols-2 max-w-[100vw] h-[90vh] text-shdowColor">
                
                {/* <div style={{ backgroundImage: `url(${bgimage})` }} className='flex flex-col bg-cover opacity-50 bg-center bg-no-repeat justify-center items-center'> */}
                <div className="flex flex-col items-center justify-center">
                    <div className='bg-transparent text-whiteColor  mb-[2rem]'>
                        <button className='opacity-100 flex gap-2'> <img className="h-[25px] w-[25px] bg-transparent" src={'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png'} alt="Googleimg" />Signin With Google</button>
                    {/* </div> */}
                  </div>
                  <div className="flex flex-col mt-2 items-center justify-center border-lg ">
                    <input className="w-72 h-8 " type="text" placeholder="Enter Your Email"/><br/>
                    <input className="w-72  h-8" type="password" placeholder="Enter Your Password"/><br/>
                    <input className="w-72  h-8" type="password" placeholder="Enter Your Confirmpassword"/>
                    <button className="mt-6">Submit</button>
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