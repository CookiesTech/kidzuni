import React, { useState, useEffect } from "react";
import Footer from "../../home/footer";
import { Link } from "react-router-dom";
import NavbarMenus from "../../home/NavbarMenus";
import { Helmet } from "react-helmet";
import Navbar from "../../home/navbar";
import AnalyticsMenu from "../AnalyticsMenus";
import AnalyticsService from '../../Services/AnalyticsService'
import { config } from 'app/config';

export default function Progress() {
    let userData = JSON.parse(localStorage?.getItem?.('user-info'));
    let analyticsservice = new AnalyticsService(config.baseURL);
    const [formData = [], SetFormData] = useState();
    const [subjects = [], setSubjects] = useState();
    const [standards = [], setStandards] = useState();
    const [filterData, setFilterData] = useState({
        country_code: userData?.country_code, standard_id: '', subject_id: '', date_range: 'month'
    })
    useEffect(() => {
        fetchSubjectandStandard();
        fetchProgress();
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilterData({ ...filterData, [name]: value })
        fetchProgress();
    }
    const fetchSubjectandStandard = async () => {
        let data = { country_code: userData?.country_code };
        await analyticsservice.fetchSubjectandStandard(data).then((res) => {
            if (res?.data?.status) {
                setSubjects(res.data?.data?.subjects);
                setStandards(res.data?.data?.standards);
            }
        })
    }

    const fetchProgress = async () => {
        await analyticsservice.analysticsProgress().then((res) => {
            if (res.data.status) {
                SetFormData(res?.data?.data);
            }
        })
    }
    return (
        <div>
            <Helmet>
                <title>KidzUni | Analytics Progress</title>
            </Helmet>
            <div className="container">
                <Navbar />
            </div>
            <NavbarMenus />

            <div className="container">
                <AnalyticsMenu />

                <div className="row usage-select-sec">
                    <div className="usage-detail" >
                        <span>Subjects :</span>&nbsp;
                        <select name="subject_id" onChange={handleChange}>

                            {
                                subjects?.map((data, m) => (
                                    <option value={data.id}>{data.subject_name}</option>

                                ))
                            }
                        </select>&nbsp;

                        <span>Standard :</span>&nbsp;
                        <select name="standard_id" onChange={handleChange}>

                            {
                                standards?.map((data, m) => (
                                    <option value={data.id}>{data.standard_name}</option>

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
                    <div className="progress-title">
                        <h3>PROGRESS IMPROVEMENT</h3>
                    </div>
                </div>

                <div className="row  kidz-progress-details">
                    <table class="table">
                        <tr>
                            <th scope="col">Skills</th>
                            <th scope="col">Time Spent</th>
                            <th scope="col">Questions</th>
                            <th scope="col">Score Imporvement</th>
                        </tr>
                        {
                            formData.length > 0 ? (
                                formData.map((data, i) => (
                                    <tr class={`key-${i}`}>

                                        <td> <Link className="" to={'/analytics/questions-log-' + data?.subcategory_id}> {data?.name}</Link></td>
                                        <td>{data?.time_spent}</td>
                                        <td>{data?.total_attn}</td>
                                        <td>
                                            <div className="kidz-progress-level">
                                                <progress max="100" value={data?.score} ></progress>
                                            </div>
                                        </td>

                                    </tr>
                                ))
                            ) : (<p align="center">No Data Found!</p>)
                        }


                    </table>
                </div>



            </div>
            <Footer />
        </div >
    )
}