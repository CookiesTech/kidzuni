import React from "react";
import Navbar from "../home/navbar";
import "../assets/css/style.css";
import Footer from "../home/footer";
import LearningMenu from "./LearningMenu";


export default function AwardsClasses() {
    return (
        <div>
            <div className="container">
                <Navbar />
                <LearningMenu />
                <div className="awards-prices">
                    <div class="awards-dec">
                        <h4>Awards!</h4>
                        <div className="awards-details">
                            <tr class="practice-details">
                                <th class="details-label">You've Earned</th>
                                <td><a href="">98 Medals</a></td>
                            </tr>
                            <tr class="practice-details">
                                <th class="details-label">You've Mastered</th>
                                <td><a href="">154 Skills</a></td>
                            </tr>
                            <tr class="practice-details">
                                <th class="details-label">You've Answered</th>
                                <td><a href="">2335 Questions</a></td>
                            </tr>
                            <tr class="practice-details">
                                <th class="details-label">You've Practised for</th>
                                <td><a href="">hr</a></td>
                            </tr>

                            <tr class="practice-details">
                                <th class="details-label">Till Your next win</th>
                                <td><a href="">77 Questions & 4 Skills</a></td>
                            </tr>
                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}