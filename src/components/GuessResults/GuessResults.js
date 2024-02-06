import React from 'react'
import Guess from '../Guess'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function GuessResults({ answer, guesses }) {
  const numberOfRows = NUM_OF_GUESSES_ALLOWED

  const emptyRows = range(numberOfRows - guesses.length)

  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <Guess key={guess} answer={answer} guess={guess} />
      ))}
      {emptyRows.map((guess, index) => (
        <Guess key={`empty-row-${index}`} answer={answer} guess={''} />
      ))}
    </div>
  )
}

export default GuessResults
