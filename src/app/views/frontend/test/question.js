import { Button, Hidden } from "@mui/material";
import { useState, useHistory, useEffect } from "react";
import Marks from "./time";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorMessage from "./ErrorMessage";
import "./question.css"

import Quiztest from "./quiztest";
toast.configure();

const Question = () => {
  const [selected, setSelected] = useState();
  const [score, setScore] = useState(0);
  const [currIndex, setCurrIndex] = useState(0);
  const [question, setQuestion] = useState();
  const [error, setError] = useState();
  const [show, setShow] = useState();

  // let currQues=0;
  //console.log(currQues);
  // let first_question="";


  const handleCheck = (e) => {  //user selected value.

    let value = e.target.value;
    if (value) {
      setSelected(value);
    }
  };

  const handleNext = () => {   //Change questions and score increase.

    if (selected) {
      console.log(Quiztest[currIndex]?.correctAnswer);

      // console.log(Quiztest[currIndex]?.question);
      // console.log(error);

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
      }
    }

    else {    //Set Error option not selected 

      toast.error("Please select an option first");
    }
  }

  return (
    <div>
      <div className="row top-space">
        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
          <Marks />
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
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
            {/* <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    style={{ width: 185 }}
                    href="/"
                    onClick={() => handleQuit()}
                >
                    Quit
                </Button> */}
            {/* <h2>{score}:</h2> */}

            {/* <Link className="" to="/test-completed"> */}
            <Button
              variant="contained"
              color="success"
              size="large"
              style={{ width: 185 }}

              // className={`singleOption  ${selected && handleSelect(i)}`}
              onClick={() => handleNext()}
            >Submit

            </Button>
            {/* </Link> */}

          </div>
        </div>
      </div>
    </div>

  );
};

export default Question;