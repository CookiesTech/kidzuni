import React, { Fragment } from 'react';
import Navbar from "../../home/navbar";
import Footer from "../../home/footer";
import AnalyticsMenu from "../AnalyticsMenus";


import { Grid, Card } from '@mui/material';

import PieChart from './PieChart';
// import UpgradeCard from '../../dashboard/shared/UpgradeCard';
import { styled, useTheme } from '@mui/system';
import QuizDetails from './QuizDetails';


const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
}))

const SubTitle = styled('span')(({ theme }) => ({
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
}))

const H4 = styled('h4')(({ theme }) => ({
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '16px',
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
}))

const Analytics = () => {
    const { palette } = useTheme()

    return (
        <div>
            <div className='container'>
                <Navbar />
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

                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <Card sx={{ px: 3, py: 2, mb: 3 }}>
                                    <Title>PRACTICE </Title>
                                    <SubTitle>Last 30 days</SubTitle>
                                    <PieChart
                                        height="300px"
                                        color={[
                                            palette.primary.dark,
                                            palette.primary.main,
                                            palette.primary.light,
                                        ]}
                                    />
                                </Card>

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
