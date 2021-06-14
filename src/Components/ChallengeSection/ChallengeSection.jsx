import React from "react";
import "./ChallengeSection.css";
import TestContainer from "../TestContainer/TestContainer";

const ChallengeSection = ({
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
    <div className="challenge-section">
      <h1 data-aos="fade-down" className="challenge-section-header">
        Take a speed test now!
      </h1>
      <TestContainer
        selectedParagraph={selectedParagraph}
        timeLeft={timeLeft}
        timerStarted={timerStarted}
        words={words}
        characters={characters}
        wpm={wpm}
        testInfo = {testInfo}
        onInputChange = {onInputChange}
        startAgain= {startAgain}
      />
    </div>
  );
};

export default ChallengeSection;
