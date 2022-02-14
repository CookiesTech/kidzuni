// import { CircularProgress } from "@mui/material"
// import { useEffect, useState } from "react";
// import "./question.css"


// const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
//   const [options, setOptions] = useState();
//   const [currQues, setCurrQues] = useState(0);
//   // const [score, setScore] = useState();

//   // useEffect(() => {
//   //   console.log(questions);

//   //   setOptions(
//   //     questions &&
//   //     handleShuffle([
//   //       questions[currQues]?.correct_answer,
//   //       ...questions[currQues]?.incorrect_answers,
//   //     ])
//   //   );
//   // }, [questions, currQues]);



//   const handleShuffle = (options) => {
//     return options.sort(() => Math.random() - 0.5);
//   };
//   console.log(options);

//   return (
//     <div className="quiz">
//       {/* <span className="subtitle">Welcompppe</span> */}
//       {questions ? ( 
//         <div className="quizInfo">
//           <span>{questions[currQues].category}</span>
//           <span>
//             {questions[currQues].difficulty}
//             Score : {score} </span>
//         </div>
//       ) : (

//         <CircularProgress />
//       )}

//     </div>
//   );
// };

// export default Quiz;
