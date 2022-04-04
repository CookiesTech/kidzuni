import React from "react"
import Footer from "../home/footer"
import Navbar from "../home/navbar"
import { Link } from "react-router-dom"
import NavbarMenus from "../home/NavbarMenus"
import StandardClass from "./Classes"
import LearningMenu from "./LearningMenu"


export default function Recommendation() {
    return (
        <div>
            <div className="container">
                <Navbar />
            </div>
            <NavbarMenus />
            <div className="container">
                <LearningMenu />
                <div className="row">
                    <div className="recommendation-text">
                        <h4>Recommendations</h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <StandardClass />
                </div>

                <div className="row top-space">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 fadeIn-left">
                        <a href="">
                            <div className="question-screen">
                                <img className="img-fluid" src="../../../assets/frontend/images/background-schools.jpg" alt="" />
                                <span>Numbers and Count</span>
                                <Link className="" to={"/test"}>
                                    <button className="">try this..</button>
                                </Link>
                            </div>
                        </a>

                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <a href="">
                            <div className="question-screen">
                                <img className="img-fluid" src="../../../assets/frontend/images/certificate.jpg" alt="" />
                                <span>Count one to three</span>
                                <Link className="" to={"/test"}>
                                    <button className="">try this..</button>
                                </Link>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
