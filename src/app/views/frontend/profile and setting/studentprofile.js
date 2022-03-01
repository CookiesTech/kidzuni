import React from "react";
import "./student-profile.css";

export default function StudentProfile () {
    return (
        <div>
            <div className="profile-center">
                {/* <h2>Profiles and Settings</h2> */}
                <div className="row student-profile">
                    <div className="main">
                        <div className="info">
                            <img src="http://i63.tinypic.com/2m6vae8.jpg" className="prof rounded-circle img-fluid" />
                            <h3>Name</h3>
                            <hr />
                        </div>
                        <div className="body">
                        
                        <div className="user-filed">
                            <label>First Name</label>  &nbsp;
                            <input type="text"></input>
                        </div>
                        <div className="user-filed">
                            <label>Secret Word</label>
                            <input type="password"></input>
                        </div>
                      
                        </div>
                        <div className="footer">
                            <button className="kidzuni-outline-btn">Submit</button>
                            <button className="kidzuni-outline-btn">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}