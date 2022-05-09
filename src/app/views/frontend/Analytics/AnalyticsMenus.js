import React from "react";
import { NavLink } from "react-router-dom";


export default function AnalyticsMenu() {

    return (
        <div>
            <div className="">
                <div class="analytics-tab top-space">
                    <NavLink activeClassName="active" to={'/analytics/usage'}>
                        <span class="" >Usage
                            <img className="img-fluid" src="../../../assets/frontend/images/usage.png" alt="" /></span>
                    </NavLink>
                    <NavLink activeClassName="active" to={'/analytics/progress'}>
                        <span class="border-left">Progress
                            <img src="../../../assets/frontend/images/progress.png" alt="" /></span>
                    </NavLink>

                </div>
            </div>
        </div>
    )
}