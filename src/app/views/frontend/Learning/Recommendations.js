import React, { useState, useEffect } from "react"
import Footer from "../home/footer"
import Navbar from "../home/navbar"
import { Link } from "react-router-dom"
import NavbarMenus from "../home/NavbarMenus"
import Helmet from "react-helmet"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LearningMenu from "./LearningMenu"
import StandardService from "../Services/StandardService"
import LearningService from "../Services/LearningService";
import { config } from "app/config"
toast.configure();
export default function Recommendation() {
    let userData = JSON.parse(localStorage?.getItem?.('user-info'));
    let standardservice = new StandardService(config.baseURL)
    let learningservice = new LearningService(config.baseURL);
    const [formData = [], setformData] = useState();
    const [standard_Data = [], setStandardData] = useState();
    useEffect(() => {
        if (userData !== null && userData?.role == 5) {
            fetchRecommendation()
        } else {
            getLearningStandardMaths()
        }
    }, []);

    const fetchRecommendation = async (id) => {
        let postData = { country_code: userData?.country_code };
        const data = await standardservice.getRecommendationData(postData);
        if (data.data.status) {
            setformData(data.data.data);
        }
    }

    const getLearningStandardMaths = async () => {
        await learningservice.getLearningStandardMaths({ country_code: 6 })
            .then((response) => {
                if (response?.data?.status) {
                    setStandardData(response.data?.data)
                }

            });
    }

    return (
        <div>
            <Helmet>
                <title>KidzUni  | Learning Recommendation</title>
            </Helmet>
            <div className="container">
                <Navbar />
            </div>
            <NavbarMenus />
            {
                userData?.role == 5 ? (
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


                        <div className="row top-space">
                            {
                                formData.length > 0 ? (
                                    formData?.map((value, i) => (

                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 fadeIn-left">
                                            <a href="">
                                                <div className="question-screen">
                                                    <img className="img-fluid" src={value?.question_image} width={500} alt="" />
                                                    <br /> <span>{value?.question_text}</span>
                                                    <Link className="" to={"/test-" + value.id}>
                                                        <button className="">try this..</button>
                                                    </Link>
                                                </div>
                                            </a>

                                        </div>
                                    ))) : (<p>No Data Found</p>)}

                        </div>
                    </div>) : (


                    <div className="wave-spaces">
                        {
                            standard_Data?.map((data, i) => (
                                <div className="classes-maths ">
                                    <div class="course maths">
                                        <div class="course-info">
                                            {/* <span>Course</span> */}
                                            <h5>{data.standard_name}</h5>
                                        </div>
                                        {/* <h6>{data.standard_name}</h6> */}
                                        <div className="details-sub">

                                            {
                                                data?.topics.map((sub_topic, m) => (
                                                    <Link className="" to={"/test-" + sub_topic.id}>
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
                )
            }
            <Footer />
        </div>
    )
}
