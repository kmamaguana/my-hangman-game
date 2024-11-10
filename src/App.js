// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

const words = ["javascript", "docker", "react", "programming", "computer"]; // Lista de palabras a adivinar

function App() {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [gameStatus, setGameStatus] = useState('playing');

  useEffect(() => {
    startGame();
  }, []);

  const startGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
    setGuessedLetters([]);
    setWrongAttempts(0);
    setGameStatus('playing');
  };

  const handleGuess = (letter) => {
    if (gameStatus !== 'playing' || guessedLetters.includes(letter)) return;

    setGuessedLetters([...guessedLetters, letter]);

    if (!word.includes(letter)) {
      setWrongAttempts(wrongAttempts + 1);
      if (wrongAttempts + 1 === 6) {
        setGameStatus('lost');
      }
    } else if (word.split('').every(char => guessedLetters.includes(char) || char === letter)) {
      setGameStatus('won');
    }
  };

  const renderWord = () => word.split('').map((char, i) =>
    guessedLetters.includes(char) ? char : '_').join(' ');

  return (
    <div className="App">
      <h1>WELCOME TO MY FIRST PAGE IN REACT</h1>
      <h1>Hangman game</h1>
      <p>Words: {renderWord()}</p>
      <p>Failed Attempts: {wrongAttempts}/6</p>

     
      <img
        src={`/images/ahorcado.gif`}
        alt={`Intento fallido ${wrongAttempts}`}
        className="hangman-image"
      />

      {gameStatus === 'playing' ? (
        <div className="letters">
          {'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
            <button key={letter} onClick={() => handleGuess(letter)} disabled={guessedLetters.includes(letter)}>
              {letter}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>{gameStatus === 'won' ? '¡Ganaste!' : 'Perdiste'}</h2>
          <button onClick={startGame}>Jugar de nuevo</button>
        </div>
      )}
    </div>
  );
}

export default App;
