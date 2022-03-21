import React from "react";
import { Link } from "react-router-dom";

export default function NavbarMenus() {
    return (
        <div>
            <div className='row menu-bar-sec'>
                <div className="dropdown category-list">
                    <Link className='nav-link' to={'/home/maths'}>
                        <a className="nav-link" href="">Learning </a>
                    </Link>
                    <Link className='nav-link' to={'/home/analytics/usage'}>
                        <a className="nav-link" href="">Analytics</a>
                    </Link>


                </div>

                <div className="home-searchbox">
                    <i className="fa fa-search"></i>
                    <input className="search-topics" type="" placeholder="Search topics and skills"
                        aria-label="Search" />

                </div>
            </div>

        </div>
    )
}