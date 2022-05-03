import React, { useState, useEffect } from "react"
import Footer from "../home/footer"
import Navbar from "../home/navbar"
import { Link } from "react-router-dom"
import NavbarMenus from "../home/NavbarMenus"
import Helmet from "react-helmet"
import StandardClass from "./Classes"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LearningMenu from "./LearningMenu"
import StandardService from "../Services/StandardService"
import { config } from "app/config"
import ErrorMessageShow from "../Error/Errormsg"
import { useNavigate } from "react-router-dom"
toast.configure();
export default function Recommendation() {
    const navigate = useNavigate();
    let userData = JSON.parse(localStorage?.getItem?.('user-info'));
    let standardservice = new StandardService(config.baseURL)
    const [formData = [], setformData] = useState();
    useEffect(() => {
        if (userData !== null) {
            fetchRecommendation()
        }
    }, []);

    const fetchRecommendation = async (id) => {
        let postData = { country_code: userData?.country_code };
        const data = await standardservice.getRecommendationData(postData);
        if (data.data.status) {
            setformData(data.data.data);
        }
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
                userData !== null ? (<div className="container">
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

                    {/* <div className="row">
                        <StandardClass data={standard} />
                    </div> */}

                    <div className="row top-space">
                        {
                            formData.length > 0 ? (
                                formData?.map((value, i) => (

                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 fadeIn-left">
                                        <a href="">
                                            <div className="question-screen">
                                                <img className="img-fluid" src={value?.question_image} width={500} alt="" />
                                                <br /> <span>{value?.question_text}</span>
                                                <Link className="" to={"/test-" + value.standard_id}>
                                                    <button className="">try this..</button>
                                                </Link>
                                            </div>
                                        </a>

                                    </div>
                                ))) : (<p>No Data Found</p>)}

                    </div>
                </div>) : (<p className="container"><br />
                    <div>
                        <ErrorMessageShow />
                    </div>
                </p>)
            }
            <Footer />
        </div>
    )
}
