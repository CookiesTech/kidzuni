import React, { useState, useEffect } from "react";
import Footer from "../../home/footer";
import { Link } from "react-router-dom";
import Navbar from "../../home/navbar";
import "../../assets/css/style.css";
import { config } from "app/config";
import LearningMenu from "../LearningMenu";
import SubjectService from "../../Services/SubjectService";
import StandardService from "../../Services/StandardService";
import TopicsService from "../../Services/TopicsService";
import NavbarMenus from "../../home/NavbarMenus";

export default function Certificates() {

    // let subjectservice = new SubjectService(config.baseURL);
    // let standardservice = new StandardService(config.baseURL);

    let topicsservice = new TopicsService(config.baseURL);

    // const [standard = [], setStandard] = useState();
    // const [subject, setSubject] = useState();

    const [topics = [], setTopics] = useState();



    let certificate_info = JSON.parse(localStorage?.getItem?.('user-info'));


    console.log(certificate_info);

    useEffect(() => {
        // standardDtata();
        // subjectList();

        async function fetchMyAPI() {
            let data = { standard_id: 3, student_id: certificate_info?.id, country_code: certificate_info?.country_code }
            await await topicsservice.subjecttopics(data)
                .then((response) => {
                    if (response?.data.status) {

                        setTopics(response?.data.data.Topics);
                        console.log(response?.data.status);
                    }
                });
        }
        fetchMyAPI();

    }, []);


    // const standardDtata = async () => {    //standard classes
    //     try {
    //         const data = await subjectservice.standardDtata();

    //         setStandard(data.data.data);
    //     }
    //     catch (e) {
    //         console.log(e);
    //     }
    // }

    // const subjectList = async () => {   //subject lists
    //     try {
    //         const data = await standardservice.subjectList();

    //         console.log(data);
    //         setSubject(data.data.data);
    //     }
    //     catch (e) {
    //         console.log(e);
    //     }
    // }

    return (
        <div>
            <div className="container">
                <Navbar />
            </div>
            <NavbarMenus />
            <div className="container">
                <LearningMenu />

                {topics.length > 0 ? (

                    topics?.map((topic, k) => {
                        return (
                            <div className="row  top-space" key={`main-${k}`}>
                                <ol class="ol-cards">
                                    <li className="sub-list">
                                        <div class="icon"><img src="../../../assets/frontend/images/award-star.png" /></div>

                                        <div class="title"><span>You Have Achieved</span></div>
                                        {topic.sub_topics?.map((topiclist, i) => (

                                            <div class="descr sub-title" key={`slide-${i}`}><p><span>{topiclist?.name} |&nbsp;</span></p></div>
                                        ))}

                                        <div className="view-certificate">
                                            <button className="">View Certificate</button>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        )
                    })

                ) : (
                    <p>No Topics Found</p>
                )
                }
            </div>
            <Footer />
        </div>
    )
}