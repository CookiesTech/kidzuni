import React, { useState, useEffect } from "react";
import Navbar from "../home/navbar";
import "../assets/css/style.css";
import axios from "axios";
import { Link } from "react-router-dom";
import SubjectService from "../Services/SubjectService";
import TopicsService from "../Services/TopicsService";
import Footer from "../home/footer";
import { map } from "lodash";


export default function MathsSubject() {

    let topicsservice = new TopicsService();
    let subjectservice = new SubjectService();

    const [standard = [], setStandard] = useState();
    const [topics, setTopics] = useState();
    const [standardid, setStandardid] = useState();


    useEffect(() => {
        standardDtata();
        async function fetchMyAPI() {
            // console.log(standardId);
            await await topicsservice.subjecttopics()
                .then((response) => {
                    setStandardid({ standard_id: response.data })
                    setTopics(response?.data.Topics);
                });
        }
        fetchMyAPI();

    }, []);




    const standardDtata = async () => {    //standard classes
        try {
            const data = await subjectservice.standardDtata();

            setStandard(data.data.data);
        }
        catch (e) {
            console.log(e);
        }
    }


    const subjecttopics = async () => {    //parameter pass
        const standard = { standard_id: 6 }

        axios.post('http://feltech.in/kidzuni_backend/public/api/getTopics', standard)
            .then((response) => {
                setStandardid({ standard_id: response.data })

                setTopics(response?.data.Topics);
                //  console.log(response);
                // if(!response.ok) throw new Error(response);
                if (response.status !== 200) {
                    throw Error(response);
                }
                //   console.log(response);
            });
    }

    // console.log(topics);


    return (
        <div>
            <div className="container">
                <Navbar />
            </div>
            <section>
                <div class="wave wave1"></div>
                <div class="wave wave2"></div>
                <div class="wave wave3"></div>
                <div class="wave wave4"></div>


                <div className="container">
                    <div className="row  wave-spaces">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                            <div className=" flex-container">
                                {
                                    standard?.map((standardname, i) => (

                                        <div className="classes-maths ">
                                            <div class="course maths" tabindex="1">
                                                <div class="course-info">
                                                    {/* <span>Course</span> */}
                                                    <h5>Class {standardname.standard_name}</h5>

                                                </div>

                                                <div className="details-sub">
                                                    <h5>Class {standardname.standard_name}</h5>
                                                    {
                                                        topics?.map((topic, m) => (
                                                            <Link className="" to={"/test"}>
                                                                <span>&nbsp;{topic.main_topic}&nbsp;|</span>
                                                            </Link>

                                                        ))
                                                    }
                                                    <div className="continue-practice">
                                                        <button class="skill-btn">See all 44 Skills</button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                            <div className="side-bar">
                                <ul class="nav nav-pills brand-pills nav-stacked" role="tablist">
                                    <li role="presentation" class="brand-nav active">
                                        <a href="#tab1" aria-controls="tab1" role="tab" data-toggle="tab">BallBoy Tok</a>
                                    </li>
                                    <li role="presentation" class="brand-nav">
                                        <a href="#tab2" aria-controls="tab2" role="tab" data-toggle="tab">BallBoy Bubble</a>
                                    </li>
                                    <li role="presentation" class="brand-nav">
                                        <a href="#tab3" aria-controls="tab3" role="tab" data-toggle="tab">BallBoy Tok</a>
                                    </li>
                                    <li role="presentation" class="brand-nav">
                                        <a href="#tab4" aria-controls="tab4" role="tab" data-toggle="tab">BallBoy Bubble</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}