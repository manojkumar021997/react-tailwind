import Card from "../components/Card/Card"
import JobCard from "../components/JobCard/JobCard"
import Footer from "../components/Footer/Footer"
const Home = () =>{
    return(
       <div className="md:flex-row md:space-x-6 space-y-8 md:space-y-0 ">
       <Card/>
       <JobCard/>
       <Footer/>
       </div>
    )
}

export default Home