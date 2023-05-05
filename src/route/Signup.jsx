import bgimage from '../assets/images/bumblebee.png'
import SignUpWithEmail from '../components/SignUp/signUpWithEmail';
import SignUpWithGoogle from '../components/SignUp/signUpWithGoogle';
const Singnup = () => {
    return(
        <div className="grid grid-cols-2 w-[96vw] h-[90vh] text-shdowColor">
            <div  className="bg-yellowColor opacity-70  flex items-center justify-center ">
                <div className='bg-yellowColor w-[60%]'>
                    <h1 className='bg-transparent text-blackColor text-start font-semibold text-[30px]'>We are  </h1>
                    <h2 className='text-[30px] font-semibold text-center bg-transparent text-blackColor'>Work Like</h2>
                    <div className='text-end bg-yellowColor'>
                        <strong className=" text-[25px] text font-semibold text-yellowColor">Bumble</strong>
                        <span className="text-[25px] text-shdowColor opacity-100 font-semibold">bee</span>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${bgimage})`}} className='flex flex-col bg-cover opacity-50 bg-center bg-no-repeat justify-center items-center'>
                <SignUpWithGoogle/>
                <SignUpWithEmail/>
            </div>
        </div>
    )
}

export default Singnup;