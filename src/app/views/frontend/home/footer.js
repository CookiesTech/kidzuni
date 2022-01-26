import React from "react";

export default function Footer() {
    return (
        <div>
            <div className="">
                <div className="footer">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                            <div className="footer-logo">
                                <img src="assets/frontend/images/ct-logo.png" />
                                <p>Kidzuni is an immersive learning experience that provides comprehensive,
                                    curriculum-aligned Maths content for LKG to class XII. </p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 foot-text">
                            <div className="foot-submenu">
                                <h6>What We Offer</h6>
                                <p>Membership</p>
                                <p>Maths</p>
                                <p>Curriculam</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 foot-text">
                            <div className="foot-submenu source">
                                <h6>Resources</h6>
                                <p>Help Center</p>
                                <p>User Guides</p>
                                <p>Contact Us</p>
                            </div>
                            <div className="footer-icons">
                                <i className="fa fa-facebook-f"></i>
                                <i className="fa fa-instagram"></i>
                                <i className="fa fa-twitter"></i>
                                <i className="fa fa-youtube"></i>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 foot-text">
                            <div className="foot-submenu about">
                                <h6>About</h6>
                                <p>Company</p>
                                <p>Careers</p>
                                <p>Terms of Service</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <p className="copyright">Kidzuni@2022 All rights reserved</p>
                    </div>
                </div>

            </div>
        </div>
    )
}