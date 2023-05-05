const SignUpWithEmail =()=>{
    return(
        <div className="bg-transparent border-2 border-shdowColor rounded-lg shadow-md shadow-gray-500 w-[50%]">
            <form className="bg-transparent  flex flex-col gap-[1.5rem] p-[2rem] cursor-pointer font-bold">
                <input  className='bg-transparent shadow-shdowColor shadow-md text-whiteColor border-white ' type="text" placeholder="Enter Name"/>
                <input className='bg-transparent shadow-shdowColor shadow-md text-whiteColor border-white'  type="text" placeholder="Enter Email"/>
                <input className='bg-transparent shadow-shdowColor shadow-md text-whiteColor border-white' type="password" placeholder="Enter Password"/>
                <input className='bg-transparent shadow-shdowColor shadow-md text-whiteColor border-white' type="text" placeholder="Confirm password" />
                <button className="border-2 rounded-md font-semibold border-shdowColor opacity-100 hover:bg-white hover:text-blackColor">Submit</button>
            </form>
        </div>
    )
}
export default SignUpWithEmail;