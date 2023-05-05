import {AiOutlineMail} from 'react-icons/ai'
import {CgWorkAlt} from 'react-icons/cg'
import {BsTelephoneFill} from 'react-icons/bs'
const Profile = () =>{
    const user ={
                id: 1,
                'firstName': 'Arunprakash & Manoj Kumar',
                'job':'FrontEnd Developer',
                'email':'arunpraksh787@gmail.com',
                'image':'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
                'description': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, mollitia.',
                'phoneno':7878712311,
            }
    return(
        <div>
            <div className=" grid grid-cols-2">
                <div className="w-[30vw]] h-[100vh] border-yellowColor">
                    <img className="rounded-e-full h-[100vh] border-yellowColor  border-4 border-l-0" src={user.image} alt={user.firstName} />
                </div>
                <div className=" flex flex-col gap-[3rem] w-[100%] border-red-800 ">
                    <h1 className="mx-[4rem] p-[1rem] text-yellowColor font-bold-700 text-[28px]">{user.job}</h1>
                    <div className="hover:rounded-lg w-[70%] flex flex-col text-shdowColor hover:shadow-2xl hover:shadow-yellowColor
                     gap-6 content-between text-center p-[2rem] opacity-60 hover:opacity-100 ">
                        <h3 className="text-[25px] text-center font-semibold opacity-1">{user.firstName}</h3>
                        <p className='flex justify-center items-center'><AiOutlineMail className='text-[15px]'/> Email : {user.email}</p>
                        <p className='flex items-center justify-center'><CgWorkAlt className='text-[15px]'/> job : {user.job}</p>
                        <p className='flex items-center justify-center'>
                            <BsTelephoneFill className='text-[15px]'/>
                            Phone:{user.phoneno}
                        </p>
                        <p>{user.description}</p>

                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Profile