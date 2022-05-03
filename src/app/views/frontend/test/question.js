import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./question.css"
import { Helmet } from 'react-helmet';
import QuizTestService from "../Services/QuizTestService";
import { config } from "app/config";
import { useStopwatch } from 'react-timer-hook';
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from 'react-router-dom';
toast.configure();

const Question = () => {
  const navigate = useNavigate();
  let quizservice = new QuizTestService(config.baseURL)
  const [questions = [], setQuestions] = useState();
  const [selected, setSelected] = useState();
  const [score, setScore] = useState(0);
  const [currIndex, setCurrIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showresult, setshowresult] = useState(false);
  let userData = JSON.parse(localStorage?.getItem?.("user-info"));
  if (userData === null) {
    toast.error('Please Login to Atten Test');
    navigate('user/login')

  } else if (userData?.role === 3) {
    toast.error('Student Only Atten the tests');
    navigate('/home')
  }
  const {
    seconds,
    minutes,
    hours,
  } = useStopwatch({ autoStart: true });

  const id = window.location.pathname.split("-").pop();

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const data = { subcategory_id: id };
      const res = await quizservice.getQuestions(data);

      if (res.data.status) {
        setQuestions(res.data.data);
        setScore(res.data.score);

      }
      else {

      }
    }
    catch (e) {
      console.log(e);
    }

  }
  const handleCheck = (e) => {

    let value = e.target.value;
    if (value) {
      setSelected(value);
    }
  };


  const handleNext = async () => {
    let time = `${hours} : ${minutes} : ${seconds}`;

    if (selected) {

      if (selected === questions[currIndex]?.answer) {

        setSelected();
        var n1 = parseInt(score);
        var n2 = parseInt(1);
        var newscore = n1 + n2;
        //have to store the data for every question 
        let data = {
          question_id: questions[currIndex].id, correct_answer: questions[currIndex]?.answer
          , student_answer: selected, subcategory_id: id, score: parseInt(newscore), time: time, standard_id: questions[currIndex]?.standard_id, subject_id: questions[currIndex]?.subject_id
        }
        await quizservice.create(data).then((res) => {
          setScore(parseInt(res.data.score));
          setCurrIndex(currIndex + 1);

        });

      }//student answer is wrong
      else {
        setLoading(true);
        setError('Wrong Answer')
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        //have to store the data for every question 
        let data = {
          question_id: questions[currIndex].id, correct_answer: questions[currIndex]?.answer
          , student_answer: selected, subcategory_id: id, score: parseInt(score), time: time, standard_id: questions[currIndex]?.standard_id, subject_id: questions[currIndex]?.subject_id
        }

        await quizservice.create(data).then((res) => {
          setScore(parseInt(res.data.score));
          setCurrIndex(currIndex + 1);
        });
        setSelected();
      }
    }

    else {
      setLoading(true);
      setError('Please select an option first')
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      //toast.error("Please select an option first");
    }
  }

  const completeTest = () => {
    setshowresult(true);
    setTimeout(() => {
      setshowresult(false);
      navigate('/analytics/usage');
    }, 10000);
    // navigate('/test_completed-' + id);
  }
  console.log(questions.length);
  return (
    <div>
      <div className="main">
        {
          showresult === false ? (

            <div className="container">
              <div>
                <Helmet>
                  <title>KidzUni | Quiz Test</title>
                </Helmet>

                {questions.length > 0 ? (
                  <>
                    <div className="row top-space">

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-6">
                        <div className="timespent-score">
                          <h5>score: {score}</h5>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-6">
                        <div className="timespent-score">
                          <h5>Time Spent: <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span></h5>
                        </div>
                      </div>
                    </div>
                    <div className="question">
                      <div className="singleQuestion">
                        <div className="question-error-msg">
                          {questions[currIndex]?.question_image ? (<img src={questions[currIndex]?.question_image} alt="..." width={100} />) : (<p></p>)

                          }
                          <p>
                            {questions[currIndex]?.question_text}
                          </p>
                          {loading ? (
                            <ErrorMessage>{error}</ErrorMessage>
                          ) : (
                            <div>

                            </div>
                          )}
                          <div className="controls">
                            {questions.length > currIndex ? (
                              <p>

                                <button
                                  className='options-button' name="options" value={questions[currIndex]?.option1}
                                  onClick={(e) => handleCheck(e)}>{questions[currIndex]?.option1}</button>
                                <button
                                  className='options-button' name="options" value={questions[currIndex]?.option2}
                                  onClick={(e) => handleCheck(e)}>{questions[currIndex]?.option2}</button>

                              </p>
                            ) : (


                              <Button
                                variant="contained"
                                color="success"
                                size="large"
                                className="test-complete-submit"
                                style={{ width: 185 }}
                                onClick={completeTest}
                              >Complete
                              </Button>


                            )}
                          </div>
                        </div>

                        <div className="controls">
                          {questions.length > currIndex ? (
                            <Button
                              variant="contained"
                              color="success"
                              size="large"
                              className="test-complete-submit"
                              style={{ width: 185 }}
                              onClick={() => handleNext()}
                            >Submit
                            </Button>
                          ) : (
                            <></>
                          )}

                        </div>
                      </div>
                    </div>
                  </>
                ) : (<p>No New Question Found for You !.. </p>)}
              </div>

            </div>
          ) : (<div className="success">

            <div className="planet-cont">
              <div className="planet"></div>
              <div className="rings"></div>
            </div>
            <div className="test-completed">
              <div className="congarts">
                <h1>Congratulations!</h1>
              </div>
              {/* <div className="test-complete-className">


              <span> Sub-Topic(cout 1 to 3)</span>
            </div> */}

              <div className="checkmark-circle">
                <div className="background"></div>
                <div className="checkmark draw"></div>
              </div>
              <h4>You Have Successfully Completed.</h4>

              <div className="score-board">
                <span>
                  <img src=" assets/frontend/images/credit-score.png" alt="score" />
                  <p>Smart scroe</p>
                </span>
                <span>
                  <img src=" assets/frontend/images/time-spent.png" alt="time" />
                  <p>Time Spent</p>
                </span>
                <span>
                  <img src=" assets/frontend/images/target.png" alt="question" />
                  <p>Questions</p>
                </span>

              </div>
            </div>

            <div className="yellow-planet">
              <div className="planet-cont bottom">
                <div className="planet bottom"></div>
                <div className="rings bottom"></div>
              </div>
            </div>


            <div className="star"></div>
            <div className="star k"></div>


            <div className="rocket-cont">
              <div className="rocket-top"></div>
              <div className="rocket-bottom"></div>
              <div className="flame"></div>
            </div>
          </div>)}
      </div>
    </div >
  );
};

export default Question;