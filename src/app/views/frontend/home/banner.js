import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <div>
            {/* <div className="row">
                <div className="category-list">
                    <div className="learning-type">
                        <span>Learning</span>
                    </div>
                    <div className="diagnostic-type">
                        <span>Diagnostic</span>
                    </div>
                    <div className="analytics-type">
                        <span>Analytics</span>
                    </div>
                </div>
            </div> */}

            <div className="row home-banner">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="learn-section">
                        <div className="sub-maths">
                            <span className="curriculam-maths">
                                <h4>Kidzuni is Personalised Learning</h4>
                            </span>
                            <img className="" src="assets/frontend/images/c1.png" alt="cloud" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 hide-div">
                    <div className="sub-section">
                        <div className="sub-maths">
                            <span className="curriculam-maths">
                                <h4>Comperhensive Curriculam</h4>
                                <a>Maths</a>
                                <i className="fa fa-chevron-down"></i>
                            </span>
                            <img className="" src="assets/frontend/images/c1.png" alt="cloud" />
                        </div>
                    </div>

                </div>

                <button className="btn btn-success member-btn">
                    <Link className="" to={'/home/membership'}>
                        Become a Member!
                    </Link>
                </button>


            </div>

            <div className="row top-space unique-title">
                <h3>What's Unique with Kidzuni</h3>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 unique-part">
                                <div className="practice-content">
                                    <img src="assets/frontend/images/practice.png" /> &nbsp;
                                    <h5> Practice Till Perfection</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua.</p>
                                </div>

                                <div className="exam-content">
                                    <img src="assets/frontend/images/test.png" /> &nbsp;
                                    <h5> Test to Get Exam Ready</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua.</p>
                                </div>


                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 unique-part">

                                <div className="curriculam-content">
                                    <img src="assets/frontend/images/target.png" />
                                    <h5>Curriculam Mapped Learning</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua.</p>
                                </div>

                                <div className="summary-content">
                                    <img src="assets/frontend/images/summary.png" /> &nbsp;
                                    <h5> Summary</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <div className="unique-success">
                            <img className="img-fluid" src="assets/frontend/images/success-concept-1.jpg" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}