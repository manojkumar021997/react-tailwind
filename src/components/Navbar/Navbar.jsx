const Navbar =()=>{
    return(
        <div className="flex justify-between items-center p-[1rem] ">
            <div className="cursor-pointer">
                <p>
                    <strong className="text-[25px] font-semibold text-yellow-500">Bumble</strong>
                    <span className="text-[25px]">bee</span></p>
            </div>
            <div>
                <ul className="flex gap-4 cursor-pointer">
                    <li className="hover:text-yellow-500">Signin</li>
                    <li className="hover:text-yellow-500">Signup</li>
                    <li className="hover:text-yellow-500">Profile</li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;