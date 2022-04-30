import React, { useState, useEffect } from "react"
import Footer from "../../home/footer"
import Navbar from "../../home/navbar";
import { Helmet } from "react-helmet";
import NavbarMenus from "../../home/NavbarMenus"
import "../../test/question.css"
import { Grid, Tabs, Tab, AppBar } from "@mui/material";
import AnalyticsMenu from "../AnalyticsMenus"
import AnalyticsService from '../../Services/AnalyticsService'
import { config } from 'app/config';
import { values } from "lodash";
export default function QuestionsLog() {
    let id = window.location.pathname.split("-").pop();
    const [value, setValue] = React.useState(0)
    const [currIndex, setcurrIndex] = useState();
    let analysticsservice = new AnalyticsService(config.baseURL);
    const [formData = [], SetFormData] = useState();
    useEffect(() => {
        fetchQuestionLog();
    }, []);
    const fetchQuestionLog = async () => {
        let data = { subcategory_id: id };
        await analysticsservice.analyticsQuestionLog(data).then((res) => {
            if (res.data.status) {
                SetFormData(res.data.data);
            }
        })
    }

    const handleTabs = (e, val) => {
        setcurrIndex(currIndex + 1)
        setValue(val)
    }

    return (
        <div>
            <Helmet>
                <title>KidzUni | Analytics Questions</title>
            </Helmet>
            <div className="container">
                <Navbar />
            </div>

            <NavbarMenus />
            <div className="container">
                <AnalyticsMenu />
                <div className="top-space"></div>
                {
                    formData.length > 0 ? (

                        <Grid container spacing={3} sx={{ mb: '24px' }} className="questions-log">
                            <Grid item xs={12} md={5}>
                                <div className="tabs-block  flex-container">
                                    <Tabs className="block" value={value} onChange={handleTabs}>
                                        {formData.map((data, i) => (
                                            <Tab className="block-display" label={`Question-${i + 1}`} />
                                        ))}
                                    </Tabs>

                                </div>
                            </Grid>

                            <Grid item xs={12} md={7}>
                                <div className="descr-border">
                                    <div className="content">
                                        {formData.map((data, i) => (
                                            <TabPanel value={value} index={i}>
                                                <div class="question-error-msg">
                                                    <h6>Question :</h6>
                                                    <p>{data?.question} ?</p>
                                                    <div class="select-option">
                                                        <button class="options-button btn-descr" sx={{ fontSize: 10 }} name="options" value="10 days">{data?.option1}</button>
                                                        <button class="options-button btn-descr" name="options" value="14 days">{data?.option2}</button>
                                                    </div>
                                                </div>

                                                <div className="correct-ans">
                                                    <h6>Correct Answer :</h6>
                                                    <div class="select-option">
                                                        <button class="options-button btn-descr" sx={{ fontSize: 10 }} name="options" value="10 days">{data?.correct_answer}</button>

                                                    </div>
                                                </div>

                                                <div className="kidz-ans">
                                                    <h6>Kidz Answer :</h6>
                                                    <div class="select-option">
                                                        <button class="options-button btn-descr" sx={{ fontSize: 10 }} name="options" value="10 days">{data?.student_answer}</button>

                                                    </div>
                                                </div>
                                            </TabPanel>))
                                        }
                                    </div>
                                </div>
                            </Grid>


                        </Grid>

                    ) : (
                        <p> No Data Found!</p>
                    )
                }
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