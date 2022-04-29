import React, { useState, useEffect } from "react";
import Navbar from "../../home/navbar";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import Footer from "../../home/footer";
import LearningMenu from "../LearningMenu";
import LearningService from "../../Services/LearningService";
import Helmet from "react-helmet"
import { config } from "app/config"
import NavbarMenus from "../../home/NavbarMenus";

export default function AwardsClasses() {
    let learningservice = new LearningService(config.baseURL);
    const [formData, setformData] = useState();
    useEffect(() => {
        getAwardData();
    }, []);

    const getAwardData = async () => {
        try {
            const data = await learningservice.getAwardDetails();
            if (data?.data?.status) {
                setformData(data?.data?.data);
            }

        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <Helmet>
                <title>KidzUni | Learning| Awards</title>
            </Helmet>
            <div className="container">
                <Navbar />
            </div>

            <NavbarMenus />
            <div className="container">
                <LearningMenu />
            </div>
            <div className="row awards-bg-img">
                <div className="awards-dec">
                    <h4>Awards!</h4>
                    <div className="awards-details">
                        <div className="practice-details">
                            <h6>You've Earned </h6>
                            <span>{formData?.total_medals} Medals</span>
                        </div>

                        <div className="practice-details">
                            <h6 >You've Mastered</h6>
                            <span>{formData?.total_medals} Skills</span>
                        </div>

                        <div className="practice-details">
                            <h6>You've Answered</h6>
                            <span>{formData?.total_question} Questions</span>
                        </div>
                        <div className="practice-details">
                            <h6>You've Practised for</h6>
                            <span>{formData?.time} hr</span>
                        </div>

                        <div className="practice-details">
                            <h6>Till Your next win</h6>
                            <span>{formData?.next_step} Skills</span>
                        </div>

                    </div>

                    <div className="award-btn">
                        <Link className="" to={"/home"}>
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