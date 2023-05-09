import AboutImg from '../assets/images/img2.png'
import { motion } from 'framer-motion';
const About = () =>{
    return(
        <div className='grid grid-cols-2'>
            <div className='flex items-center justify-center p-[2rem]'>
                <div className='mt-[2rem] flex items-center justify-center'>
                    <motion.img
                    animate={{
                        x:110
                    }}
                    initial={{
                        x:0
                    }}
                    transition={{
                        duration:1
                    }}
                     src={AboutImg} 
                     alt='aboutImg' 
                     className='w-[70%] rounded-md object-center object-cover overflow-hidden'/>
                </div>
            </div>
            <div className='flex items-center justify-center text-[20px] font-semibold text-shdowColor w-[100%]'>
                <p className='w-[50%] text-center opacity-[70%] hover:opacity-[100]'>
                    Our Talented teams craft the best code and design amazing user experiences
                    for our Clients 
                </p>
            </div>
        </div>
    )
}
export default About;