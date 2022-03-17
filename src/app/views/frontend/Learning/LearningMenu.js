import React from "react";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

export default function LearningMenu() {
    return (
        <div>
            <div className="">
                <div class="learning-tab top-space">
                    <span class="tablinks active" >Recommendations
                        <img className="img-fluid" src="../../../assets/frontend/images/recommended.png" alt="" /></span>
                    <Link className="" to={'/home/maths'}>
                        <span class="border-left">Maths
                            <img src="../../../assets/frontend/images/math-book.png" alt="" /></span>
                    </Link>

                    <span class="border-left">English
                        <img src="../../../assets/frontend/images/english.png" alt="" /></span>

                    <Link className="" to={'/home/awards/standard'}>
                        <span class="border-left">Awards
                            <img src="../../../assets/frontend/images/award.png" alt="" /></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}