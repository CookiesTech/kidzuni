import React from "react";
import Footer from "../../home/footer";
import { Link } from "react-router-dom";
import NavbarMenus from "../../home/NavbarMenus";
import { Helmet } from "react-helmet";
import Navbar from "../../home/navbar";
import AnalyticsMenu from "../AnalyticsMenus";

export default function Progress() {
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
                        <tr class="">
                            <td> <Link className="" to={'/analytics/questions-log'}> A 1.1 Numbers and Counts</Link></td>
                            <td>15 min</td>
                            <td>90</td>
                            <td>
                                <div className="kidz-progress-level">
                                    <progress max="100" value="95"></progress>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>A 1.1 Numbers and Counts</td>
                            <td>20 min</td>
                            <td>85</td>
                            <td>
                                <div className="kidz-progress-level">
                                    <progress max="100" value="85"></progress>
                                </div>
                            </td>
                        </tr>
                        <tr class="">
                            <td>A 1.1 Numbers and Counts</td>
                            <td>22 min</td>
                            <td>92</td>
                            <td>
                                <div className="kidz-progress-level">
                                    <progress max="100" value="80"></progress>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>A 1.1 Numbers and Counts</td>
                            <td>25 min</td>
                            <td>82</td>
                            <td>
                                <div className="kidz-progress-level">
                                    <progress max="100" value="83"></progress>
                                </div>
                            </td>
                        </tr>
                        <tr class="">
                            <td>A 1.1 Numbers and Counts</td>
                            <td>25 min</td>
                            <td>92</td>
                            <td>
                                <div className="kidz-progress-level">
                                    <progress max="100" value="93"></progress>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>



            </div>
            <Footer />
        </div>
    )
}