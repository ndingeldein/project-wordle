import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessResults from '../GuessResults'
import GuessInput from '../GuessInput'
import Banner from '../Banner'
import Keyboard from '../Keyboard'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS))
  const [guesses, setGuesses] = React.useState([])
  const [possibleGuess, setPossibleGuess] = React.useState('')
  const [gameResult, setGameResult] = React.useState('')

  if (guesses.length === 0) {
    console.log('Answer:', answer)
  }

  function restartGame() {
    setGuesses('')
    setGuesses([])
    setPossibleGuess('')
    setGameResult('')
    setAnswer(sample(WORDS))
  }

  function handleSubmitGuess(event) {
    event.preventDefault()

    if (guesses.includes(possibleGuess)) {
      return
    }

    const nextGuesses = [...guesses, possibleGuess]
    setGuesses(nextGuesses)
    setPossibleGuess('')

    if (possibleGuess === answer) {
      setGameResult('win')
    } else if (nextGuesses.length == NUM_OF_GUESSES_ALLOWED) {
      setGameResult('lose')
    }
  }

  return (
    <>
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput
        possibleGuess={possibleGuess}
        setPossibleGuess={setPossibleGuess}
        handleSubmitGuess={handleSubmitGuess}
        gameResult={gameResult}
      />
      {gameResult && gameResult === 'win' && (
        <Banner status={gameResult}>
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>
              {guesses.length} guess{guesses.length > 1 ? 'es' : ''}
            </strong>
            . <button onClick={restartGame}>Restart</button>
          </p>
        </Banner>
      )}
      {gameResult && gameResult === 'lose' && (
        <Banner status={gameResult}>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.{' '}
            <button onClick={restartGame}>Restart</button>
          </p>
        </Banner>
      )}
      <Keyboard answer={answer} guesses={guesses} />
    </>
  )
}

export default Game
