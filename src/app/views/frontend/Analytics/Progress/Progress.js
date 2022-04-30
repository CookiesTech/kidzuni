import React, { useState, useEffect } from "react";
import Footer from "../../home/footer";
import { Link } from "react-router-dom";
import NavbarMenus from "../../home/NavbarMenus";
import { Helmet } from "react-helmet";
import Navbar from "../../home/navbar";
import AnalyticsMenu from "../AnalyticsMenus";
import AnalyticsService from '../../Services/AnalyticsService'
import { config } from 'app/config';

export default function Progress() {
    let analysticsservice = new AnalyticsService(config.baseURL);
    const [formData = [], SetFormData] = useState();
    useEffect(() => {
        fetchProgress();
    }, []);
    const fetchProgress = async () => {
        await analysticsservice.analysticsProgress().then((res) => {
            if (res.data.status) {
                SetFormData(res.data.data);
            }
        })
    }
    return (
        <div>
            <Helmet>
                <title>KidzUni | Analytics Progress</title>
            </Helmet>
            <div className="container">
                <Navbar />
            </div>
            <NavbarMenus />
            <div className="container">
                <AnalyticsMenu />

                <div className="row usage-select-sec">
                    <div className="usage-detail" >
                        <span>Subjects :</span>&nbsp;
                        <select>
                            <option>All Subjects</option>
                            <option> Maths </option>
                            <option> English </option>
                        </select>&nbsp;

                        <span>Standard :</span>&nbsp;
                        <select>
                            <option>All Standard</option>
                            <option> Class I </option>
                            <option> Class II </option>
                            <option> Class III </option>
                            <option> Class IV </option>
                            <option> Class V </option>
                            <option> Class VI </option>
                        </select>&nbsp;

                        <span>Date Range :</span>&nbsp;
                        <select>
                            <option>This Month</option>
                            <option> Yesterday </option>
                            <option> Last Week </option>
                        </select>
                    </div>
                </div>

                <div className="row top-space">
                    <div className="progress-title">
                        <h3>PROGRESS IMPROVEMENT</h3>
                    </div>
                </div>

                <div className="row  kidz-progress-details">
                    <table class="table">
                        <tr>
                            <th scope="col">Skills</th>
                            <th scope="col">Time Spent</th>
                            <th scope="col">Questions</th>
                            <th scope="col">Score Imporvement</th>
                        </tr>
                        {
                            formData.length > 0 ? (
                                formData.map((data, i) => (
                                    <tr class={`key-${i}`}>

                                        <td> <Link className="" to={'/analytics/questions-log-' + data?.subcategory_id}> {data?.name}</Link></td>
                                        <td>{data?.time_spent}</td>
                                        <td>{data?.total_attn}</td>
                                        <td>
                                            <div className="kidz-progress-level">
                                                <progress max="100" value={data?.score}></progress>
                                            </div>
                                        </td>

                                    </tr>
                                ))
                            ) : (<p align="center">No Data Found!</p>)
                        }


                    </table>
                </div>



            </div>
            <Footer />
        </div >
    )
}