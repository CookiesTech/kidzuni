import React from "react";
import Navbar from "../home/navbar";
import Marks from "./marks";
import Quiz from "./quiz";
// import SaveScore from "./score";
// import Score from "./savescore";
import Footer from "../home/footer";

export default function Test () {
    return (
        <div>
            <div className="container">
                <Navbar />
                <Marks />
                {/* <SaveScore /> */}
                {/* <Score /> */}
                <Quiz />
            </div>
            <Footer />
        </div>
    )
}