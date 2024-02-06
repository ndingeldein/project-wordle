import React from 'react'
import { checkGuess } from '../../game-helpers'

function Keyboard({ answer, guesses }) {
  const KEYS = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ]

  const statusPriority = {
    correct: 4,
    misplaced: 3,
    incorrect: 2,
    unchecked: 1,
  }

  let checkedLetters = []
  if (guesses.length > 0) {
    checkedLetters = guesses.map((guess) => {
      return checkGuess(guess, answer)
    })
  }

  checkedLetters = flattenAndPrioritize(checkedLetters)

  const keyboardRows = KEYS.map((row, rowIndex) => {
    return row.map((letter) => {
      const status = 'unchecked'
      return {
        row: rowIndex,
        letter,
        status: 'unchecked',
      }
    })
  })

  function flattenAndPrioritize(arrayOfArrays) {
    const result = {}

    arrayOfArrays.forEach((arr) => {
      arr.forEach(({ letter, status }) => {
        if (!result[letter] || statusPriority[status] > statusPriority[result[letter].status]) {
          result[letter] = { letter, status }
        }
      })
    })

    return result
  }

  return (
    <div className="keyboard">
      {keyboardRows.map((row, rowIndex) => {
        return (
          <div key={`row-${rowIndex}`} className="keyboard-row">
            {row.map(({ letter, status }) => {
              status = checkedLetters[letter] ? checkedLetters[letter].status : 'unchecked'

              const classes = ['key', status]
              return (
                <span key={`key-${letter}`} className={classes.join(' ')}>
                  {letter}
                </span>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Keyboard
