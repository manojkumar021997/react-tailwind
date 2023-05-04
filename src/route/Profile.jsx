const Profile = () =>{
    const user ={
                id: 1,
                'firstName': 'Arunprakash',
                'job':'FrontEnd Developer',
                'email':'arunpraksh787@gmail.com',
                'image':'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
                'description': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, mollitia.',
                'phoneno':7878712311,
            }
    return(
        <div className="bg-black">
            <div className=" grid grid-cols-2">
                <div className="w-[30vw]] h-[100vh] border-yellowColor">
                    <img className="rounded-e-full h-[100vh] border-yellowColor  border-4 border-l-0" src={user.image} alt={user.firstName} />
                </div>
                <div className="flex flex-col gap-[3rem]">
                    <h1 className="p-[1rem] text-yellowColor font-bold-700 text-[28px]">{user.job}</h1>
                    <div className="grid grid-cols-2 gap-[1rem]">
                        <div className="shadow-lg bg-transparent text-start p-[8px] hover:bg-yellowColor">
                            <h3 className="text-blackColor text-[25px] font-semibold opacity-1 hover:text-yellowColor">{user.firstName}</h3>
                            <p>email:{user.email}</p>
                            <p>job:{user.job}</p>
                            <p>phone:{user.phoneno}</p>

                        </div>
                        <div className="shadow-lg w-[240px]">
                            <p>{user.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Profile