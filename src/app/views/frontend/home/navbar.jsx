import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/style.css";


export default function Navbar() {

    return (
        <div>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12  nav-home">
                    <nav className="navbar navbar-expand-lg">
                        <Link className="navbar-brand" to={"/home"}>
                            <img src="assets/frontend/images/ct-logo.png" alt="logo" />
                        </Link>

                        <div className="home-navbar">
                            <ul className="navbar-nav home-header">
                                <div className="dropdown">
                                    <a className="nav-link" href="">Learning</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Maths</a>
                                    </div>
                                </div>

                                <div className="home-searchbox">
                                    <input className="search-topics" type="search" placeholder="Search topics and skills"
                                        aria-label="Search" />
                                    {/* <!-- <i className="fa fa-search"></i> --> */}
                                </div>

                                <div className="img-changebox">
                                    <div className="img-change" id="imgoutput">
                                        <span type="button" className="btn btn-default" data-toggle="dropdown"
                                            aria-expanded="true">
                                            <img src="assets/frontend/images/sri-lankaflag.jpg" alt="" />
                                            {/* <!-- <img id="dynamic_flag" src="https://adjoinz.s3.ap-southeast-1.amazonaws.com/country_flag/lk.png?AWSAccessKeyId=AKIAQJN5IESYMDRTPJ77&amp;Signature=0Nb53dOsLgojuehlaiMKyB5R67o%3D&amp;Expires=1642573637"> --> */}
                                        </span>
                                        {/* <!-- <ul className="dropdown-menu changeType"></ul> --> */}
                                    </div>
                                </div>
                                <button className="btn btn-success home-signin">Sign In</button>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}