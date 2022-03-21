import React, { useState, useEffect } from "react";
import Footer from "../../home/footer";
import { Link } from "react-router-dom";
import Navbar from "../../home/navbar";
import "../../assets/css/style.css";
import LearningMenu from "../LearningMenu";
import SubjectService from "../../Services/SubjectService";
import StandardService from "../../Services/StandardService";
import TopicsService from "../../Services/TopicsService";
import NavbarMenus from "../../home/NavbarMenus";

export default function Certificates() {

    let subjectservice = new SubjectService();
    let standardservice = new StandardService();

    let topicsservice = new TopicsService();

    const [standard = [], setStandard] = useState();
    const [subject, setSubject] = useState();

    const [topics, setTopics] = useState();


    useEffect(() => {
        standardDtata();
        subjectList();

        async function fetchMyAPI() {
            // console.log(standardId);
            await await topicsservice.subjecttopics()
                .then((response) => {

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
            </div>
            <NavbarMenus />
            <div className="container">
                <LearningMenu />


                {topics?.map((topic, k) => {
                    return (
                        <div className="row  top-space" key={`main-${k}`}>
                            <ol class="ol-cards">
                                <li className="sub-list">
                                    <div class="icon"><i class="fa-brands fa-codepen"></i></div>

                                    <div class="title"><span>You Have Achieved</span></div>
                                    {topic.sub_topics?.map((topiclist, i) => (

                                        <div class="descr sub-title" key={`slide-${i}`}><span>{topiclist?.name} | </span></div>
                                    ))}

                                    <div className="view-certificate">
                                        <button className="">View Certificate</button>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}