import React, { useState, useEffect } from 'react';
import './dombyraGame.css';

export const DombyraGame = () => {
  const [fruits, setFruits] = useState([]);
  const [boxPosition, setBoxPosition] = useState({ x: window.innerWidth / 2 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [missedFruits, setMissedFruits] = useState(0);

  useEffect(() => {
    const generateFruit = () => {
      const fruit = {
        id: Math.random(),
        x: Math.floor(Math.random() * window.innerWidth),
        y: 0,
        speed: Math.random(), // Random speed between 1 and 4
      };
      setFruits((prevFruits) => [...prevFruits, fruit]);
    };

    const intervalId = setInterval(generateFruit, 1000); // Faster fruit appearance (adjust as needed)

    const handleKeyDown = (event) => {
      const movement = event.key === 'ArrowLeft' ? -10 : 10; // Faster box movement (adjust as needed)
      setBoxPosition((prevPosition) => ({
        x: Math.max(0, Math.min(window.innerWidth - 100, prevPosition.x + movement)),
      }));
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleCollision = (fruit) => {
    setScore((prevScore) => prevScore + 1);
    setFruits((prevFruits) => prevFruits.filter((f) => f.id !== fruit.id));
  };

  const handleMissedFruit = () => {
    setMissedFruits((prevMissed) => {
      const newMissed = prevMissed + 1;
      if (newMissed >= 20) {
        setGameOver(true);
      }
      return newMissed;
    });
  };

  return (
    <div className="App">
      <h1>Catch the Fruits! Score: {score}</h1>
      <div className="game-container">
        {fruits.map((fruit) => (
          <div
            key={fruit.id}
            className="fruit"
            style={{ left: `${fruit.x}px`, top: `${fruit.y}px` }}
            onAnimationEnd={() => {
              const isColliding =
                fruit.y >= window.innerHeight - 50 && // Check within a larger area
                fruit.x >= boxPosition.x - 25 &&
                fruit.x <= boxPosition.x + 75;

              if (isColliding) {
                handleCollision(fruit);
              } else if (fruit.y >= window.innerHeight) {
                handleMissedFruit();
                setFruits((prevFruits) => prevFruits.filter((f) => f !== fruit)); // Remove fruit even if missed
              }
            }}
          />
        ))}
        <div className="box" style={{ left: `${boxPosition.x}px` }} />
      </div>
      {gameOver && <div className="game-over">Game Over!</div>}
    </div>
  );
};
