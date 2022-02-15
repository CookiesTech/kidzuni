import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/style.css";


export default function Navbar() {

    return (
        <div>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12  nav-home">
                    <nav className="navbar navbar-expand-lg home-menu">
                        <Link className="navbar-brand" to={"/home"}>
                            <img src="assets/frontend/images/ct-logo.png" alt="logo" />
                        </Link>

                        <div className="home-navbar">
                            <ul className="navbar-nav home-header">
                                <div className="dropdown">
                                    <a className="nav-link" href="">Learning</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link className="dropdown-item" to={"/standard-lkg"}>Maths</Link>
                                    </div>
                                </div>

                                <div className="home-searchbox">
                                    <input className="search-topics" type="search" placeholder="Search topics and skills"
                                        aria-label="Search" />
                                    {/* <!-- <i className="fa fa-search"></i> --> */}
                                </div>

                                <div className="img-changebox">
                                    <div className="img-change" id="imgoutput">
                                        {/* <span type="button" className="btn btn-default" data-toggle="dropdown"
                                            aria-expanded="true">
                                            <img src="assets/frontend/images/sri-lankaflag.jpg" alt="" /> */}
                                        {/* <!-- <img id="dynamic_flag" src="https://adjoinz.s3.ap-southeast-1.amazonaws.com/country_flag/lk.png?AWSAccessKeyId=AKIAQJN5IESYMDRTPJ77&amp;Signature=0Nb53dOsLgojuehlaiMKyB5R67o%3D&amp;Expires=1642573637"> --> */}
                                        {/* </span> */}
                                        {/* <!-- <ul className="dropdown-menu changeType"></ul> --> */}
                                    </div>
                                </div>
                                <button className="btn btn-success home-signin" data-toggle="modal" data-target="#exampleModalCenter">Sign In</button>

                                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLongTitle">Sign in to Kidzuni</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <div className='sign-in-area'>
                                                    <label>Username :</label>&nbsp;
                                                    <input type='text'/>
                                                </div>
                                                <div className='sign-in-area'>
                                                    <label>Password :</label>&nbsp;
                                                    <input type='password'/>
                                                </div>
                                                <div className='' ><a className='nav-link' href="#" id="sign-in">forgot password</a></div>
                                            </div>
                                            <div class="modal-footer">
                                                {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> */}
                                                <button type="button" class="btn btn-primary">Sign in</button>
                                            </div>
                                            <div className='register-part'>
                                                <strong> Not a Member yet?</strong>   
                                                <Link to="/membership"><a className='nav-link'>sign in{'>'}</a></Link>
                                                    
                                            </div>

                                            <form action="#" class="sign-in">
                                                <label for="email-register">Email:</label>
                                                <input type="text" id="email-register" />
                                                <label for="password-register">Password:</label>
                                                <input type="password" id="password-register"/>
                                                <label for="password-confirmation">Confirm Password:</label>
                                                <input type="password-confirmation" id="password-confirmation" />
                                                <p class="check-mark">
                                                    <input type="checkbox" id="accept-terms"/>
                                                    <label for="accept-terms">I agree to the <a href="#">Terms</a></label>
                                                </p>
                                                <input type="submit" id="submit" value="Create Account" />
                                            </form>  

                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        
                    </nav>
                </div>
            </div>
        </div>
    )
}