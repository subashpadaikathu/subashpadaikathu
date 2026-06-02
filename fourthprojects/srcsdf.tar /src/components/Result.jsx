import React, { useContext } from 'react'
import { quizContext } from '../App'

function Result() {
  const { user, score } = useContext(quizContext)
  return (
    <div>Result
      <h1>
        {user} = {score}/5
      </h1>
    </div>
  )
}

export default Result