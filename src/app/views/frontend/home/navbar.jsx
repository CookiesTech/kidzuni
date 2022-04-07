import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
toast.configure()

export default function Navbar() {
    let login = JSON.parse(localStorage?.getItem?.("user-info"));

    const Logout = () => {
        localStorage.clear();
        toast.success("Successfully Logged Out");
        navigate(`/home`);
    };

    const navigate = useNavigate();
    return (
        <div>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12  nav-home">
                    <nav className="navbar navbar-expand-lg home-menu">
                        <Link className="navbar-brand" to={"/home"}>
                            <img src="../../../assets/frontend/images/ct-logo.png" alt="logo" />
                        </Link>

                        {login ? (
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
                                        {login?.role === 3 ? (
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