import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { config } from "app/config";
import TopicsService from "../Services/TopicsService";
export default function Topics() {
    let topicsservice = new TopicsService(config.baseURL);
    const [topics, setTopics] = useState();

    useEffect(() => {

        async function fetchMyAPI() {
            await await topicsservice.subjecttopics()
                .then((response) => {
                    setTopics(response?.data.data.Topics);
                });
        }
        fetchMyAPI();
    }, []);

    return (
        <div>
            <div className="main-content">
                <div className="row">
                    <div className="lkg-sec">
                        <div className="lkg-title">
                            <h2>Lower Kindergarden Maths</h2>
                            <p>Here is a list of all of the maths skills students learn in LKG! These skills are organised into categories,
                                and you can move your mouse over any skill name to preview the skill. To start practising, just click on any link.
                                Kidzuni will track your score, and the questions will automatically increase in difficulty as you improve!</p>
                        </div>
                        <hr />
                    </div>


                    {topics?.map((topic, k) => {
                        return (
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 topics-types" key={`main-${k}`}>
                                <h5>{topic.main_topic}</h5>
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
                </div>
                <div className="top-space"></div>
            </div>
        </div>
    )
}
