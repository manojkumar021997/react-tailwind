const Navbar =()=>{
    return(
        <div className="flex justify-between items-center p-[1rem] shadow-md ">
            <div className="flex items-center justify-between gap-4 cursor-pointer ">
                <p>
                    <strong className="text-[25px] font-semibold text-yellowColor">Bumble</strong>
                    <span className="text-[25px] text-blackColor font-semibold">bee</span>
                </p>
                <ul className="flex gap-4 cursor-pointer font-semibold">
                    <li className="hover:text-yellowColor">Home</li>
                    <li className="hover:text-yellowColor">About</li>
                    <li className="hover:text-yellowColor">Contact</li>
                </ul>
            </div>
            <div>
                <ul className=" flex gap-4 cursor-pointer font-semibold">
                    <li className="hover:text-yellowColor">Signin</li>
                    <li className="hover:text-yellowColor">Signup</li>
                    <li className="hover:text-yellowColor">Profile</li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;