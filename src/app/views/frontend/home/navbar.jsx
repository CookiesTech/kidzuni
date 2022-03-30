import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CounrtyService from "../Services/CountryService"
import "../assets/css/style.css";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
toast.configure()

export default function Navbar() {
    let counrtyservice = new CounrtyService();
    let login = JSON.parse(localStorage?.getItem?.("user-info"));

    // const [login, setLogin] = useState(false);

    const Logout = () => {
        localStorage.clear();
        toast.success("Successfully Logged Out");
        navigate(`/home`);
    };

    const navigate = useNavigate();
    const [country = [], setCountry] = useState();

    useEffect(() => {
        CountryData();
    }, []);


    const CountryData = async () => {    //standard classes
        try {
            const data = await counrtyservice.CountryData();
            setCountry(data.data.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12  nav-home">
                    <nav className="navbar navbar-expand-lg home-menu">
                        <Link className="navbar-brand" to={"/home"}>
                            <img src="../../../assets/frontend/images/ct-logo.png" alt="logo" />
                        </Link>
                        <select title="Select your spell" class="selectpicker">
                            <option>Select...</option>
                            <option data-icon="glyphicon glyphicon-eye-open" data-subtext="petrification">Eye of Medusa</option>
                            <option data-icon="glyphicon glyphicon-fire" data-subtext="area damage">Rain of Fire</option>
                        </select>

                        <div className="home-navbar">
                            <ul className="navbar-nav home-header">
                                <div className='country-list'>
                                    <select>
                                        {
                                            country?.map((countryname, k) => (
                                                <option>{countryname.code}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </ul>
                        </div>

                        {login ? (
                            <div className='login-after'>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle-profile"
                                        href="#!"
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
                                        )}
                                    </a>
                                    <div
                                        className="dropdown-menu home-dropdownshow"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <a className="dropdown-item" href="">
                                            <Link
                                                className="nav-link "
                                                to="/profile-setting"
                                            >
                                                profile setting
                                            </Link>
                                        </a>
                                        <a className="dropdown-item" href="">

                                            <Link className="nav-link " to="/profile-setting">
                                                Membership
                                            </Link>
                                        </a>

                                        <a
                                            className="dropdown-item logout"
                                            href=""
                                            onClick={Logout}
                                        >
                                            Logout
                                        </a>
                                    </div>
                                </li>
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