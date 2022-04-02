import React, { useState } from "react";
import Navbar from "../home/navbar";
import { Link } from "react-router-dom";
import Footer from "../home/footer";
import "../assets/css/style.css";
import NavbarMenus from "../home/NavbarMenus";
import LearningMenu from "../Learning/LearningMenu";

export default function Success() {
    return (
        <div>
            <div className="container">
                <Navbar />
            </div>
            <NavbarMenus />
            <div className="container">
                <LearningMenu />
            </div>



            <div className="success">

                <div class="planet-cont">
                    <div class="planet"></div>
                    <div class="rings"></div>
                </div>
                <div className="test-completed">
                    <div className="congarts">
                        <h1>Congratulations!</h1>
                    </div>
                    <div className="test-complete-class">
                        <Link className="" to={'/home/maths'}>
                            <span>Year-1 {'>'}</span> &nbsp;
                        </Link>

                        <span> Sub-Topic(cout 1 to 3)</span>
                    </div>

                    <div class="checkmark-circle">
                        <div class="background"></div>
                        <div class="checkmark draw"></div>
                    </div>
                    <h4>You Have Successfully Completed.</h4>

                    <div className="score-board">
                        <span>
                            <img src=" assets/frontend/images/credit-score.png" alt="score" />
                            <p>Smart scroe</p>
                        </span>
                        <span>
                            <img src=" assets/frontend/images/time-spent.png" alt="time" />
                            <p>Time Spent</p>
                        </span>
                        <span>
                            <img src=" assets/frontend/images/target.png" alt="question" />
                            <p>Questions</p>
                        </span>
                        <Link className="nav-link" to="/standard-Lkg">
                            <a className="" href="">Win More Prizes keep practising{">>"}</a>
                        </Link>
                    </div>
                </div>

                <div className="yellow-planet">
                    <div class="planet-cont bottom">
                        <div class="planet bottom"></div>
                        <div class="rings bottom"></div>
                    </div>
                </div>


                <div class="star"></div>
                <div class="star k"></div>
                {/* <div class="star b"></div> */}
                {/* <div class="star c"></div>
                <div class="star d"></div>
                <div class="star e"></div> */}
                {/* <div class="star f"></div>
                <div class="star g"></div>
                <div class="star h"></div>
                <div class="star i"></div>
                <div class="star j"></div>
                <div class="star k"></div>
                <div class="star l"></div>
                <div class="star m"></div>
                <div class="star n"></div> */}

                <div class="rocket-cont">
                    <div class="rocket-top"></div>
                    <div class="rocket-bottom"></div>
                    <div class="flame"></div>
                </div>
            </div>

            <Footer />
        </div>
    )
}