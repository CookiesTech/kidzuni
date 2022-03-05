import React from "react";
import "./student-profile.css";

export default function ParentProfile() {
    return (
        <div>
            <div className="profile-center">
                <h2>Profiles and Settings</h2>
                <div className="row student-profile">
                    <div className="parent-setting">
                        <div className="info">
                            <div className="avatar">
                                <img src="assets/frontend/images/user-blue.png" className="prof rounded-circle img-fluid" />
                                <div class="avatar_upload" >
                                    <label class="upload_label">Upload
                                        <input type="file" id="upload" />
                                    </label>
                                </div>
                            </div>
                            <div className="user-name">Parent</div>
                        </div>
                        <div className="scroll">
                            <div className="profile-parent">
                                <div className="manage-info">
                                    <h4>Manage your profiles and settings</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                        when an unknown printer took a galley of type and scrambled it to make a type 
                                        specimen book.</p>
                                </div>
                                <div className="membership-details">
                                    <h5>Membership Information</h5>
                                </div>
                                <div className="user-filed">
                                    <label>First Name</label>
                                    <input type="text" required />
                                </div>
                                <div className="user-filed">
                                    <label>Last Name</label>
                                    <input type="text" required />  
                                </div>
                                <div className="user-filed">
                                    <label>Password</label>
                                    <input type="password" required />
                                </div>
                                <div className="user-filed">
                                    <label>Email</label>
                                    <input type="text" required />
                                </div>
                                {/* <div className="user-filed">
                                
                                    <label>Country</label>
                                    <select>
                                        <option>Select a country</option>
                                        <option>India</option>
                                        <option>Srilanka</option>
                                    </select>
                                </div> */}

                                <div className="online-profile-parent">
                                    <h6><b>Parent</b></h6>
                                    <div className="user-filed">
                                        <label>First Name</label>
                                        <input type="text" required />
                                    </div>
                                    <div className="user-filed">
                                        <label>Secret Word</label>
                                        <input type="password" required />
                                    </div>
                                </div>

                                <div className="online-profile-student">
                                    <h6><b>Child</b></h6>
                                    <div className="user-filed">
                                        <label>First Name</label>
                                        <input type="text" required />
                                    </div>
                                    <div className="user-filed">
                                        <label>Secret Word</label>
                                        <input type="password" required />
                                    </div>
                                </div>

                                <div className="parent-settings">
                                    <h6><b>Settings</b></h6>
                                    <div className="user-filed">
                                        <label>Time Zone</label>
                                        <select name="userTimeZone" id="timeZone">
                                            <option value="US/Pacific" data-display-name="US/Pacific">US/Pacific</option>
                                            <option value="US/Mountain" data-display-name="US/Mountain">US/Mountain</option>
                                            <option value="Pacific/Samoa" data-display-name="Pacific/Samoa">(GMT-11:00) Pacific/Samoa</option>
                                            <option value="US/Samoa" data-display-name="US/Samoa">(GMT-11:00) US/Samoa</option>
                                            <option value="America/Adak" data-display-name="America/Adak">(GMT-10:00) America/Adak</option>
                                            <option value="America/Atka" data-display-name="America/Atka">(GMT-10:00) America/Atka</option>
                                            <option value="Etc/GMT+10" data-display-name="GMT-10">(GMT-10:00) GMT-10</option>
                                            <option value="Pacific/Honolulu" data-display-name="Pacific/Honolulu">(GMT-10:00) Pacific/Honolulu</option>
                                            <option value="Pacific/Johnston" data-display-name="Pacific/Johnston">(GMT-10:00) Pacific/Johnston</option>
                                        </select>
                                    </div>
                                    <div className="user-filed">
                                        <label>Receive weekly<br/>summary emails</label>
                                        <input type="checkbox"/>
                                    </div>
                                    <div className="user-filed">
                                        <label>Receive product<br/>and marketing emails</label>
                                        <input type="checkbox"/>
                                    </div>
                                    <div className="user-filed">
                                        <label>Hide<br/>Year Levels</label>
                                        <input type="checkbox"/>
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
            </div>
        </div>
    )
}