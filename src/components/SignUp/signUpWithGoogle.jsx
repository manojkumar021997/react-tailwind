import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { userContext } from "../../Context/userContext";
const SignUpWithGoogle = ()=>{
    const {users, setUsers} = useContext(userContext)
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const handleGoogleSignin = ()=>{
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                // The signed-in user info.
                const user = result.user;
                console.log(user,credential);
                // setUsers({users,user})
                // console.log(setUsers);
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage);
                // ...
            });
    }
   return(
       <div className=' bg-transparent px-[1.8rem]  p-[10px] text-whiteColor rounded-lg hover:bg-whiteColor hover:text-blackColor border-2 border-shdowColor'>
           <button onClick={handleGoogleSignin} className='opacity-100 flex gap-4'>
               <img className="h-[25px] w-[25px] bg-transparent" src={'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png'} alt="Googleimg" />
               Sign in With Google
           </button>
       </div>
   )
}
export default SignUpWithGoogle;