import React from "react";
import "./TypingChallengeContainer.css";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";

const TypingChallengeContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeLeft,
  timerStarted,
  testInfo,
  onInputChange
}) => {
  return (
    <div className="typing-challenge-container">
      <div className="details-container">
        <ChallengeDetailsCard cardName="Words" cardValue={words} />
        <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
        <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
      </div>
      <div className="typewriter-container">
        <TypingChallenge
          timeLeft={timeLeft}
          timerStarted={timerStarted}
          selectedParagraph={selectedParagraph}
          testInfo = {testInfo}
          onInputChange = {onInputChange}
        />
      </div>
    </div>
  );
};

export default TypingChallengeContainer;
