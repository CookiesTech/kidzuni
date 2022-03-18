import React, { useState, useEffect } from "react";
import Navbar from "../../home/navbar";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import Footer from "../../home/footer";
import LearningMenu from "../LearningMenu";
import StandardService from "../../Services/StandardService";
import { Subject } from "@mui/icons-material";
import StandardClass from "../Classes"



export default function AwardsClasses() {


    let standardservice = new StandardService();


    const [subject, setSubject] = useState();

    useEffect(() => {

        subjectList();
    }, []);



    const subjectList = async () => {   //subject lists
        try {
            const data = await standardservice.subjectList();

            console.log(data);
            setSubject(data.data.data);
        }
        catch (e) {
            console.log(e);
        }
    }


    return (
        <div>
            <div className="container">
                <Navbar />
                <LearningMenu />

                <div className="row">
                    <div className="awards-prices">
                        {
                            subject?.map((subjectname, m) => (
                                <div className="subject-tab">
                                    <span><a href="">{subjectname.subject_name}|</a></span>
                                    &nbsp;<span><a href="">English |</a></span>
                                    &nbsp;<span>
                                        <Link className="" to={"certificates"}>
                                            <a href="">Certificates</a>
                                        </Link>
                                    </span>

                                </div>
                            ))
                        }

                    </div>
                </div>


                <div className="row">
                    <StandardClass />
                </div>

                <div className="row">
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

                    </div>
                </div>
                <div className="award-btn">
                    <Link className="" to={"/standard"}>
                        <button className="kidzuni-btn home-signin">Practise more</button>
                    </Link>

                </div>


            </div>


            <Footer />
        </div >
    )
}