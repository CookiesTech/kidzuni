import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Topics() {

    const [standardid, setStandardid ] = useState();

    // const arrayofobject = [{"main_topic": "numbers"}]

   
    useEffect(() => {
        subjecttopics();
       
    }, []);


    const subjecttopics = async () => { 
        const standard = {'standard_id':6}  
        axios.post('http://feltech.in/kidzuni_backend/public/api/getTopics', standard )
        .then((response)  => {setStandardid({standard_id: response.data})


        
            console.log(response?.data);
        });
    }

    // const subjecttopics = async (data) => {
    //     let Url = "http://feltech.in/kidzuni_backend/public/api/getTopics";
    
    //     let response = await axios.post(Url, data);
       
        
    //     console.log(response?.data);
    //   };
       
     
    
    return (
        <div>
             {/* {arrayofobject.map(function(d, idx){
                 return (<h6 key={idx}>{d.main_topic}</h6>)
             })} */}

            <div className="main-content">
                <div className="row">
                    <div className="lkg-sec">
                        <div className="lkg-title">
                            <h2>Lower Kindergarden Maths</h2>
                            <p>Here is a list of all of the maths skills students learn in LKG! These skills are organised into categories,
                                and you can move your mouse over any skill name to preview the skill. To start practising, just click on any link.
                                Kidzuni will track your score, and the questions will automatically increase in difficulty as you improve!</p>
                        </div>
                        <hr />
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 topics-types">
                        <h5>Count up to 10</h5>
                        <div className="sub-list">
                            <Link className="nav-link" to={'/test'}>
                                <li>1.1 &nbsp;<a className="nav-link" href="">Types of Question</a></li>
                            </Link>
                            <Link className="nav-link" to={'/test'}>
                                <li>1.2 &nbsp;<a className="nav-link" href="">Count Dots</a></li>
                            </Link>
                            <Link className="nav-link" to={'/test'}>
                                <li>1.3 &nbsp;<a className="nav-link" href="">Count Numbers</a></li>
                            </Link>
                            <Link className="nav-link" to={'/test'}>
                                <li>1.4 &nbsp;<a className="nav-link" href="">Choose the Best</a></li>
                            </Link>
                            <Link className="nav-link" to={'/test'}>
                                <li>1.5 &nbsp;<a className="nav-link" href="">Even or Odd</a></li>
                            </Link>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 topics-types">
                        <h5>Shapes</h5>
                        <div className="sub-list">
                            <li>2.1 &nbsp;<a className="nav-link" href="">Types of Question</a></li>
                            <li>2.2 &nbsp;<a className="nav-link" href="">Count Dots</a></li>
                            <li>2.3 &nbsp;<a className="nav-link" href="">Count Numbers</a></li>
                            <li>2.4 &nbsp;<a className="nav-link" href="">Choose the Best</a></li>
                            <li>2.5 &nbsp;<a className="nav-link" href="">Even or Odd</a></li>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 topics-types">
                        <h5>Patterns</h5>
                        <div className="sub-list">
                            <li>3.1 &nbsp;<a className="nav-link" href="">Types of Question</a></li>
                            <li>3.2 &nbsp;<a className="nav-link" href="">Count Dots</a></li>
                            <li>3.3 &nbsp;<a className="nav-link" href="">Count Numbers</a></li>
                            <li>3.4 &nbsp;<a className="nav-link" href="">Choose the Best</a></li>
                            <li>3.5 &nbsp;<a className="nav-link" href="">Even or Odd</a></li>
                        </div>
                    </div>
                </div>

                <div className="top-space"></div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 topics-types">
                        <h5>Comparing and Ordering</h5>
                        <div className="sub-list">
                            <li>4.1 &nbsp;<a className="nav-link" href="">Types of Question</a></li>
                            <li>4.2 &nbsp;<a className="nav-link" href="">Count Dots</a></li>
                            <li>4.3 &nbsp;<a className="nav-link" href="">Count Numbers</a></li>
                            <li>4.4 &nbsp;<a className="nav-link" href="">Choose the Best</a></li>
                            <li>4.5 &nbsp;<a className="nav-link" href="">Even or Odd</a></li>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 topics-types">
                        <h5>Addition</h5>
                        <div className="sub-list">
                            <li>5.1 &nbsp;<a className="nav-link" href="">Types of Question</a></li>
                            <li>5.2 &nbsp;<a className="nav-link" href="">Count Dots</a></li>
                            <li>5.3 &nbsp;<a className="nav-link" href="">Count Numbers</a></li>
                            <li>5.4 &nbsp;<a className="nav-link" href="">Choose the Best</a></li>
                            <li>5.5 &nbsp;<a className="nav-link" href="">Even or Odd</a></li>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 topics-types">
                        <h5>Subtraction</h5>
                        <div className="sub-list">
                            <li>6.1 &nbsp;<a className="nav-link" href="">Types of Question</a></li>
                            <li>6.2 &nbsp;<a className="nav-link" href="">Count Dots</a></li>
                            <li>6.3 &nbsp;<a className="nav-link" href="">Count Numbers</a></li>
                            <li>6.4 &nbsp;<a className="nav-link" href="">Choose the Best</a></li>
                            <li>6.5 &nbsp;<a className="nav-link" href="">Even or Odd</a></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}