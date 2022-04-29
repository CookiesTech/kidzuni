import Navbar from "./navbar";
import Banner from "./banner";

//import { Link, animateScroll as scroll } from "react-scroll";
import Courses from "./courses";
import NavbarMenus from "./NavbarMenus";
import Footer from "./footer";
import StandardService from "../Services/StandardService";
import { config } from 'app/config';
import { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
export default function Home() {
    let standardservice = new StandardService(config.baseURL);
    const [countrycode, setCountryCode] = useState(3);
    const [formData = [], setformData] = useState();

    useEffect(() => {
        // handleChangeCountry();
        getSubjectandStandardData();

    }, []);


    const getSubjectandStandardData = async () => {
        let data = '';
        try {
            let user = JSON.parse(localStorage?.getItem?.('user-info'));
            if (user) {

                data = await standardservice.getstandardandSubjectData(user.country_code);
            }
            else {
                localStorage.setItem('country_code', countrycode);
                data = await standardservice.getstandardandSubjectData({ country_code: countrycode });
            }

            setformData(data?.data?.data?.standards);
        }
        catch (e) {
            console.log(e);
        }
    }
    const handleChangeCountry = async (e) => {
        setCountryCode(e)
        try {
            // localStorage.clear('country_code');

            const country = { country_code: e }
            const data = await standardservice.getstandardandSubjectData(country);
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

                {/* <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={5000}
                > */}

                <Navbar onchange={handleChangeCountry} />
                {/* </Link> */}
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