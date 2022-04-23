import React from "react";
import { Link } from "react-router-dom";

export default function NavbarMenus() {
    return (
        <div>
            <div className='row menu-bar-sec'>
                <div class="navbar navbar-expand-lg navbar-light ">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="dropdown category-list">
                            <Link className='nav-link' to={'/learning/maths'}>
                                <a className="nav-link" href="#!">Learning </a>
                            </Link>
                            <Link className='nav-link' to={'/analytics/usage'}>
                                <a className="nav-link" href="#!">Analytics</a>
                            </Link>
                        </div>
                        <div className="home-searchbox">
                            <i className="fa fa-search"></i>
                            <input className="search-topics" type="" placeholder="Search topics and skills"
                                aria-label="Search" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}