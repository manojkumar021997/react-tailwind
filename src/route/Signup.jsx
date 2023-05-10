/** @format */

import bgimage from "../assets/images/bumblebee.png";
import SignUpWithEmail from "../components/SignUp/signUpWithEmail";
// import SignUpWithGoogle from '../components/SignUp/signUpWithGoogle';
const Singnup = () => {
  return (
    <div className="grid grid-cols-2 w-[96vw] h-[90vh] text-shdowColor">
      <div className="bg-yellowColor opacity-70  flex items-center justify-center ">
        <div className="bg-yellowColor w-[60%]">
          <h1 className="bg-transparent text-blackColor text-start font-semibold text-[30px]">
            We are{" "}
          </h1>
          <h2 className="text-[30px] font-semibold text-center text-blackColor">
            Work Like
          </h2>
          <div className="text-end bg-yellowColor">
            <strong className=" text-[25px] text font-semibold bg-black  text-yellowColor">
              Bumble
            </strong>
            <span className="text-[25px] text-black opacity-100 bg-black text-shdowColor font-semibold">
              bee
            </span>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${bgimage})` }}
        className="flex flex-col bg-cover opacity-70 bg-center bg-no-repeat justify-evenly items-center ">
        {/* <SignUpWithGoogle/> */}
        {/* <div className='flex flex-row items-center bg-transparent w-full p-[2rem]'>
                    <hr className='border-3 border-shdowColor w-3/6'/>
                    <p className='bg-transparent p-4 font-bold text-[25px]'>or</p>
                    <hr className='border-3 border-shdowColor w-3/6'/>
                </div> */}
        <SignUpWithEmail />
      </div>
    </div>
  );
};

export default Singnup;
