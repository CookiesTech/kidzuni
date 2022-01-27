import Navbar from "./navbar";
import Banner from "./banner";
import Courses from "./courses";
import Footer from "./footer";

export default function Home () {
    return(    
        <div>
            <div className="container">
               <Navbar />
            </div>   
               <Banner />
            <div className="container">   
               <Courses />
            </div>
            <Footer />
        </div>
        
    )
   
}