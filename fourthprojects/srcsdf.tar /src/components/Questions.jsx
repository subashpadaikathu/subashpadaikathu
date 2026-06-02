import React, { useContext, useState } from 'react'
import questions from '../assets/questions.json'
import { quizContext } from '../App';
import { useNavigate } from 'react-router-dom';

function Questions() {
  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { score, setScore } = useContext(quizContext);


  function nextQuestion() {

    if (optionChosen == questions[currentQuestion].answer) {
      setScore(score + 1)
    }
    setCurrentQuestion(currentQuestion + 1)
  }

  function finishQuestion() {
    if (optionChosen == questions[currentQuestion].answer) {
      setScore(score + 1)
    }
    navigate('/result')
  }

  return (
    <div>
      <h1>{questions[currentQuestion].prompt}</h1>
      {
        ['A', 'B', 'C', 'D'].map((v) => (
          <button onClick={() => setOptionChosen(`option${v}`)}>{questions[currentQuestion][`option${v}`]}</button>
        ))
      }
      {currentQuestion == questions.length - 1 ? <button onClick={finishQuestion}>Finish</button> : <button onClick={nextQuestion}>Next</button>}

    </div>
  )
}

export default Questions