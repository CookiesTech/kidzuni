import React, { useState, useEffect } from "react";
import Navbar from "../home/navbar";
import LearningMenu from "./LearningMenu";
import "../assets/css/style.css";
import LearningService from "../Services/LearningService";
import Footer from "../home/footer";
import Helmet from "react-helmet"
import "../assets/css/style.css"
import NavbarMenus from "../home/NavbarMenus";
import { config } from "app/config"
import { Link } from "react-router-dom";

export default function MathsSubject() {
    let topicsservice = new LearningService(config.baseURL);
    const [formData = [], setformData] = useState()
    let userData = JSON.parse(localStorage?.getItem?.('user-info'));
    useEffect(() => {
        async function getLearningStandardMaths() {
            let postData = { country_code: userData?.country_code }
            await topicsservice.getLearningStandardMaths(postData)
                .then((response) => {
                    if (response?.data?.status) {
                        setformData(response.data?.data)
                    }

                });
        }
        getLearningStandardMaths();

    }, []);



    return (
        <div>
            <Helmet>
                <title>KidzUni | Learning| Maths</title>
            </Helmet>
            <div className="container">
                <Navbar />
            </div>
            <NavbarMenus />

            <div className="container">
                <LearningMenu />
            </div>

            <section>
                <div class="wave wave1"></div>
                <div class="wave wave2"></div>
                <div class="wave wave3"></div>
                <div class="wave wave4"></div>

                <div className="container">

                    <div className="wave-spaces">
                        {
                            formData?.map((data, i) => (
                                <div className="classes-maths ">
                                    <div class="course maths">
                                        <div class="course-info">
                                            {/* <span>Course</span> */}
                                            <h5>{data.standard_name}</h5>
                                        </div>
                                        <h6>{data.standard_name}</h6>
                                        <div className="details-sub">

                                            {
                                                data?.topics.map((sub_topic, m) => (
                                                    <Link className="" to={"/test-" + sub_topic.standard_id}>
                                                        <span>&nbsp;{sub_topic.name}&nbsp;|</span>
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                        <div className="continue-practice">
                                            <Link className="" to={"/standard-" + data.id}>
                                                < button class="skill-btn">See all</button>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </section >

            <Footer />
        </div >
    )
}