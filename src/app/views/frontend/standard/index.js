import React from "react";
import Navbar from "../home/navbar";
import Classes from "./classnavbar";
import Topics from "./subjectTopics";
import Footer from "../home/footer";
import NavbarMenus from "../home/NavbarMenus";

export default function Standard() {
    return (
        <div>
            <div className="container">
                <Navbar />
            </div>
            <NavbarMenus />
            <div className="container">
                <Classes />
                <Topics />
            </div>
            <Footer />
        </div>
    )
} 