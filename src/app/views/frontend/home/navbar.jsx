import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import { useNavigate } from 'react-router-dom';
import CounrtyService from '../Services/CountryService';
import StandardService from "../Services/StandardService";
import { config } from 'app/config';
import { toast } from "react-toastify";
toast.configure()

export default function Navbar() {
    let counrtyservice = new CounrtyService(config.baseURL);
    let standardservice = new StandardService(config.baseURL);



    let login = JSON.parse(localStorage?.getItem?.("user-info"));

    const Logout = () => {
        localStorage.clear();
        toast.success("Successfully Logged Out");
        navigate(`/home`);
    };

    const [counrtyinfo, setCountryinfo] = useState([]);
    const [countryimage, setCountryimage] = useState();


    useEffect(() => {
        countrydata();
    }, []);

    const countrydata = async () => {
        try {
            const data = await counrtyservice.countrylistdata();
            setCountryinfo(data.data.data);
            console.log(data.data.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    // const fetchData = async () => {
    //     try {
    //         const data = await standardservice.getstandardandSubjectData();
    //         setformdata(data.data.data.standards);
    //     }
    //     catch (e) {
    //         console.log(e);
    //     }
    // }

    // const handlecountry = (event) => {
    //     const getcountryimage = event.target.value;
    //     const data = await standardservice.getstandardandSubjectData(getcountryimage);
    //     // setCountryimage(getcountryimage);

    // }

    const handlecountry = async (event) => {

        const getcountryimage = event.target.value;

        const data = await standardservice.getstandardandSubjectData(getcountryimage);

        // if (data.data.status) {
        setCountryimage(getcountryimage);
        console.log(data.data);
        // }

    }


    const navigate = useNavigate();
    return (
        <div>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12  nav-home">
                    <nav className="navbar navbar-expand-lg home-menu">
                        <Link className="navbar-brand" to={"/home"}>
                            <img src="../../../assets/frontend/images/ct-logo.png" alt="logo" />
                        </Link>

                        <div className="change-country">
                            <div className='drop-flag'>
                                <img src={countryimage} alt="flag" />
                            </div>

                            <div className="coutry-drop-select">

                                <select name="country" className='form-control' onChange={(e) => handlecountry(e)}>
                                    {/* <option>country</option> */}
                                    {
                                        counrtyinfo.map((countrylist, i) => (
                                            <option key={countrylist.image} value={countrylist.image}>{countrylist.code}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>


                        {login ? (
                            <div className='login-after'>
                                <div className="nav-item  user-show">
                                    <a
                                        className="nav-link dropdown-toggle-profile"
                                        id="navbarDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        {login?.role == 3 ? (
                                            <span>Welcome, Parent</span>
                                        ) : (
                                            <span>Welcome, Student</span>
                                        )} <i class="fa fa-chevron-down" aria-hidden="true"></i>
                                    </a>
                                    <div
                                        className="dropdown-menu home-dropdownshow"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <a className="dropdown-item" href="">
                                            <Link className="nav-link " to="/profile-setting">
                                                profile setting
                                            </Link>
                                        </a>
                                        <a className="dropdown-item" href="">
                                            <Link className="nav-link " to="/profile-setting">
                                                Membership
                                            </Link>
                                        </a>

                                        <a className="dropdown-item logout-btn" href="" onClick={Logout}>
                                            Logout
                                        </a>
                                    </div>
                                </div>
                            </div>

                        ) : (
                            <div className='login-btn'>
                                <Link to={'/user/login'}>
                                    <button className="kidzuni-btn home-signin">Sign In</button>
                                </Link>
                            </div>
                        )}
                    </nav>
                </div>
            </div>
        </div >
    )
}