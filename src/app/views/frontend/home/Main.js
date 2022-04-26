import Navbar from "./navbar";
import Banner from "./banner";

import { Link, animateScroll as scroll } from "react-scroll";
import Courses from "./courses";
import NavbarMenus from "./NavbarMenus";
import Footer from "./footer";
import Helmet from "react-helmet"
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
            setformData(data?.data?.data?.standards);
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
            <Helmet>
                <title>KidzUni | Home</title>
            </Helmet>
            <div className="container">

                <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={70}
                    duration={500}
                >

                    <Navbar onchange={handleChangeCountry} /> </Link>
            </div>
            <NavbarMenus />
            <Banner />
            <div className="container" id="section1" >
                <Courses data={formData} />
            </div>
            <Footer />
        </div>

    )

}