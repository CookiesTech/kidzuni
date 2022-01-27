import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css"

export default function SubjectLkg() {
    return (
        <div>
            <div className="row">
                <div className="cloud-as" id="cssmenu">
                    <div className="lkg-tab">
                        <a className="nav-link" href="">
                            <span>L</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="lkg" />
                        </a>
                        <Link className="nav-link" to={"/-"}>
                                <span>U</span>
                                <img src="assets/frontend/images/cloud-icon.png" alt="ukg" />
                        </Link>    
                        <a className="nav-link" href="class-i.html">
                            <span>I</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="class-i" />
                        </a>
                        <a className="nav-link" href="class-ii.html">
                            <span>II</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="class-ii" />
                        </a>
                        <a className="nav-link" href="class-iii.html">
                            <span>III</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="class-iii" />
                        </a>
                        <a className="nav-link" href="class-iv.html">
                            <span>IV</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="class-iv" />
                        </a>
                        <a className="nav-link" href="class-v.html">
                            <span>V</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="class-v" />
                        </a>
                        <a className="nav-link" href="">
                            <span>VI</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="class-vi" />
                        </a>
                        <a className="nav-link" href="">
                            <span>VII</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="class-vii" />
                        </a>
                        <a className="nav-link" href="">
                            <span>VIII</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="class-viii" />
                        </a>
                        <a className="nav-link" href="">
                            <span>IX</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="class-ix" />
                        </a>
                        <a className="nav-link" href="">
                            <span>X</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="class-x" />
                        </a>
                        <a className="nav-link" href="">
                            <span>XI</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="class-xi" />
                        </a>
                        <a className="nav-link" href="">
                            <span>XII</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="class-xii" />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
} 