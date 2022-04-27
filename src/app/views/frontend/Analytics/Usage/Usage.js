import React, { Fragment, useState, useEffect } from 'react';
import Navbar from "../../home/navbar";
import Footer from "../../home/footer";
import AnalyticsMenu from "../AnalyticsMenus";
import { Grid } from '@mui/material';
import { styled } from '@mui/system';
import QuizDetails from './QuizDetails';
import NavbarMenus from '../../home/NavbarMenus';
import { Helmet } from 'react-helmet';
import SubjectlistService from '../../Services/SubjectlistService';
import { config } from "app/config";
import SubjectService from '../../Services/SubjectService';
import UsageService from "../../Services/UsageService"

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))

const Analytics = (props) => {
    let subjectlistservice = new SubjectlistService(config.baseURL)
    let subjectservice = new SubjectService(config.baseURL)

    let countrycode = JSON.parse(localStorage?.getItem?.("user-info"));
    console.log(countrycode);

    const [subjectdata, setSubjectdata] = useState();

    const [standraddata, setStandraddata] = useState();
    const [usagedata, setUsagedata] = useState();
    const [change, setChange] = useState();

    useEffect(() => {
        subjectlistinfo();

    }, [])

    const subjectlistinfo = async () => {
        // console.log("bhgvhjmfguyt");
        try {
            const res = await subjectlistservice.subjectlistdata();
            setSubjectdata(res.data);
            console.log("hdvjhgfy");

        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <Helmet>
                <title>KidzUni | Analytics Usage</title>
            </Helmet>
            <div className='container'>
                <Navbar />
            </div>

            <NavbarMenus />
            <div className='container'>
                <AnalyticsMenu />
                <div className="row usage-select-sec">
                    <div className="usage-detail" >
                        <span>Subjects :</span>&nbsp;
                        <select>
                            {/* {
                                subjectdata?.map((data, m) => (
                                    <option key={m}>{data}</option>

                                ))
                            } */}
                        </select>&nbsp;

                        <span>Standard :</span>&nbsp;
                        <select>
                            <option>All Standard</option>
                            <option> Class I </option>
                            <option> Class II </option>
                            <option> Class III </option>
                            <option> Class IV </option>
                            <option> Class V </option>
                            <option> Class VI </option>
                        </select>&nbsp;

                        <span>Date Range :</span>&nbsp;
                        <select>
                            <option>This Month</option>
                            <option> Yesterday </option>
                            <option> Last Week </option>
                        </select>
                    </div>
                </div>

                <div className="row top-space">
                    <div className="usage-title">
                        <h3>Usage Details </h3>
                    </div>
                </div>

                <Fragment>
                    <ContentBox className="analytics">
                        <Grid container spacing={3}>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <QuizDetails />

                            </Grid>


                        </Grid>
                    </ContentBox>
                </Fragment>
            </div>
            <Footer />
        </div >
    )
}

export default Analytics
