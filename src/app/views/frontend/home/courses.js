import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StandardService from "../Services/StandardService";
import SubjectService from "../Services/SubjectService";
import axios from "axios";

export default function Courses() {

    let standardservice = new StandardService();
    let subjectservice = new SubjectService();
    
    const [standard = [], setStandard] = useState();
    const [subject, setSubject] = useState();

   
    useEffect(() => {
        standardDtata();
        subjectList();
    }, []);

 

    // const subjectList = async () => {
    //     const { data } = await axios.get(
    //       "http://feltech.in/kidzuni_backend/public/api/getAllSubjects"
    //     );
    //     console.log(data);
    // };

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

                                                

    const standardDtata = async () => {    //standard classes
        try {
            const data = await subjectservice.standardDtata();

            setStandard(data.data.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div >
            <div className="row grade-title">
                <h3>Explore Courses</h3>
            </div>
            {standard.length > 0 ? (
                <div className="row class-sec-part">
                    {
                        standard?.map((standardname, i) => (
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <div className="member grade-sec">
                                    <div className="section-box">
                                        <div className="class-tab-box"><span>{standardname.standard_name}</span></div>
                                    </div>
                                    <div class="member-info">
                                        <h3>Class {standardname.standard_name}</h3>

                                        <p>{standardname.description}</p>
                                        <hr />

                                        {subject ? (
                                            <div className="nkjh">
                                                <span className="subject-skills">
                                                    <li>
                                                        {
                                                            subject?.map((subjectname, i) => (
                                                                <h6>{subjectname.subject_name}</h6>
                                                            ))
                                                        }
                                                        <Link className="nav-link" to={"/standard-Lkg"}>
                                                            <a className="nav-link" href="">44 Expertise {'>'}</a>
                                                        </Link>
                                                    </li>

                                                </span>
                                                <div className="explore-detail">

                                                    <Link className="nav-link" to="/standard-Lkg">
                                                        <a className="nav-link" href="">Explore Details..</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        ) : (
                                            <h5>No Topics Found</h5>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            ) : (
                <h4>Data Not Found</h4>
            )}
        </div>
    )
}