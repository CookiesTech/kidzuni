import React from "react";
import Navbar from "../home/navbar";
import SubjectLkg from "./classnavbar";
import Topics from "./subjectTopics";
import Footer from "../home/footer";

export default function SubjectList () {
    return (
        <div>
            <div className="container">
                <Navbar />
                <SubjectLkg />
                <Topics />
            </div>
            <Footer />    
        </div>
    )
} 