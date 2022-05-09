import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import { useNavigate } from 'react-router-dom';
import CounrtyService from '../Services/CountryService';
import { config } from 'app/config';
import { toast } from "react-toastify";
toast.configure()

export default function Navbar(props) {
    const navigate = useNavigate();
    let counrtyservice = new CounrtyService(config.baseURL);
    let userData = JSON.parse(localStorage?.getItem?.("user-info"));
    const Logout = () => {
        localStorage.clear();
        toast.success("Successfully Logged Out");
        navigate(`/home`);
    };
    const [counrtyinfo, setCountryinfo] = useState([]);
    const [countryimage, setCountryimage] = useState();

    useEffect(() => {
        if (userData === null) {
            countrydata();
        }

    }, []);

    const countrydata = async () => {
        try {
            const data = await counrtyservice.countrylistdata();
            setCountryinfo(data.data.data);
            setCountryimage(data.data.data[0].image)
        }
        catch (e) {
            console.log(e);
        }
    }

    const handlecountry = async (event) => {
        const index = event.target.value;
        setCountryimage(counrtyinfo[index].image);
        localStorage.setItem('country_code', counrtyinfo[index].id);
        props.onchange(counrtyinfo[index].id)

    }


    return (
        <div>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12  nav-home">
                    <nav className="navbar navbar-expand-lg home-menu">
                        <Link className="navbar-brand" to={"/home"}>
                            <img src="../../../assets/frontend/images/ct-logo.png" alt="logo" />
                        </Link>

                        {userData ? (
                            <div className='login-after'>
                                <div className="nav-item  user-show">
                                    <a href="#!"
                                        className="nav-link dropdown-toggle-profile"
                                        id="navbarDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        {userData?.role == 3 || userData?.role == 4 ? (
                                            <span>Welcome, {userData?.role == 3 ? 'Parent' : 'Teacher'}</span>
                                        ) : (
                                            <span>Welcome, {userData?.name}</span>
                                        )} <i class="fa fa-chevron-down" aria-hidden="true"></i>
                                    </a>
                                    <div
                                        className="dropdown-menu home-dropdownshow"
                                        aria-labelledby="navbarDropdown"
                                    >

                                        <Link className="nav-link " to="/profile-setting">
                                            profile setting
                                        </Link>

                                        <button className="dropdown-item logout-btn" onClick={Logout}>
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="change-country">
                                    <div className='drop-flag'>
                                        <img src={countryimage} alt="flag" />
                                    </div>
                                    <div className="coutry-drop-select">
                                        <select name="country" className='form-control' onChange={(e) => handlecountry(e)}>
                                            {
                                                counrtyinfo.map((countrylist, i) => (
                                                    <option key={countrylist.image} value={i}>{countrylist.code}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='login-btn'>
                                    <Link to={'/user/login'}>
                                        <button className="kidzuni-btn home-signin">Sign In</button>
                                    </Link>
                                </div>

                            </>
                        )}
                    </nav>
                </div>
            </div>
        </div >
    )
}