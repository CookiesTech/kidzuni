import React, { Fragment, useState, useEffect } from 'react';
import Navbar from "../../home/navbar";
import Footer from "../../home/footer";
import AnalyticsMenu from "../AnalyticsMenus";
import { Grid } from '@mui/material';
import { styled } from '@mui/system';
import QuizDetails from './QuizDetails';
import NavbarMenus from '../../home/NavbarMenus';
import { Helmet } from 'react-helmet';
import { config } from "app/config";
import AnalyticsService from '../../Services/AnalyticsService';
import { Link } from "react-router-dom"
import ErrorMessageShow from '../../Error/Errormsg';
const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))

const Analytics = () => {
    let userData = JSON.parse(localStorage?.getItem?.('user-info'));
    let analyticsservice = new AnalyticsService(config.baseURL)
    const [subjects = [], setSubjects] = useState();
    const [standards = [], setStandards] = useState();
    const [kidsData = [], setkidsData] = useState();
    const [filterData, setFilterData] = useState({
        country_code: userData?.country_code, standard_id: null, subject_id: null, date_range: 'month'
    })
    const [usageData, setUsageData] = useState();
    useEffect(() => {
        if (userData !== null && userData?.role == 5) {
            fetchSubjectandStandard();

        } else if (userData !== null && userData?.role == 3) {
            fetchSubjectandStandard();
            fetchKidsList();
        }


    }, [])
    const fetchSubjectandStandard = async () => {
        let data = { country_code: userData?.country_code };
        await analyticsservice.fetchSubjectandStandard(data).then((res) => {
            if (res?.data?.status) {
                setSubjects(res.data?.data?.subjects);
                setStandards(res.data?.data?.standards);
                setFilterData({ ...filterData, standard_id: standards[0]?.id, subject_id: subjects[0]?.id });
                fetchUsage();
            }
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilterData({ ...filterData, [name]: value })
        //  setFilterData({ [name]: value })
        fetchUsage();
    }
    const fetchUsage = async () => {

        await analyticsservice.getAnalysticsUsage(filterData).then((res) => {
            if (res.data.status) {
                setUsageData(res.data.data);
            }
        })
    }
    const fetchParentusage = async () => {
        console.log(filterData);
        await analyticsservice.fetchParentusage(filterData).then((res) => {
            if (res.data.status) {
                setUsageData(res.data.data);
            }
        })
    }
    const fetchKidsList = async () => {
        await analyticsservice.fetchKidsList().then((res) => {
            if (res.data.status) {
                setkidsData(res.data.data);
                setFilterData({ ...filterData, student_id: res.data.data[0]?.id });

                fetchParentusage();
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>KidzUni | Analytics| Usage</title>
            </Helmet>
            <div className='container'>
                <Navbar />
            </div>

            <NavbarMenus />
            {
                (() => {
                    if (userData !== null && userData?.role == 5) {
                        return (
                            <div className='container'>
                                <AnalyticsMenu />
                                <div className="row usage-select-sec">
                                    <div className="usage-detail" >
                                        <span>Subjects :</span>&nbsp;
                                        <select name="subject_id" onChange={handleChange}>
                                            {
                                                subjects?.map((data, m) => (
                                                    <option value={data?.id}>{data?.subject_name}</option>

                                                ))
                                            }
                                        </select>&nbsp;

                                        <span>Standard :</span>&nbsp;
                                        <select name="standard_id" onChange={handleChange}>

                                            {
                                                standards?.map((data, m) => (
                                                    <option value={data?.id}>{data?.standard_name}</option>

                                                ))
                                            }
                                        </select>&nbsp;

                                        <span>Date Range :</span>&nbsp;
                                        <select name="date_range" onChange={handleChange}>
                                            <option value="month">This Month</option>
                                            <option value="yesterday"> Yesterday </option>
                                            <option value="last_week"> Last Week </option>
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
                                                <QuizDetails data={usageData} />

                                            </Grid>


                                        </Grid>
                                    </ContentBox>
                                </Fragment>
                            </div>
                        )
                    } else if (userData !== null && userData?.role == 3) {
                        return (
                            <div className='container'>
                                <AnalyticsMenu />
                                <div className="row usage-select-sec">
                                    <div className="usage-detail" >
                                        <span>Subjects :</span>&nbsp;
                                        <select name="subject_id" onChange={handleChange}>
                                            {
                                                subjects?.map((data, m) => (
                                                    <option value={data?.id}>{data?.subject_name}</option>

                                                ))
                                            }
                                        </select>&nbsp;

                                        <span>Standard :</span>&nbsp;
                                        <select name="standard_id" onChange={handleChange}>

                                            {
                                                standards?.map((data, m) => (
                                                    <option value={data?.id}>{data?.standard_name}</option>

                                                ))
                                            }
                                        </select>&nbsp;

                                        <span>Date Range :</span>&nbsp;
                                        <select name="date_range" onChange={handleChange}>
                                            <option value="month">This Month</option>
                                            <option value="yesterday"> Yesterday </option>
                                            <option value="last_week"> Last Week </option>
                                        </select>

                                        <span>KidsList :</span>&nbsp;
                                        <select name="standard_id" onChange={handleChange}>

                                            {
                                                kidsData?.map((data, m) => (
                                                    <option value={data?.id}>{data?.name}</option>

                                                ))
                                            }
                                        </select>&nbsp;
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
                                                <QuizDetails data={usageData} />

                                            </Grid>


                                        </Grid>
                                    </ContentBox>
                                </Fragment>
                            </div>
                        )
                    } else {
                        return (
                            <p className="container"><br />
                                <Link className="" to="/user/login">
                                    <div><ErrorMessageShow />
                                    </div>
                                </Link>
                            </p>
                        )
                    }
                })()
            }
        </div>
    )
}

export default Analytics
