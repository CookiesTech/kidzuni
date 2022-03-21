import React from "react";
import Navbar from "../home/navbar";

import QuizHome from "./quizhome"
// import Quiz1 from "./Quiz1"
// import Question from "./Question"
import Footer from "../home/footer";
import NavbarMenus from "../home/NavbarMenus";

export default function Test() {
    return (
        <div>
            <div className="container">
                <Navbar />
            </div>
            <NavbarMenus />
            <div className="container">
                <QuizHome />
            </div>
            <Footer />
        </div>
    )
}