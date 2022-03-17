import React, { useState, useEffect } from "react";
import Footer from "../../home/footer";
import { Link } from "react-router-dom";
import Navbar from "../../home/navbar";
import "../../assets/css/style.css";
import LearningMenu from "../LearningMenu";
import SubjectService from "../../Services/SubjectService";
import StandardService from "../../Services/StandardService";
import TopicsService from "../../Services/TopicsService";

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
                <div className="row  sub-bg-color">
                    <div className="class-year">
                        {
                            standard?.map((standradname, i) => (
                                <span><a href="">Class {standradname.standard_name} | </a></span>
                            ))
                        }
                    </div>

                </div>

                {topics?.map((topic, k) => {


                    return (
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 topics-types" key={`main-${k}`}>

                            <div className="sub-list">
                                {topic.sub_topics?.map((topiclist, i) => (
                                    <Link className="nav-link" to={'/test'}>
                                        <li key={`slide-${i}`}>{topiclist?.name}</li>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )
                })}


                <div className="row  top-space">

                    <ol class="ol-cards">

                        <li >
                            <div class="icon"><i class="fa-brands fa-codepen"></i></div>
                            <div class="title">You Have Achieved</div>
                            <div class="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Aperiam voluptatum doloribus ea harum numquam iste non pariatur placeat cum maiores!</div>
                            <div className="view-certificate">
                                <button className="">View Certificate</button>
                            </div>
                        </li>
                        <li>
                            <div class="icon"><i class="fa-brands fa-html5"></i></div>
                            <div class="title">Lorem Ipsum</div>
                            <div class="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatum doloribus ea harum numquam iste non pariatur placeat cum maiores!</div>
                        </li>
                        <li >
                            <div class="icon"><i class="fa-brands fa-css3"></i></div>
                            <div class="title">Lorem Ipsum</div>
                            <div class="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatum doloribus ea harum numquam iste non pariatur placeat cum maiores!</div>
                        </li>
                    </ol>
                </div>

            </div>
            <Footer />
        </div>
    )
}