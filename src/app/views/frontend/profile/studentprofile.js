import React, { useState } from "react";
import Footer from "../home/footer";
import Navbar from "../home/navbar";
import NavbarMenus from "../home/NavbarMenus";
import KidzDetailAdd from "./KidzDetailsAdd";
import "./student-profile.css";
import { Small } from 'app/components/Typography'
import { Grid, Tabs, Tab, AppBar } from "@mui/material";


export default function StudentProfile() {
    let kidsinfo = [];
    let loginInfo = JSON.parse(localStorage?.getItem?.("user-info"));
    kidsinfo = JSON.parse(localStorage?.getItem?.('kidz_info'));

    // console.log(kidsinfo);

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
                            {loginInfo?.role == 3 ? (
                                <>

                                    <Tabs value={value} onChange={handleTabs}>
                                        <Tab className="block-display" label="Membership Details" />
                                        <Tab className="block-display" label="Add Kidz" />
                                        <Tab className="block-display" label="Kidz Profiles" />
                                    </Tabs>

                                    <div className="descr-border-details">
                                        <div className="content">
                                            <TabPanel value={value} index={0} >
                                                <div className="member-profile-set">
                                                    <h4>Parent Membership Information</h4>
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
                                                    <KidzDetailAdd />
                                                </div>
                                            </TabPanel>

                                            <TabPanel value={value} index={2}>
                                                {kidsinfo.length > 0 &&
                                                    kidsinfo.map((data, i) => (

                                                        <div className="member-profile-set kid-parent-set">
                                                            <h4>Kidz Details -{'>'} {data.name}</h4>
                                                            <div className="parent-edit-part">
                                                                <Small sx={{ fontSize: 18 }}>UserName</Small>
                                                                <input
                                                                    type="userName"
                                                                    name="userName"
                                                                    class="form-control"
                                                                    value={data.name}
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="parent-edit-part">
                                                                <Small sx={{ fontSize: 18 }}>Email</Small>
                                                                <input
                                                                    type="email"
                                                                    name="email"
                                                                    class="form-control"
                                                                    value={data.email}
                                                                    required
                                                                />
                                                            </div>

                                                        </div>
                                                    ))
                                                }
                                            </TabPanel>


                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {loginInfo?.role == 5 ? (
                                        <>
                                            {/* <Tabs value={value} onChange={handleTabs}>
                                                <Tab className="block-display" label="Kidz Setting" />
                                            </Tabs>
                                            <TabPanel value={value} index={0}>

                                                {
                                                    kidsinfo?.map((data, k) => (

                                                        <div className="member-profile-set">
                                                            <h4>Kidz Details -{'>'} {data.name}</h4>
                                                            <div className="parent-edit-part">
                                                                <Small sx={{ fontSize: 18 }}>UserName</Small>
                                                                <input
                                                                    type="userName"
                                                                    name="userName"
                                                                    class="form-control"
                                                                    value={data.name}
                                                                    required
                                                                />
                                                            </div>

                                                            <div className="parent-edit-part">
                                                                <Small sx={{ fontSize: 18 }}>Email</Small>
                                                                <input
                                                                    type="email"
                                                                    name="email"
                                                                    class="form-control"
                                                                    value={data.email}
                                                                    required
                                                                />
                                                            </div>

                                                        </div>
                                                    ))
                                                }
                                                <p>Kidz Info</p>
                                            </TabPanel> */}
                                        </>

                                    ) : (
                                        <p>Data not Found</p>
                                    )}
                                </>
                            )}
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