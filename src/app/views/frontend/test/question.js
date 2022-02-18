import { Button } from "@mui/material";
import { useState, useHistory } from "react";
import ErrorMessage from "./ErrorMessage";
import "./question.css"
import Quiztest from "./quiztest";

const Question = () =>  {
  const [selected, setSelected] = useState();
  const [correct, setCorrect] = useState();
  const [currQues, setCurrQues] = useState(0);
  const [error, setError] = useState(false);

// let currQues=0;
console.log(currQues);
  // let first_question="";

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    // else if (i === correct) return "select";
  };
  
  const handleNext = () => {
   if (selected) {
    setCurrQues(currQues + 1);

    
   } else setError("Please select an option first");
  }
  
  const handleCheck = (i) => {
    setSelected(i);
   
     setError(false);
   
  };
  
  // const handleNext = () => {
  //   console.log(selected);
  //   if (currQues > 8) {
  //     //   history.push("/result");
      
  //   }

  //   else if (selected) {      
  //     setCurrQues(currQues + 1);
     
  //     setSelected();
  //   } else setError("Please select an option first");
  // };

  //   const handleQuit = () => {
  //     setCurrQues(0);
  //     setQuestions();
//   //   };

  return (
    <div>
      <div className="question">
        {/* <h2>{currQues +1}</h2> */}
        <div className="singleQuestion">
        {error && <ErrorMessage>{error}</ErrorMessage>}
          {
            Quiztest[currQues]?.question
          }

         {/* <p>Options</p> */}
        
          { 
            Quiztest[currQues]?.options.map((optionss, i) => (
            <button 
            className={`singleOption  ${selected && handleSelect(i)}`}
            onClick={() => handleCheck(i)}>{optionss}</button>
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
              onClick={handleNext}
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
