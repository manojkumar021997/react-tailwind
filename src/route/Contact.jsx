import {IoCall} from 'react-icons/io5'
import {IoMail} from 'react-icons/io5'
import {MdLocationPin} from 'react-icons/md'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Contact = () =>{
    return(
        
            <div className="flex w-full m-h-screen justify-center item-center">
                <div className=" flex flex-col md:flex-row md:space-x-6 space-y-8 md:space-y-0  text-shdowColor w-full max-w-4xl p-8 rounded-xl shadow-lg">

                <div className="flex flex-col space-y-6">
                    <div>
                        <h1 className="font-bold text-2xl tracking-wide text-yellowColor">Contact Us</h1>
                        <p className="pt-2 text-shdowColor text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda pariatur natus expedita vitae minima</p>
                    </div>
                    <div></div>
                    <div className=" flex">
                    <div className='text-yellowColor'><IoCall/></div>
                    <span>+(123) 9876 5432</span>
                    </div>

                    <div className=" flex">
                    <div className='text-yellowColor'><IoMail/></div>
                    <span>manojkumar0209@gmail.com</span>
                    </div>

                    <div className=" flex">
                    <div className='text-yellowColor'><MdLocationPin/></div>
                    <span>11,Street 342, Abcd fgh</span>
                    </div>
                <div className=' flex text-yellowColor space-x-4 text-xl '>
                <a href="#" className='hover:text-shdowColor'><BsFacebook/></a>
                <a href="#" className='hover:text-shdowColor'><AiFillInstagram/></a>
                <a href="#" className='hover:text-shdowColor'><AiFillGithub/></a>
                <a href="#" className='hover:text-shdowColor'><AiFillTwitterCircle/></a>
                </div>
                </div>
                
                <div className=' rounded-xl shadow-lg p-8'>
                    <from action="" className="flex flex-col space-y-4">
                        <div>
                            <label for="" className='text-sm'>Enter Your Name </label>
                            <input type='text' placeholder='Enter Your Name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-#facc15-400'></input>
                        </div>

                        <div>
                        <label for="" className='text-sm'>Enter Your E-mail </label>
                            <input type='text' placeholder='Enter Your E-mail' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-#facc15-400'></input>
                        </div>

                        <div>
                        <label for="" className='text-sm'>Message </label>
                            <textarea type='text' placeholder='Type Your Message Here' rows="4" className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-#facc15-400' > </textarea>
                        </div>
                    </from>
                    <button
                         className='inline-block self-end bg-yellowColor hover:bg-shdowColor text-black font-bold rounded-lg px-6 py-2 mt-4 space-y-8 uppercase text-sm'> Send message
                         </button>
                </div>
            </div> 
         </div>

    )
}
export default Contact;