import React from "react";
import { useState, useEffect } from 'react';

export default function Quiz() {

    const questions = [
        {
          questionText: '1.  Who is Prime Minister of India?',
          answerOptions: [
            { answerText: 'Vijay Rupani', isCorrect: false },
            { answerText: 'Manmohan singh', isCorrect: false },
            { answerText: 'Narendra Modi', isCorrect: true },
            { answerText: 'Deep Patel', isCorrect: false },
          ],
        },
        {
          questionText: '2. Who is CEO of Tata?',
          answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Ratan Tata', isCorrect: true },
            { answerText: 'Mukesh Ambani', isCorrect: false },
            { answerText: 'Gautam Adani', isCorrect: false },
          ],
        },
        {
          questionText: '3. who is richest person in the world?',
          answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Mukesh Ambani', isCorrect: false },
            { answerText: 'Warren Buffett', isCorrect: false },
          ],
        },
        {
          questionText: '4. how many countries in the world?',
          answerOptions: [
            { answerText: '120', isCorrect: false },
            { answerText: '183', isCorrect: false },
            { answerText: '170', isCorrect: false },
            { answerText: '195', isCorrect: true },
          ],

          
          
        },
      ]
    
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [showScore, setShowScore] = useState(false);
      const [score, setScore] = useState(0);
      const [clicked, setclicked] = useState(false);

      const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true) {
          setScore(score + 1);
        }
        setclicked(true);
    } 
     const HandleNext = () => {
     
     
         setclicked(false);
        const nextQuetions = currentQuestion + 1;
        
        if (nextQuetions < questions.length) {
          setCurrentQuestion(nextQuetions);
        }
        else {
          setShowScore(true)
        }
      }
    
      return (
        <>
          {/* <h1 className='header'>Quiz</h1> */}
          <div className="app-wrapper">
            {showScore}
              <div className='score-section'>
                You scored<br /> {score * 10} out of {questions.length / 10*100}
              </div>
            
            </div>
             
                <>
                  <div className='question-section'>
                    {/* <div className='question-count'>
                      <span>Question {currentQuestion + 1}/</span>{questions.length}
                    </div> */}
                    <div className='question-text'>
                      {questions[currentQuestion].questionText}
                    </div>
                  </div>
                  
    
                  <div className='answer-section'>
                    {
                      questions[currentQuestion].answerOptions.map((answerOptions) => (
                        <button 
                            // className={'answer-button ${
                            //     clicked && answerOptions.isCorrect ? "correct" : ""
                            // }'}
                        
                        onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                      ))
                    }
                  </div>

                  <div className="submit-test">
                    {/* {
                      questions[currentQuestion]((showScore) => ( */}
                      <button className="btn btn-success" onClick={HandleNext} disabled={!clicked}>Submit</button>
                      {/* ))
                    }  */}
                  
                  </div>
                </>
        </>
      );
 }