const SignUpWithGoogle = ()=>{
   return(
       <div className=' bg-transparent px-[1.8rem]  p-[10px] text-whiteColor rounded-lg hover:bg-whiteColor hover:text-blackColor border-2 border-shdowColor'>
           <button className='opacity-100 flex gap-4'>
               <img className="h-[25px] w-[25px] bg-transparent" src={'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png'} alt="Googleimg" />
               Sign in With Google
           </button>
       </div>
   )
}
export default SignUpWithGoogle;