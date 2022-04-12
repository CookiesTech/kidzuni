import Navbar from "./navbar";
import Banner from "./banner";
import Courses from "./courses";
import NavbarMenus from "./NavbarMenus";
import Footer from "./footer";
import StandardService from "../Services/StandardService";
import { config } from 'app/config';
import { useState, useEffect } from "react";
export default function Home() {
    let standardservice = new StandardService(config.baseURL);
    const [countrycode, setCountryCode] = useState(3);
    const [formData = [], setformData] = useState();

    useEffect(() => {
        handleChangeCountry();
        getSubjectandStandardData();

    }, []);


    const getSubjectandStandardData = async () => {
        try {
            const data = await standardservice.getstandardandSubjectData(countrycode);
            setformData(data.data.data.standards);
        }
        catch (e) {
            console.log(e);
        }
    }
    const handleChangeCountry = async (e) => {
        setCountryCode(e)
        try {
            const data = await standardservice.getstandardandSubjectData(e);
<<<<<<< HEAD
            //console.log(data.data.data);
=======
            console.log(data.data.data);
>>>>>>> fb545099792ff2d12b04c2dcb78154208481ec68
            setformData(data?.data?.data.standards);
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
            <div className="container">
                <Navbar onchange={handleChangeCountry} />
            </div>
            <NavbarMenus />
            <Banner />
            <div className="container">
                <Courses data={formData} />
            </div>
            <Footer />
        </div>

    )

}