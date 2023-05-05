import { Link } from "react-router-dom";

const Navbar =()=>{
    return(
        <div className="flex justify-between items-center p-[1rem] shadow-md ">
            <div className="flex items-center justify-between gap-4 cursor-pointer ">
                <p>
                    <Link to={"/"}>
                        <strong className="text-[25px] font-semibold text-yellowColor">Bumble</strong>
                        <span className="text-[25px] text-shdowColor opacity-70 font-semibold">bee</span>
                    </Link>
                </p> 
                <div>
            <ul className="flex gap-8 mx-16 cursor-pointer font-semibold">
                    <Link to={"/"}><li className=" text-shdowColor opacity-70 hover:text-yellowColor hover:opacity-100">Home</li></Link>
                    <Link to={"/About"}><li className=" text-shdowColor opacity-70 hover:text-yellowColor hover:opacity-100 ">About</li></Link>
                    <Link to={"/Contact"}><li className=" text-shdowColor opacity-70 hover:text-yellowColor hover:opacity-100">Contact</li></Link>
                </ul>
            </div>
            </div>
            
            <div>
                <ul className=" flex gap-8 cursor-pointer font-semibold">
                    <Link to={"/Signin"}><li className=" text-shdowColor opacity-70 hover:text-yellowColor hover:opacity-100">Sign in</li></Link>
                    <Link to={"/Signup"}><li className=" text-shdowColor opacity-70 hover:text-yellowColor hover:opacity-100">Sign up</li></Link>
                    <Link to={"/Profile"}><li className=" text-shdowColor opacity-70 hover:text-yellowColor hover:opacity-100">Profile</li></Link>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;