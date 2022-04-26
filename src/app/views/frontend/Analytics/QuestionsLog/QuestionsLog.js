import React from "react"
import Footer from "../../home/footer"
import Navbar from "../../home/navbar";
import { Helmet } from "react-helmet";
import NavbarMenus from "../../home/NavbarMenus"
import "../../test/question.css"
import { Grid, Tabs, Tab, AppBar } from "@mui/material";
import AnalyticsMenu from "../AnalyticsMenus"



export default function QuestionsLog() {

    const [value, setValue] = React.useState(0)
    const handleTabs = (e, val) => {

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
                <Grid container spacing={3} sx={{ mb: '24px' }} className="questions-log">
                    <Grid item xs={12} md={5}>
                        <div className="tabs-block  flex-container">
                            <Tabs className="block" value={value} onChange={handleTabs}>

                                <Tab className="block-display" label="Question-1" />
                                <Tab className="block-display" label="Question-2" />
                                <Tab className="block-display" label="Question-3" />
                            </Tabs>

                        </div>
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <div className="descr-border">
                            <div className="content">
                                {/* <p> Qurstion ANd Answer{value} </p> */}

                                <TabPanel value={value} index={0}>
                                    <div class="question-error-msg">
                                        <h6>Question :</h6>
                                        <p>How many days makes a week ?</p>
                                        <div class="select-option">
                                            <button class="options-button btn-descr" sx={{ fontSize: 10 }} name="options" value="10 days">10 days</button>
                                            <button class="options-button btn-descr" name="options" value="14 days">14 days</button>
                                            <button class="options-button btn-descr" name="options" value="5 days">5 days</button>
                                            <button class="options-button btn-descr" name="options" value="7 days">7 days</button>
                                        </div>
                                    </div>

                                    <div className="correct-ans">
                                        <h6>Correct Answer :</h6>
                                        <div class="select-option">
                                            <button class="options-button btn-descr" sx={{ fontSize: 10 }} name="options" value="10 days">10 days</button>
                                            <button class="options-button btn-descr" name="options" value="14 days">14 days</button>
                                            <button class="options-button btn-descr" name="options" value="5 days">5 days</button>
                                            <button class="options-button btn-descr" name="options" value="7 days">7 days</button>
                                        </div>
                                    </div>

                                    <div className="kidz-ans">
                                        <h6>Kidz Answer :</h6>
                                        <div class="select-option">
                                            <button class="options-button btn-descr" sx={{ fontSize: 10 }} name="options" value="10 days">10 days</button>
                                            <button class="options-button btn-descr" name="options" value="14 days">14 days</button>
                                            <button class="options-button btn-descr" name="options" value="5 days">5 days</button>
                                            <button class="options-button btn-descr" name="options" value="7 days">7 days</button>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <div class="question-error-msg">
                                        <h6>Question :</h6>
                                        <p>How many players are allowed on a soccer pitch ?</p>
                                        <div class="select-option">
                                            <button class="options-button btn-descr" name="options" value="10 days">10 players</button>
                                            <button class="options-button btn-descr" name="options" value="14 days">18 players</button>
                                            <button class="options-button btn-descr" name="options" value="5 days">11 players</button>
                                            <button class="options-button btn-descr" name="options" value="7 days">7 players</button>
                                        </div>
                                    </div>

                                    <div className="correct-ans">
                                        <h6>Correct Answer :</h6>
                                        <div class="select-option">
                                            <button class="options-button btn-descr" name="options" value="10 days">10 players</button>
                                            <button class="options-button btn-descr" name="options" value="14 days">18 players</button>
                                            <button class="options-button btn-descr" name="options" value="5 days">11 players</button>
                                            <button class="options-button btn-descr" name="options" value="7 days">7 players</button>
                                        </div>
                                    </div>

                                    <div className="kidz-ans">
                                        <h6>Kidz Answer :</h6>
                                        <div class="select-option">
                                            <button class="options-button btn-descr" name="options" value="10 days">10 players</button>
                                            <button class="options-button btn-descr" name="options" value="14 days">18 players</button>
                                            <button class="options-button btn-descr" name="options" value="5 days">11 players</button>
                                            <button class="options-button btn-descr" name="options" value="7 days">7 players</button>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={2}><div class="question-error-msg">
                                    <h6>Question :</h6>
                                    <p>How many hours can be found in a day ?</p>
                                    <div class="select-option">
                                        <button class="options-button btn-descr" name="options" value="10 days">30 hours</button>
                                        <button class="options-button btn-descr" name="options" value="14 days">18 hours</button>
                                        <button class="options-button btn-descr" name="options" value="5 days">24 hours</button>
                                        <button class="options-button btn-descr" name="options" value="7 days">71 hours</button>
                                    </div>
                                </div>

                                    <div className="correct-ans">
                                        <h6>Correct Answer :</h6>
                                        <div class="select-option">
                                            <button class="options-button btn-descr" name="options" value="10 days">30 hours</button>
                                            <button class="options-button btn-descr" name="options" value="14 days">18 hours</button>
                                            <button class="options-button btn-descr" name="options" value="5 days">24 hours</button>
                                            <button class="options-button btn-descr" name="options" value="7 days">71 hours</button>
                                        </div>
                                    </div>

                                    <div className="kidz-ans">
                                        <h6>Kidz Answer :</h6>
                                        <div class="select-option">
                                            <button class="options-button btn-descr" name="options" value="10 days">30 hours</button>
                                            <button class="options-button btn-descr" name="options" value="14 days">18 hours</button>
                                            <button class="options-button btn-descr" name="options" value="5 days">24 hours</button>
                                            <button class="options-button btn-descr" name="options" value="7 days">71 hours</button>
                                        </div>
                                    </div>
                                </TabPanel>
                            </div>
                        </div>

                    </Grid>
                </Grid>
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