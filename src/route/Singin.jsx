import bgimage from '../assets/images/bumblebee.png'

const Singnin = () => {
    return(
        <div>
            <div className="grid grid-cols-2 max-w-[100vw] h-[90vh] text-shdowColor">
                
                <div style={{ backgroundImage: `url(${bgimage})` }} className='flex flex-col bg-cover opacity-50 bg-center bg-no-repeat justify-center items-center'>
                    <div className='bg-transparent text-whiteColor'>
                        <button className='opacity-100'>Signin With Google</button>
                    </div>
                    <div>details</div>
                </div>
                <div className="bg-yellowColor opacity-70  flex items-center justify-center ">
                    <div className='bg-yellowColor w-[60%]'>
                        <h1 className='bg-transparent text-blackColor text-start font-semibold text-[30px]'>We are  </h1>
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