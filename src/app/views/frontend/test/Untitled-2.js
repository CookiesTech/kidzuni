import React from "react";
import { useState, useEffect, state, setState } from 'react';


const MAX_QUESTIONS = 10;
var originalQuestions =[
  {
    question: "1. Who was the first man on the Moon?",
    answers: ["Yuri Gagarin", "Neil Armstrong", "Elon Musk", "Buzz Astral"],
    correctIndex: 1
  },
  {
    question: "2. Who won the FIFA World Cup in 2018?",
    answers: ["Croatia", "Brazil", "France", "Italy"],
    correctIndex: 2
  },
  {
    question: "3. What is the capital of Germany?",
    answers: ["Vienna", "Frankfurt", "Munich", "Berlin"],
    correctIndex: 3
  },
  {
    question: "4. When did United States got independence?",
    answers: ["1773", "1607", "1776", "1803"],
    correctIndex: 2
  },
  {
    question: "5. What's the tallest building in the United States?",
    answers: ["One World Trade Center", "Sears Tower", "Empire State Building", "Space Needle"],
    correctIndex: 0
  },
  {
    question: "6. Which year Curiosity robotic space probe landed on Mars?",
    answers: ["1997", "2001", "2012", "2016"],
    correctIndex: 2
  },
  {
    question: "7. How many electrons does oxygen have?",
    answers: ["2", "4", "6", "8"],
    correctIndex: 3
  },
  {
    question: "8. What is the longest river in the world?",
    answers: ["Amazon River", "The Nile", "Yellow River", "Mississippi River"],
    correctIndex: 1
  },
  {
    question: "9. What is the largest continent in the world?",
    answers: ["Asia", "Africa", "North America", "South America"],
    correctIndex: 0
  },
  {
    question: "10. Who was the 3rd president of the United States?",
    answers: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "Benjamin Franklin"],
    correctIndex: 1
  },
];

function Score(props){
  return(
    <div>
      <div id="score-group">
        <div className="scores">Score: {props.correct * 10 } / 100</div>
      </div>
    </div>
  )
}

function Answers(props){
  return(
    <div id="answers-group">
      <button id={0} className="noselect" onClick={() => props.handleClick(0)} >{props.answersArray[0]} </button>
      <button id={1} className="noselect"  onClick={() => props.handleClick(1)}>{props.answersArray[1]} </button>
      <button id={2} className="noselect" onClick={() => props.handleClick(2)}>{props.answersArray[2]} </button>
      <button id={3} className="noselect" onClick={() => props.handleClick(3)}>{props.answersArray[3]} </button>
    </div>    
  )  
}

function Question(props){
  return (
    <div id="question">{props.question}</div>
  )
}

class Quiz extends React.Component{  
  constructor(props){
    super(props);    
    this.state = {
      correctAns: 0,
      incorrectAns: 0,
      questionNum: 0,   
      question: "",
      answersArray: [],
      correctAnsIndex: 0,
      gameOver: false,
      firstGame: true,
      //deep copy of object with questions
      questions:  JSON.parse(JSON.stringify(originalQuestions))
    }
    
    this.handleClick = this.handleClick.bind(this);
    this.pickQuestion = this.pickQuestion.bind(this);
    this.newGame = this.newGame.bind(this);
  }
  
  handleClick(id){
    console.log("clicked the id #: " + id);
       
    if(id == this.state.correctAnsIndex){
      this.setState({
        correctAns: this.state.correctAns + 1
      });
    }
    else{
      this.setState({
        incorrectAns: this.state.incorrectAns + 1
      });
    } 
    if(this.state.questionNum >=  MAX_QUESTIONS){
      this.setState({
        gameOver: true
      });
      return;
    }
    setTimeout(this.pickQuestion, 300);
  }
  
  pickQuestion(){
    let idx = Math.floor(Math.random()*this.state.questions.length);
    let questionObj = this.state.questions[idx];
    this.setState({
      questionNum: this.state.questionNum + 1,
      question: questionObj.question,
      answersArray: questionObj.answers,
      correctAnsIndex: questionObj.correctIndex,
      questions: this.state.questions.slice(0,idx).concat(this.state.questions.slice(idx+1,this.state.questions.length))
    });
  }
  
  newGame(){
    this.setState({
       firstGame: false,
       gameOver: false,
       questionNum: 1,
       correctAns: 0,
       incorrectAns: 0,
      //deep copy of object with questions
      questions:  JSON.parse(JSON.stringify(originalQuestions))   
    }, this.pickQuestion() );  
  }
  
 
  
  render(){
    if(this.state.firstGame){
      return(
        <div id="outer">
          <div id="main">
          <Question question="Welcome to Trivia Game" />
            <button onClick={this.newGame}>Start New Game</button>
          <br/><br/>
        </div>
       </div>
      );
    }
    else if(this.state.gameOver){
      return(
        <div id="outer">
          <div id="main">
          <Question question={"GAME OVER"} />
          <button onClick={this.newGame}>Try Again</button>
          <Score correct={this.state.correctAns} />
        </div>
       </div>
      );
    }    
    else{
      return(
        <div id="outer">
          <div id="main">
          <Question question={this.state.question} />
          <Answers answersArray={this.state.answersArray} handleClick={this.handleClick} />
          <Score correct={this.state.correctAns} />
        </div>
       </div>
      );
    }
    
  }
}

export default Quiz;