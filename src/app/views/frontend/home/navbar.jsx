import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CounrtyService from "../Services/CountryService"
import "../assets/css/style.css";


export default function Navbar() {

    let counrtyservice = new CounrtyService();

    const [country=[], setCountry] = useState();

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

                        <div class="btn-group">
                            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="https://res.cloudinary.com/dsczip846/image/upload/v1647502976/Kidzuni/coutry/s232ygndbasqflycbak2.jpg" />
                                    3456
                                <span class="glyphicon glyphicon-chevron-down"></span>
                            </button>
                            
                            <ul class="dropdown-menu">
                                <li class="dropdown-header">Member name (you)</li>
                                <li>
                                    <a href="" title="Select this card"><img src="https://res.cloudinary.com/dsczip846/image/upload/v1647502976/Kidzuni/country/s232ygndbasqflycbak2.jpg" /> 3456</a>
                                </li>
                            
                            </ul>
                        </div>

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