import React, { useEffect, useState } from "react";
<<<<<<< HEAD
export default function Courses(props) {
    //console.log(props);
=======
import { Link } from "react-router-dom";
import StandardService from "../Services/StandardService";
import { config } from '../../../config'
export default function Courses(props) {

    console.log(props);
>>>>>>> fb545099792ff2d12b04c2dcb78154208481ec68
    const [formdata = [], setformdata] = useState();
    useEffect(() => {
        fetchData();
    }, [props]);



    const fetchData = async () => {
        setformdata(props.data);
<<<<<<< HEAD
=======

>>>>>>> fb545099792ff2d12b04c2dcb78154208481ec68
    }

    return (
        <div>
            <div className="row grade-title">
                <h3>Explore Courses</h3>
            </div>

            {formdata.length > 0 ? (
                <div className="row class-sec-part">
                    {
                        formdata?.map((data, i) => (

                            < div className="col-xl-4 col-lg-4 col-md-6 col-sm-4" >

                                <div className="member grade-sec">
                                    <div className="section-box">
                                        <div className="class-tab-box"><span></span></div>
                                    </div>
                                    <div class="member-info">
                                        <h3>{data?.standard_name}</h3>
                                        <p>{data?.description.substring(0, 90)}...</p>
                                        <hr />
<<<<<<< HEAD
                                        {/* {data?.subjects ? (
=======
                                        {data?.subjects?.subjects ? (
>>>>>>> fb545099792ff2d12b04c2dcb78154208481ec68
                                            <div className="">
                                                <span className="subject-skills">
                                                    <li>
                                                        <div className="subject-info">
                                                            {
                                                                data?.subjects?.subjects?.map((subjectname, i) => (
                                                                    <div>
                                                                        <h6>{subjectname.subject_name}</h6>
                                                                        <Link className="nav-link" to={"/standard-" + data.standard_name}>
                                                                            <span className="nav-link" href="">{subjectname.count} Expertise {'>'}</span>
                                                                        </Link>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </li>
                                                </span>
                                                <div className="explore-detail">
                                                    <Link className="nav-link" to={`/standard-${data?.standard_name}`}>
                                                        <a className="nav-link" href="#!">Explore Details..</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        ) : (
<<<<<<< HEAD
                                            <h5>No Topics Found</h5>
                                        )} */}
=======
                                            <h6>No Topics Found</h6>
                                        )}
>>>>>>> fb545099792ff2d12b04c2dcb78154208481ec68
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            ) : (
                <h4>Data Not Found</h4>
            )
            }
        </div >
    )
}