import { Button } from "@mui/material";
import { useState, useHistory } from "react";
import ErrorMessage from "./ErrorMessage";
import "./question.css"
import Quiztest from "./quiztest";

const Question = () => {
  const [selected, setSelected] = useState();

  const [correct, setCorrect] = useState();
  const [score, setScore] = useState(0);

  const [currIndex, setCurrIndex] = useState(0);
  const [error, setError] = useState(false);

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
      if (selected === Quiztest[currIndex]?.correctAnswer) {
        setScore(score + 1);
        setCurrIndex(currIndex + 1);
        setSelected();
      } else {
        setCurrIndex(currIndex + 1);
        setSelected();
      }

    } else {    //Set Error
      setError("Please select an option first");
    }

  }


  return (
    <div>
      <div className="question">
        <h4>score: {score}</h4>
        <div className="singleQuestion">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {
            Quiztest[currIndex]?.question
          }

          {
            Quiztest[currIndex]?.options.map((options, i) => (
              
                <button
                  className='options-button' name="options" value={options}
                  onClick={(e) => handleCheck(e)} >{options}</button>
             
            )
            )
          }

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

            <Button
              variant="contained"
              color="success"
              size="large"
              style={{ width: 185 }}

              // className={`singleOption  ${selected && handleSelect(i)}`}
              onClick={() => handleNext()}
            >Submit
              {/* {currQues > 20 ? "Submit" : "Submit"} */}
            </Button>

          </div>
        </div>
      </div>
    </div>

  );
};

export default Question;
