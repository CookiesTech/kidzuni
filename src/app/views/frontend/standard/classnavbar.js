import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function Classes() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

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

                <div className="select-class">
                    <InputLabel id="demo-simple-select-label">Class</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>
                            <Link className="nav-link" to="/standard-UKG">
                                <span>UKG</span>
                            </Link>
                        </MenuItem>
                        <MenuItem value={20}>
                            <Link className="nav-link" to="/standard-I">
                                <span>I</span>
                            </Link>
                        </MenuItem>
                        <MenuItem value={30}>
                            <Link className="nav-link" to="/standard-II">
                                <span>II</span>
                            </Link>
                        </MenuItem>
                        <MenuItem value={30}>
                            <Link className="nav-link" to="/standard-III">
                                <span>III</span>
                            </Link>
                        </MenuItem>
                    </Select>
                </div>
            </div>
        </div>
    )
} 