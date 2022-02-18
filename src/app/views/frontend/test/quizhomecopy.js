import { Button } from "@mui/material";
import { useState, useEffect } from "react";
// import {CircularProgress} from "@mui/material"
import axios from "axios"
import Question from "./question"
import Quiztest from "./quiztest"


const QuizHome = () => {
 
  // const [category, setCategory] = useState("");
  // const [difficulty, setDifficulty] = useState("");
  // const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [error, setError] = useState(false);
  const [options, setOptions] = useState([]);
  const [currQues, setCurrQues] = useState(0);
  const [score, setScore] = useState(0);
  const [fetchquestion, setFetchQuestion]=useState(0);
  useEffect(() => {
   
     fetchQuestions();
     setOptions(
     
       questions &&
       handleShuffle([
         questions[currQues]?.correct_answer,
         ...questions[currQues]?.incorrect_answers,
       ])
                                                            
     );
   }, []);
   let first_question='';
  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    
    
    setQuestions(data.results);
    data.results.map((a,i) => {
      first_question=a;
    });
   
  };
  const handleSubmit = () => {

    fetchQuestions();
    // history.push("/quiz");
  };

  

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
  

  return (
    <div className="content">
      <div className="settings">
        {/* <span style={{ fontSize: 30 }}>Quiz Settings</span> */}
        <div className="settings__select">
         
          {/* <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button> */}
        </div>
      </div>

      <div className="quiz">
        {/* <div className="questions">{fetchQuestions}</div> */}
        
        {questions ? (
          <>
            <div className="quizInfo">
              {/* <span>{questions[currQues].category}</span> */}
              <span> Score : {score} </span>
            </div>

            <Question
              // fetchQuestions={fetchQuestions}
              currQues={currQues}
              setCurrQues={setCurrQues}
              questions={questions}
              options={options}
              correct={questions[currQues]?.correct_answer}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </>

        ) : (

          <div />
        )}

      </div>

    </div>
  );
};

export default QuizHome;
