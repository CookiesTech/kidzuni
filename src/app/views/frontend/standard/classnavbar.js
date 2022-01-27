import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css"

export default function Classes() {
    return (
        <div>
            <div className="row">
                <div className="cloud-as" id="cssmenu">
                    <div className="lkg-tab">
                        <Link className="nav-link" to="/standard-LKG">
                            <span>L</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="lkg" />
                        </Link>
                        <Link className="nav-link" to="/standard-UKG">
                            <span>U</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="ukg" />
                        </Link>
                        <Link className="nav-link" to="/standard-I">
                            <span>I</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="class-i" />
                        </Link>
                        <Link className="nav-link" to="/standard-II">
                            <span>II</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="class-ii" />
                        </Link>
                        <Link className="nav-link" to="/standard-III">
                            <span>III</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="class-iii" />
                        </Link>
                        <Link className="nav-link" to="/standard-IV">
                            <span>IV</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="class-iv" />
                        </Link>
                        <Link className="nav-link" to="/standard-V">
                            <span>V</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="class-v" />
                        </Link>
                        <Link className="nav-link" to="/standard-VI">
                            <span>VI</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="class-vi" />
                        </Link>
                        <Link className="nav-link" to="/standard-VII">
                            <span>VII</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="class-vii" />
                        </Link>
                        <Link className="nav-link" to="/standard-VIII">
                            <span>VIII</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="class-viii" />
                        </Link>
                        <Link className="nav-link" to="/standard-IX">
                            <span>IX</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="class-ix" />
                        </Link>
                        <Link className="nav-link" to="/standard-X">
                            <span>X</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="class-x" />
                        </Link>
                        <Link className="nav-link" to="/standard-X">
                            <span>XI</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="class-xi" />
                        </Link>
                        <Link className="nav-link" to="/standard-XII">
                            <span>XII</span>
                            <img src="assets/frontend/images/cloud-icon.png" alt="class-xii" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
} 