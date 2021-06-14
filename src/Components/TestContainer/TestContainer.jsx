import React from "react";
import "./TestContainer.css";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";

const TestContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeLeft,
  timerStarted,
  testInfo,
  onInputChange,
  startAgain
}) => {

  return (
    <div className="test-container">
      {timeLeft > 0 ? (
        <div data-aos="fade-up" className="typing-challenge-container">
          <TypingChallengeContainer
            selectedParagraph = {selectedParagraph}
            words={words}
            characters={characters}
            wpm={wpm}
            timeLeft = {timeLeft}
            timerStarted = {timerStarted}
            testInfo = {testInfo}
            onInputChange = {onInputChange}
          />
        </div>
      ) : (
        <div className="try-again-container">
          <TryAgain words={words} characters={characters} wpm={wpm} startAgain = {startAgain}/>
        </div>
      )}
    </div>
  );
};

export default TestContainer;
