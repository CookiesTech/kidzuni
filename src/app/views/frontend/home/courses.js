import React from "react";
import { Link } from "react-router-dom";

export default function Courses() {
    return (
        <div >
            <div className="row grade-title">
                <h3>Explore Courses</h3>
            </div>
            <div className="row class-sec-part">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="member grade-sec">
                        <div className="section-box">
                            <div className="class-tab-box"><span>L</span></div>
                        </div>
                        <div class="member-info">
                            <h3>LKG</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                            <hr />
                            <span className="subject-skills">
                                <li>
                                    <h6>Maths</h6>
                                    <Link className="nav-link" to={"/standard-Lkg"}>
                                        <a className="nav-link" href="">44 Expertise {'>'}</a>
                                    </Link>
                                    
                                </li>
                            </span>

                            <div className="explore-detail">
                                <Link className="nav-link" to="/standard-Lkg">
                                    <a className="nav-link" href="">Explore Details..</a>
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="member grade-sec">
                        <div className="section-box">
                            <div className="class-tab-box"><span>U</span></div>

                        </div>
                        <div className="member-info">
                            <h3>UKG</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                            <hr />
                            <span className="subject-skills">
                                <li>
                                    <h6>Maths</h6>
                                    <Link className="nav-link" to={"/Lkg"}>
                                        <a className="nav-link" href="">52 Expertise {'>'}</a>
                                    </Link>
                                </li>
                            </span>
                            <div className="explore-detail">
                                <Link className="nav-link" to={"/Lkg"}>
                                    <a className="nav-link" href="">Explore Details..</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="member grade-sec">
                        <div className="section-box">
                            <div className="class-tab-box"><span>I</span></div>
                        </div>
                        <div className="member-info">
                            <h3>Class I</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                            <hr />
                            <span className="subject-skills">
                                <li>
                                    <h6>Maths</h6>
                                    <a className="nav-link" href="class-i.html">48 Expertise {'>'}</a>
                                </li>
                            </span>
                            <div className="explore-detail">
                                <a className="nav-link" href="class-i.html">Explore Details..</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row class-sec-part">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="member grade-sec">
                        <div className="section-box">
                            <div className="class-tab-box"><span>II</span></div>
                        </div>
                        <div className="member-info">
                            <h3>Class II</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                            <hr />
                            <span className="subject-skills">
                                <li>
                                    <h6>Maths</h6>
                                    <a className="nav-link" href="class-ii.html">44 Expertise {'>'}</a>
                                </li>
                            </span>

                            <div className="explore-detail">
                                <a className="nav-link" href="class-ii.html">Explore Details..</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="member grade-sec">
                        <div className="section-box">
                            <div className="class-tab-box"><span>III</span></div>

                        </div>
                        <div className="member-info">
                            <h3>Class III</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                            <hr />
                            <span className="subject-skills">
                                <li>
                                    <h6>Maths</h6>
                                    <a className="nav-link" href="class-iii.html">52 Expertise {'>'}</a>
                                </li>
                            </span>
                            <div className="explore-detail">
                                <a className="nav-link" href="class-iii.html">Explore Details..</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="member grade-sec">
                        <div className="section-box">
                            <div className="class-tab-box"><span>IV</span></div>
                        </div>
                        <div className="member-info">
                            <h3>Class IV</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                            <hr />
                            <span className="subject-skills">
                                <li>
                                    <h6>Maths</h6>
                                    <a className="nav-link" href="class-iv.html">48 Expertise {'>'}</a>
                                </li>
                            </span>
                            <div className="explore-detail">
                                <a className="nav-link" href="class-iv.html">Explore Details..</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row class-sec-part">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="member grade-sec">
                        <div className="section-box">
                            <div className="class-tab-box"><span>V</span></div>
                        </div>
                        <div className="member-info">
                            <h3>Class V</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                            <hr />
                            <span className="subject-skills">
                                <li>
                                    <h6>Maths</h6>
                                    <a className="nav-link" href="class-v.html">44 Expertise {'>'}</a>
                                </li>
                            </span>

                            <div className="explore-detail">
                                <a className="nav-link" href="class-v.html">Explore Details..</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="member grade-sec">
                        <div className="section-box">
                            <div className="class-tab-box"><span>VI</span></div>

                        </div>
                        <div className="member-info">
                            <h3>Class VI</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                            <hr />
                            <span className="subject-skills">
                                <li>
                                    <h6>Maths</h6>
                                    <a className="nav-link" href="subjectpattern.html">52 Expertise {'>'}</a>
                                </li>
                            </span>
                            <div className="explore-detail">
                                <a className="nav-link" href="class-vi.html">Explore Details..</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="member grade-sec">
                        <div className="section-box">
                            <div className="class-tab-box"><span>VII</span></div>
                        </div>
                        <div className="member-info">
                            <h3>Class VII</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                            <hr />
                            <span className="subject-skills">
                                <li>
                                    <h6>Maths</h6>
                                    <a className="nav-link" href="subjectpattern.html">48 Expertise {'>'}</a>
                                </li>
                            </span>
                            <div className="explore-detail">
                                <a className="nav-link">Explore Details..</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row class-sec-part">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="member grade-sec">
                        <div className="section-box">
                            <div className="class-tab-box"><span>VIII</span></div>
                        </div>
                        <div className="member-info">
                            <h3>Class VIII</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                            <hr />
                            <span className="subject-skills">
                                <li>
                                    <h6>Maths</h6>
                                    <a className="nav-link" href="subjectpattern.html">44 Expertise {'>'}</a>
                                </li>
                            </span>

                            <div className="explore-detail">
                                <a className="nav-link">Explore Details..</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="member grade-sec">
                        <div className="section-box">
                            <div className="class-tab-box"><span>IX</span></div>

                        </div>
                        <div className="member-info">
                            <h3>Class IX</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                            <hr />
                            <span className="subject-skills">
                                <li>
                                    <h6>Maths</h6>
                                    <a className="nav-link" href="subjectpattern.html">52 Expertise {'>'}</a>
                                </li>
                            </span>
                            <div className="explore-detail">
                                <a className="nav-link">Explore Details..</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="member grade-sec">
                        <div className="section-box">
                            <div className="class-tab-box"><span>X</span></div>
                        </div>
                        <div className="member-info">
                            <h3>Class X</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                            <hr />
                            <span className="subject-skills">
                                <li>
                                    <h6>Maths</h6>
                                    <a className="nav-link" href="subjectpattern.html">48 Expertise {'>'}</a>
                                </li>
                            </span>
                            <div className="explore-detail">
                                <a className="nav-link">Explore Details..</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="member grade-sec">
                        <div className="section-box">
                            <div className="class-tab-box"><span>XI</span></div>
                        </div>
                        <div className="member-info">
                            <h3>Class XI</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                            <hr />
                            <span className="subject-skills">
                                <li>
                                    <h6>Maths</h6>
                                    <a className="nav-link" href="subjectpattern.html">44 Expertise {'>'}</a>
                                </li>
                            </span>

                            <div className="explore-detail">
                                <a className="nav-link">Explore Details..</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="member grade-sec">
                        <div className="section-box">
                            <div className="class-tab-box"><span>XII</span></div>

                        </div>
                        <div className="member-info">
                            <h3>Class XII</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                            <hr />
                            <span className="subject-skills">
                                <li>
                                    <h6>Maths</h6>
                                    <a className="nav-link" href="subjectpattern.html">52 Expertise {'>'}</a>
                                </li>
                            </span>
                            <div className="explore-detail">
                                <a className="nav-link">Explore Details..</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}