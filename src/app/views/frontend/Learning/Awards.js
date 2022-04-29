import React from "react"
import Footer from "../home/footer"
import Navbar from "../home/navbar"
import LearningMenu from "./LearningMenu"

export default function Awards() {
    return (
        <div>
            <div className="container">
                <Navbar />
                <LearningMenu />

                <div className="top-space"></div>
                <div className="title">
                    <h2>Kidzuni Awards</h2>
                </div>

                <div className="row top-space center-title">
                    <h4>Knowledge isn't the only reward on Kidzuni</h4>
                    <div className="col-lg-7 col-md-7 col-xs-7 col-sm-7">

                        <div className="knowledge-sec">

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-5 col-xs-5 col-sm-5">
                        <img className="img-fluid" src="../assets/frontend/images/development.jpg" alt="..." />
                    </div>
                </div>

                <div className="top-space"></div>
                <div className="hr-line">
                    <hr />
                </div>

                <div className="row top-space">
                    <div className="col-lg-5 col-md-5 col-xs-5 col-sm-5">
                        <img className="img-fluid" src="../assets/frontend/images/treasure-box.jpg" alt="..." />
                    </div>

                    <div className="col-lg-7 col-md-7 col-xs-7 col-sm-7">
                        <div className="uncover-sec">
                            <h4>Uncover hidden treasures</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                </div>

                <div className="top-space"></div>
                <div className="hr-line">
                    <hr />
                </div>

                <div className="row top-space">
                    <div className="col-lg-7 col-md-7 col-xs-7 col-sm-7">
                        <div className="achievement-sec">
                            <h4>Show of your Achievement</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-5 col-xs-5 col-sm-5">
                        <img className="img-fluid" src="../assets/frontend/images/certificate.jpg" alt="..." />
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}