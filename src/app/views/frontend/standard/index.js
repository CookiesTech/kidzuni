import React from "react";
import Navbar from "../home/navbar";
import Classes from "./classnavbar";
import Topics from "./subjectTopics";
import Footer from "../home/footer";

export default function Standard () {
    return (
        <div>
            <div className="container">
                <Navbar />
                <Classes />
                <Topics />
            </div>
            <Footer />    
        </div>
    )
} 