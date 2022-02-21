import { Button } from "@mui/material";
import { useState, useHistory } from "react";
import ErrorMessage from "./ErrorMessage";
import "./question.css"
import Quiztest from "./quiztest";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  // let first_question="";

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    // else if (i === correct) return "select";
  };
  console.log(Quiztest);

  setQuestions(Quiztest);
  Quiztest.map((i) => {
    
  });

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) {
      setScore(score + 1)
    };
    // setError(false);
    console.log(i);
  };
 

  const handleNext = (i) => {
    console.log(selected);
    if (currQues > 8) {
      //   history.push("/result");
      
    }

    else if (selected) {      
      setCurrQues(currQues + 1);
     
      setSelected();
    } else setError("Please select an option first");
  };

  //   const handleQuit = () => {
  //     setCurrQues(0);
  //     setQuestions();
  //   };

  return (
    <div>
      <div className="question">
        {/* <h2>Question {currQues + 1} :</h2> */}
        <div className="singleQuestion">
          <h4>{currQues + 1}. {questions[currQues].question}</h4>
          <div className="options">
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {options &&
              options.map((i) => (
                <button className="btn btn-outline-secondary"
                  //className={`singleOption  ${selected && handleSelect(i)}`}
                  key={i}
                  onClick={() => handleCheck(i)}
                // disabled={selected} 
                >
                  {i}
                </button>
                
              ))}

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
          
            <Button
              variant="contained"
              color="success"
              size="large"
              style={{ width: 185 }}
              
              // className={`singleOption  ${selected && handleSelect(i)}`}
              onClick={() => handleNext()}
            >
              {currQues > 20 ? "Submit" : "Submit"}
            </Button>
            
          </div>
        </div>
      </div>
    </div>

  );
};

export default Question;