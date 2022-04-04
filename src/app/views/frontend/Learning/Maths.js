import React, { useState, useEffect } from "react";
import Navbar from "../home/navbar";
import LearningMenu from "./LearningMenu";
import "../assets/css/style.css";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import SubjectService from "../Services/SubjectService";
import TopicsService from "../Services/TopicsService";
import Footer from "../home/footer";
import "../assets/css/style.css"
import NavbarMenus from "../home/NavbarMenus";


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
                    <div className="view-part">
                        <span>View by :&nbsp;
                            <NavLink activeClassName="active" to={"/home/maths"}>
                                <a className="">Years</a>
                            </NavLink>&nbsp;
                            &nbsp;
                            <NavLink activeClassName="active" exact to={'/home/maths/topics'}>
                                <a className="">Topics</a>
                            </NavLink></span>
                    </div>
                    <div className="wave-spaces">
                        {
                            standard?.map((standardname, i) => (
                                <div className="classes-maths ">
                                    <div class="course maths">
                                        <div class="course-info">
                                            {/* <span>Course</span> */}
                                            <h5>{standardname.standard_name}</h5>
                                        </div>
                                        <h6>{standardname.standard_name}</h6>
                                        <div className="details-sub">

                                            {
                                                topics?.map((topic, m) => (
                                                    <Link className="" to={"/test"}>
                                                        <span>&nbsp;{topic.main_topic}&nbsp;|</span>
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                        <div className="continue-practice">
                                            <Link className="" to={"standard-LKG"}>
                                                < button class="skill-btn">See all 44 Skills</button>
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