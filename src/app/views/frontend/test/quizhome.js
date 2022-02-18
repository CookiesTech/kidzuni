import { Button } from "@mui/material";
import { useState, useEffect } from "react";
// import {CircularProgress} from "@mui/material"
import axios from "axios"
import Question from "./question"
import Quiztest from "./quiztest"


const QuizHome = () => {
 
  return(
    <div>
      <Question />
    </div>
  )
  
};

export default QuizHome;
