import React from 'react'
import { NUM_OF_LETTERS_PER_WORD } from '../../constants'

function GuessInput({ possibleGuess, setPossibleGuess, handleSubmitGuess, gameResult }) {
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        title="5 letter word"
        id="guess-input"
        type="text"
        value={possibleGuess}
        required
        pattern={`[a-zA-Z]{${NUM_OF_LETTERS_PER_WORD}}`}
        maxLength="5"
        disabled={gameResult}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase()
          setPossibleGuess(nextGuess)
        }}
      />
    </form>
  )
}

export default GuessInput
