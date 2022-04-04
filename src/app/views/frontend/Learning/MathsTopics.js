import React from "react";
import Navbar from "../home/navbar";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import TopicsService from "../Services/TopicsService";
import "../assets/css/style.css";
import Footer from "../home/footer";
import LearningMenu from "./LearningMenu";


export default function MathsTopics() {

    let topicsservice = new TopicsService();

    const [standardid, setStandardid] = useState();
    const [topics, setTopics] = useState();
    const [topic, setTopic] = useState();


    useEffect(() => {
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



    return (
        <div>
            <div className="container">

                <Navbar />
                <LearningMenu />

                <div className="view-part">
                    <span>View by :&nbsp;
                        <NavLink to={'/home/maths'}>
                            <a className="">Years</a>
                        </NavLink>&nbsp;
                        &nbsp;
                        <NavLink to={'/home/maths/topics'}>
                            <a className="">Topics</a>
                        </NavLink></span>
                </div>
                <div className="topics-maths">
                    {
                        topics?.map((topic, i) => (

                            <div className="sub-topics">
                                {topic ? (

                                    <div className="topic-one">

                                        <div class="title">{topic.main_topic}</div>
                                        {
                                            topic.sub_topics?.map((topiclist, m) => (
                                                <Link className="nav-link" to="/test">
                                                    {
                                                        topiclist.name.length > 0 ? (
                                                            <span class="descr">&nbsp;{topiclist.name}&nbsp;|</span>
                                                        ) : (

                                                            <h4>Data Not Found</h4>
                                                        )}


                                                </Link>

                                            ))
                                        }

                                        <div className="sub-topicSkills">
                                            <button>See all skills</button>
                                        </div>

                                    </div>
                                ) : (
                                    <h4>Data Not Found</h4>
                                )}

                                {/* 
                                <li className="topic-two">
                                    <div class="icon"><i class="fa-brands fa-html5"></i></div>
                                    <div class="title">n,j</div>
                                    <div class="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                </li>
                                <li className="topic-three">
                                    <div class="icon"><i class="fa-brands fa-css3"></i></div>
                                    <div class="title">CSS 3</div>
                                    <div class="descr">Lorem ipsum dolor sit.</div>
                                </li> */}

                            </div>

                        ))
                    }
                </div>

            </div>
            <Footer />
        </div>
    )
}