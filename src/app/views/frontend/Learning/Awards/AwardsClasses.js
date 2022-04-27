import React, { useState, useEffect } from "react";
import Navbar from "../../home/navbar";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import Footer from "../../home/footer";
import LearningMenu from "../LearningMenu";
import SubjectlistService from "../../Services/SubjectlistService";
import Helmet from "react-helmet"
import StandardClass from "../Classes"
import { config } from "app/config"
import NavbarMenus from "../../home/NavbarMenus";

export default function AwardsClasses() {
    let subjectlistservice = new SubjectlistService(config.baseURL);

    const [subject, setSubject] = useState();

    useEffect(() => {
        subjectList();
    }, []);


    let certificate_info = JSON.parse(localStorage?.getItem?.('user-info'));
    console.log(certificate_info);

    const subjectList = async () => {   //subject lists
        try {
            const data = await subjectlistservice.subjectlistdata();

            // console.log(data);
            setSubject(data.data.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <Helmet>
                <title>KidzUni | Learning Awards</title>
            </Helmet>
            <div className="container">
                <Navbar />
            </div>

            <NavbarMenus />
            <div className="container">
                <LearningMenu />

                <div className="row">
                    <div className="awards-prices">
                        {
                            subject?.map((subjectname, m) => (
                                <div className="subject-tab">
                                    <span><li><a href="">{subjectname.subject_name}&nbsp;|&nbsp;</a></li> </span>
                                </div>
                            ))
                        }

                        <Link className="" to={"certificates"}>
                            <a href="">Certificates</a>
                        </Link>
                    </div>

                    <div className="row">
                        <StandardClass />
                    </div>
                </div>
            </div>
            <div className="row awards-bg-img">
                <div class="awards-dec">
                    <h4>Awards!</h4>
                    <div className="awards-details">
                        <div class="practice-details">
                            <h6 class="details-label">You've Earned</h6>
                        </div>
                        <span><a href="">98 Medals</a></span>
                        <div class="practice-details">
                            <h6 class="details-label">You've Mastered</h6>
                            <span><a href="">154 Skills</a></span>
                        </div>

                        <div class="practice-details">
                            <h6 class="details-label">You've Answered</h6>
                            <span><a href="">2335 Questions</a></span>
                        </div>
                        <div class="practice-details">
                            <h6 class="details-label">You've Practised for</h6>
                            <span><a href="">hr</a></span>
                        </div>

                        <div class="practice-details">
                            <h6 class="details-label">Till Your next win</h6>
                            <span><a href="">77 Questions & 4 Skills</a></span>
                        </div>

                        {/* <tr class="practice-statistics-row">
                                <th class="stat-label">You've earned</th>
                                <span class="stat-content medal-content">236 medals</span>
                            </tr> */}
                    </div>

                    <div className="award-btn">
                        <Link className="" to={"/home/maths"}>
                            <button className="kidzuni-btn home-signin">Practise more</button>
                        </Link>
                    </div>
                </div>
                <div className="top-space"></div>
            </div>
            <Footer />
        </div >
    )
}