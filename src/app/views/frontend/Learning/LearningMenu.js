import React from "react";
import "../assets/css/style.css";
import { NavLink } from "react-router-dom";

export default function LearningMenu() {
    return (
        <div>
            <div className="">
                <div class="learning-tab top-space">
                    <NavLink activeClassName="active" to={'/learning/recommendation'}>
                        <span class="" >Recommendations
                            <img className="img-fluid" src="../../../assets/frontend/images/recommended.png" alt="" /></span>
                    </NavLink>
                    <NavLink activeClassName="active" to={'/home/maths'}>
                        <span class="border-left">Maths
                            <img src="../../../assets/frontend/images/math-book.png" alt="" /></span>
                    </NavLink>

                    <span class="border-left">English
                        <img src="../../../assets/frontend/images/english.png" alt="" /></span>

                    <NavLink activeClassName="active" to={'/awards/standard'}>
                        <span class="border-left">Awards
                            <img src="../../../assets/frontend/images/award.png" alt="" /></span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}