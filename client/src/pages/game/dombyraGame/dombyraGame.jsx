import React, { useState, useEffect } from 'react';
import { Howl } from 'howler'; // Sound library for feedback

const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

export const DombyraGame = () => {
  const [notes, setNotes] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [currentExpectedNote, setCurrentExpectedNote] = useState(null);
  const [lives, setLives] = useState(3);
  const [missedNotes, setMissedNotes] = useState(0);

  // Howl sound effects
  //const correctSound = new Howl({ src: ['correct.mp3'] }); // Replace with your sound file
  //const wrongSound = new Howl({ src: ['wrong.mp3'] }); // Replace with your sound file

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newNote = { id: Math.random(), note: NOTE_NAMES[Math.floor(Math.random() * NOTE_NAMES.length)] };
      setNotes([...notes, newNote]);
      setCurrentExpectedNote(newNote.note); // Set expected note when a new note appears
      setMissedNotes(0); // Reset missed notes on new note
    }, 1000); // Add a new note every second

    /*const removeBottomNotes = () => {
      const bottomReachedNotes = notes.filter((note) => {
        const noteElement = document.getElementById(note.id);
        if (noteElement) {
          const noteBottom = noteElement.getBoundingClientRect().bottom;
          return noteBottom >= window.innerHeight;
        }
        return false;
      });

      setNotes(notes.filter((note) => !bottomReachedNotes.includes(note))); // Remove notes that reached bottom
      if (bottomReachedNotes.length > 0) {
        // Handle missed notes reaching bottom (reduce lives, play sound)
        setLives(lives - bottomReachedNotes.length);
        wrongSound.play();
      }
    };

    const combinedIntervalId = setInterval(removeBottomNotes, 100); // Check for bottom notes frequently*/

    return () => {
      clearInterval(intervalId);
      //clearInterval(combinedIntervalId);
    };
  //}, [notes, lives, wrongSound]);
  }, [notes]);

  const handlePlay = async () => {
    setPlaying(true);
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    const audioCtx = new AudioContext();
    const mic = audioCtx.createMediaStreamSource(stream);

    const analyser = audioCtx.createAnalyser();
    mic.connect(analyser);

    const bufferLength = analyser.frequencyBinCount;
    const frequencyData = new Uint8Array(bufferLength);

    const checkPitch = () => {
      analyser.getByteTimeDomainData(frequencyData);

      const dominantFrequency = frequencyData.indexOf(Math.max(...frequencyData));
      const playedNote = convertFrequencyToNote(dominantFrequency);

      if (playedNote === currentExpectedNote) {
        setScore(score + 1);
        setMissedNotes(0);
        //correctSound.play();
      } else {
        setMissedNotes(missedNotes + 1);
        if (missedNotes >= 10) {
          setLives(lives - 1);
          setMissedNotes(+ 1);
          //wrongSound.play();
        }
      }

      if (playing) {
        requestAnimationFrame(checkPitch);
      }
    };

    checkPitch();
  };

  const convertFrequencyToNote = (frequency) => {
    // Replace with logic to convert frequency bin index to a musical note name
    // You can use libraries like tone.js or research music theory for conversion
    console.log(`Frequency: ${frequency}`);
    return null;
  };

  const handleNoteHit = (note) => {
    // Note hit detection remains for touch devices (optional)
    setNotes(notes.filter((n) => n.id !== note.id));
  };

  const handleGameOver = () => {
    setPlaying(false);
    setNotes([]);
    setScore(score, 0);
    setLives(3); // Reset lives on game over
  };

  const handleStopGame = () => {
    setPlaying(false);
    setNotes([]); // Clear notes on stop
  };

  return (
    <div className="game">
      <button onClick={handlePlay} disabled={playing}>
        {playing ? 'Playing...' : 'Start Game'}
      </button>
      <button onClick={handleStopGame} disabled={!playing}>Stop Game</button>
      <div className="score">Score: {score}</div>
      <div className="lives">Lives: {lives}</div>
      <div className="notes-container">
        {notes.map((note) => (
          <div key={note.id} className={`note ${note.note}`} onTouchStart={() => handleNoteHit(note)}>
            {note.note}
          </div>
        ))}
      </div>
      <div className="play-line"></div>
      {lives === 0 && handleGameOver()}
    </div>
  );
};

