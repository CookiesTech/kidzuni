import React from "react";
import Navbar from "../home/navbar";

import QuizHome from "./quizhome"
// import Quiz1 from "./Quiz1"
// import Question from "./Question"
import Footer from "../home/footer";

export default function Test () {
    return (
        <div>
            <div className="container">
                <Navbar />
                <QuizHome />
            </div>
            <Footer />
        </div>
    )
}