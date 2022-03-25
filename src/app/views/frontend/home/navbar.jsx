import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CounrtyService from "../Services/CountryService";
import CountryDropdown from 'country-dropdown-with-flags-for-react';

import "../assets/css/style.css";


export default function Navbar() {

    // let counrtyservice = new CounrtyService();

    // const [country = [], setCountry] = useState();

    // useEffect(() => {
    //     CountryData();

    // }, []);


    // const CountryData = async () => {    //standard classes
    //     try {
    //         const data = await counrtyservice.CountryData();

    //         setCountry(data.data.data);
    //     }
    //     catch (e) {
    //         console.log(e);
    //     }
    // }

    return (
        <div>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12  nav-home">
                    <nav className="navbar navbar-expand-lg home-menu">
                        <Link className="navbar-brand" to={"/home"}>
                            <img src="../../../assets/frontend/images/ct-logo.png" alt="logo" />
                        </Link>

                        <CountryDropdown id="UNIQUE_ID" className='YOUR_CSS_CLASS' preferredCountries={['gb', 'us', 'in', 's']} value="" handleChange={e => console.log(e.target.value)}></CountryDropdown>

                        <div className="home-navbar">
                            <ul className="navbar-nav home-header">
                                <div className='country-list'>
                                    <div>
                                        <div class="img-change" id="imgoutput">
                                            <img
                                                id="dynamic_flag"
                                                src="https://res.cloudinary.com/dsczip846/image/upload/v1647502976/Kidzuni/country/s232ygndbasqflycbak2.jpg"
                                            />
                                        </div>
                                    </div>
                                    {/* <select>
                                        {
                                            country?.map((countryname, k) => (
                                                <option>{countryname.code}</option>
                                            ))
                                        }
                                    </select> */}
                                </div>

                                <div className='login-btn'>
                                    <Link to={'/login'}>
                                        <button className="kidzuni-btn home-signin">Sign In</button>
                                    </Link>
                                </div>
                            </ul>
                        </div>

                    </nav>
                </div>
            </div>



        </div>
    )
}