import React from "react";
import "./student-profile.css";

export default function StudentProfile() {
    return (
        <div>
            <div className="profile-center">
                <h2>Profile and Settings</h2>
                <div className="row student-profile">
                    <div className="main">
                        <div className="info">
                            <div className="avatar">
                                <img src="assets/frontend/images/user-blue.png" className="prof rounded-circle img-fluid" />
                                <div class="avatar_upload" >
                                    <label class="upload_label">Upload
                                        <input type="file" id="upload" />
                                    </label>
                                </div>
                            </div>
                            <div className="user-name">Student</div>
                        </div>
                        <div className="profile-info">
                            <div className="user-filed">
                                <label>First Name</label>  &nbsp;
                                <input type="text" required />
                            </div>
                            <div className="user-filed">
                                <label>Secret Word</label>
                                <input type="password" required />
                            </div>
                        </div>
                        <div className="profile-setting-btn">
                            <button className="kidzuni-outline-btn">Submit</button>
                            <button className="kidzuni-outline-btn">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}