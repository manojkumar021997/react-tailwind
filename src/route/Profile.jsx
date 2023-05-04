const Profile = ({users}) =>{
    const user = [...users]
    return(
       <div className="grid grid-cols-3 m-[2rem]">
        {user.map(({id,name, email,image, job})=>{
            return(
                <div className="w-[340px] h-auto">
                    <img className="rounded-e-full" src={image} alt={name} />
                    <p>{name}</p>
                    <strong>{job}</strong>
                    <p><span>{email}</span></p>
                </div>
            )
        })}
       </div> 
    )
}

export default Profile