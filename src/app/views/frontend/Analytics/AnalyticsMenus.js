import React from "react";
import { Link } from "react-router-dom";


export default function AnalyticsMenu() {
    return (
        <div>
            <div className="">
                <div class="analytics-tab top-space">
                    <Link className="" to={'/home/analytics/usage'}>
                        <span class="tablinks active" >Usage
                            <img className="img-fluid" src="../../../assets/frontend/images/usage.png" alt="" /></span>
                    </Link>
                    <Link className="" to={'/home/analytics/progress'}>
                        <span class="border-left">Progress
                            <img src="../../../assets/frontend/images/progress.png" alt="" /></span>
                    </Link>
                    <Link className="" to={'/home/analytics/questions-log'}>
                        <span class="border-left">Questions
                            <img src="../../../assets/frontend/images/question.png" alt="" /></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}