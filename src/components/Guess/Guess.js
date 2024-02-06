import React from 'react'
import { NUM_OF_LETTERS_PER_WORD } from '../../constants'
import { checkGuess } from '../../game-helpers'

function Guess({ answer, guess }) {
  const numberOfColumns = NUM_OF_LETTERS_PER_WORD
  let checkedLetters
  if (guess && guess.length) {
    checkedLetters = checkGuess(guess, answer)
  } else {
    checkedLetters = Array.from({ length: numberOfColumns }, () => ({
      letter: '',
      status: 'unchecked',
    }))
  }

  return (
    <p className="guess">
      {checkedLetters &&
        checkedLetters.map(({ letter, status }, index) => {
          const classes = ['cell', status]
          return (
            <span key={`cell-${index}`} className={classes.join(' ')}>
              {letter}
            </span>
          )
        })}
    </p>
  )
}

export default Guess
