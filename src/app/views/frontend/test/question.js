import { Button, Hidden } from "@mui/material";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorMessage from "./ErrorMessage";
import "./question.css"

import Quiztest from "./quiztest";
toast.configure();

const Question = () => {
  const [last, setLast] = useState(false)
  const [selected, setSelected] = useState();
  const [score, setScore] = useState(0);
  const [currIndex, setCurrIndex] = useState(0);
  const [error, setError] = useState();
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });
  useEffect(() => {
    let isCancelled = false;

    const advanceTime = () => {
      setTimeout(() => {
        let nSeconds = time.seconds;
        let nMinutes = time.minutes;
        let nHours = time.hours;

        nSeconds++;

        if (nSeconds > 59) {
          nMinutes++;
          nSeconds = 0;
        }
        if (nMinutes > 59) {
          nHours++;
          nMinutes = 0;
        }
        if (nHours > 24) {
          nHours = 0;
        }

        !isCancelled && setTime({ seconds: nSeconds, minutes: nMinutes, hours: nHours });
      }, 1000);
    };
    advanceTime();

    return () => {

      isCancelled = true;
    };
  }, [time]);

  const handleCheck = (e) => {  //user selected value.

    let value = e.target.value;
    if (value) {
      setSelected(value);
    }
  };

  const handleNext = () => {   //Change questions and score increase.
    //to check is this last question
    if (Quiztest[currIndex]?.question) {
      if (selected) {

        if (selected === Quiztest[currIndex]?.correctAnswer) {
          setError(true);
          setError(false);
          setScore(score + 1);
          setCurrIndex(currIndex + 1);
          setSelected();

        } else {

          setError("🦄 Sorry Incorrect Answer"); // Incorrect Answer
          setCurrIndex(currIndex + 1);
          setSelected();
          setTimeout(function () { setError() }, 1000);
        }
      }

      else {    //Set Error option not selected 

        toast.error("Please select an option first");
      }
    }
    else {
      console.log(2);
      setLast(true)
    }

  }

  return (
    <div>
      <div className="row top-space">
        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-6">
          <div className="row quiz-title">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 game-details-container">
              <div className="count-time">Time Spent :
                <p>
                  {`        
                            ${time.hours < 10 ? '0' + time.hours : time.hours} :
                            ${time.minutes < 10 ? '0' + time.minutes : time.minutes} :
                            ${time.seconds < 10 ? '0' + time.seconds : time.seconds}
                            `}
                </p>
              </div>

            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-6">
          <div className="timespent-score">
            <h5>score: {score}</h5>
          </div>
        </div>
      </div>

      <div className="question">
        <div className="singleQuestion">
          <div className="question-error-msg">
            {error && <div className=""><ErrorMessage>{error}</ErrorMessage></div>}
            <p>
              {
                Quiztest[currIndex]?.question
              }
            </p>

            <div className="select-option">
              {
                Quiztest[currIndex]?.options.map((options, i) => (
                  <button
                    className='options-button' name="options" value={options}
                    onClick={(e) => handleCheck(e)} >{options}</button>
                )
                )
              }
            </div>
          </div>

          <div className="controls">
            <Button
              variant="contained"
              color="success"
              size="large"
              className="test-complete-submit"
              style={{ width: 185 }}
              onClick={() => handleNext()}
            > {last ? "Complete" : "Next"}

            </Button>

          </div>
        </div>
      </div>
    </div>

  );
};

export default Question;