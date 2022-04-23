import React, { Fragment } from 'react';
import Navbar from "../../home/navbar";
import Footer from "../../home/footer";
import AnalyticsMenu from "../AnalyticsMenus";
import { Grid } from '@mui/material';
import { styled } from '@mui/system';
import QuizDetails from './QuizDetails';
import NavbarMenus from '../../home/NavbarMenus';


const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))

const Analytics = () => {

    return (
        <div>
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
                            <option>All Subjects</option>
                            <option> Maths </option>
                            <option> English </option>
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
