import React from "react";
import Footer from "../../home/footer";
import { Link } from "react-router-dom";
import NavbarMenus from "../../home/NavbarMenus"
import Navbar from "../../home/navbar";
import AnalyticsMenu from "../AnalyticsMenus";

export default function Progress() {
    return (
        <div>
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
                        <h3>Progress Imporvement</h3>
                    </div>
                </div>

                <div className="row  kidz-progress-details">
                    <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                        <div className="progress-improvement">
                            Skill
                        </div>
                    </div>

                    <div className="col-sm-2 col-xs-2 col-md-2 col-lg-2">
                        Time Spent
                    </div>

                    <div className="col-sm-2 col-xs-2 col-md-2 col-lg-2">
                        Questions
                    </div>

                    <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                        Scores Improvement
                    </div>

                </div>


                <div className="row kidz-details">
                    <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                        <div className="subtopic-lits-progress">
                            <Link className="" to={'/home/analytics/questions-log'}>
                                A 1.1 Numbers and Counts
                            </Link>
                        </div>
                        <div className="subtopic-lits-progress">
                            A 1.1 Numbers and Counts
                        </div>
                        <div className="subtopic-lits-progress">
                            A 1.1 Numbers and Counts
                        </div>
                        <div className="subtopic-lits-progress">
                            A 1.1 Numbers and Counts
                        </div>

                    </div>

                    <div className="col-sm-2 col-xs-2 col-md-2 col-lg-2">
                        <div className="kidz-spenttime">
                            15 min
                        </div>
                        <div className="kidz-spenttime">
                            15 min
                        </div>
                        <div className="kidz-spenttime">
                            15 min
                        </div>
                        <div className="kidz-spenttime">
                            15 min
                        </div>

                    </div>

                    <div className="col-sm-2 col-xs-2 col-md-2 col-lg-2">
                        <div className="kidz-attend-question">
                            94
                        </div>
                        <div className="kidz-attend-question">
                            94
                        </div>
                        <div className="kidz-attend-question">
                            94
                        </div>
                        <div className="kidz-attend-question">
                            94
                        </div>
                    </div>

                    <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                        <div className="kidz-progress-level">
                            <progress max="100" value="95"></progress>
                        </div>
                        <div className="kidz-progress-level">
                            <progress max="100" value="75"></progress>
                        </div>
                        <div className="kidz-progress-level">
                            <progress max="100" value="48"></progress>
                        </div>
                        <div className="kidz-progress-level">
                            <progress max="100" value="52"></progress>
                        </div>
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    )
}