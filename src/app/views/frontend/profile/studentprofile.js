import React, { useState } from "react";
import Footer from "../home/footer";
import Navbar from "../home/navbar";
import NavbarMenus from "../home/NavbarMenus";
import KidzDetailAdd from "./KidzDetailsAdd";
import "./student-profile.css";
import { Small } from 'app/components/Typography'
import { Grid, Tabs, Tab, AppBar } from "@mui/material";


export default function StudentProfile() {
    let loginInfo = JSON.parse(localStorage?.getItem?.("user-info"));

    const [value, setValue] = React.useState(0)
    const handleTabs = (e, val) => {
        setValue(val)
    }


    return (
        <div>
            <div className="container">
                <Navbar />
            </div>
            <NavbarMenus />
            <div className="container">
                <div className="top-space profile-setting">
                    <Grid container spacing={3} sx={{ mb: '24px' }}>
                        <Grid item xs={12} md={12}>

                            <Tabs value={value} onChange={handleTabs}>

                                <Tab className="block-display" label="Membership Details" />
                                <Tab className="block-display" label="Profile Setting" />
                                <Tab className="block-display" label="Student Profile" />
                            </Tabs>

                            <div className="descr-border-details">
                                <div className="content">
                                    <TabPanel value={value} index={0} >
                                        <div className="member-profile-set">
                                            <h4>Membership Information</h4>
                                            <div className="member-profile-info">
                                                <Small sx={{ fontSize: 18 }}>UserName</Small>
                                                <span>{loginInfo.name}</span>

                                            </div>
                                            <div className="member-profile-info">
                                                <Small sx={{ fontSize: 18 }}>Email</Small>
                                                <span>{loginInfo.email}</span>
                                            </div>

                                            <div className="member-profile-info">
                                                <Small sx={{ fontSize: 18 }}>children</Small>
                                                <span>{loginInfo.no_of_children}</span>
                                            </div>
                                            <div className="member-profile-info">
                                                <Small sx={{ fontSize: 18 }}>Plan</Small>
                                                <span>{loginInfo.subscription_type}</span>
                                            </div>
                                            <div className="member-profile-info">
                                                <Small sx={{ fontSize: 18 }}>Purchased Date</Small>
                                                <span>{loginInfo.purchaed_date}</span>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        <div className="member-profile-set">
                                            <h4>Parent Setting</h4>
                                            <div className="parent-edit-part">
                                                <Small sx={{ fontSize: 18 }}>UserName</Small>
                                                <input
                                                    type="userName"
                                                    name="userName"
                                                    class="form-control"
                                                    required
                                                />
                                            </div>
                                            <div className="parent-edit-part">
                                                <Small sx={{ fontSize: 18 }}>Password</Small>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    class="form-control"
                                                    required
                                                />
                                            </div>
                                            <div className="parent-edit-part">
                                                <Small sx={{ fontSize: 18 }}>Email</Small>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    class="form-control"
                                                    required
                                                />
                                            </div>

                                        </div>
                                    </TabPanel>
                                    <TabPanel value={value} index={2}>
                                        <div className="member-profile-set">
                                            <h4>Kidz Setting</h4>

                                            <KidzDetailAdd />


                                        </div>
                                    </TabPanel>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Footer />
        </div>
    )

    function TabPanel(props) {
        const { children, value, index } = props;
        return (
            <div>
                {
                    value === index && (
                        <h4>{children}</h4>
                    )
                }
            </div>
        )
    }
}