import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TopicsService from "../Services/TopicsService";
import { map } from "lodash";

export default function Topics() {

    let topicsservice = new TopicsService();
    // let standardId=window.location.pathname.split("/").pop();

    const [standardid, setStandardid] = useState();
    const [topics, setTopics] = useState();

    // useEffect(() => {
    //     subjecttopics();
    // }, []);


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
    //  console.log(formData);


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

    return (
        <div>
            {/*           
                {topics?.map((topic,k) => {
                    return(
                        <div key={`main-${k}`}>{topic.main_topic}
                            <ul>
                                
                                {topic.sub_topics?.map((topiclist,i)  => (
                                    
                                    <li key={`slide-${i}`}>{topiclist?.name}</li>
                                  
                                ))}
                            </ul>
                        </div>
                    )
                })}     */}

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