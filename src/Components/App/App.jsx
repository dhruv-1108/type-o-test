import React from "react";
import "./App.css";
import Nav from "../NavBar/Nav";
import Landing from "../Landing/Landing";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import Footer from '../Footer/Footer'

const totalTime = 60;
const Url = "http://metaphorpsum.com/paragraphs/1/7";

const DefaultState = {
  selectedParagraph: " ",
  timerStarted: false,
  timeLeft: totalTime,
  words: 0,
  characters: 0,
  wpm: 0,
  testInfo: [],
};

class App extends React.Component {
  state = DefaultState;

  fetchNewParagraph = () => {
    fetch(Url)
    .then((response) => response.text())
    .then((data) => {
      
      const selectedParagraphArray = data.split("");
      const testInfo = selectedParagraphArray.map((selectedLetter) => {
        return {
          testLetter: selectedLetter,
          status: "notAttempted",
        };
      });

      this.setState({ ...DefaultState, testInfo , selectedParagraph: data});
    });
  }

  componentDidMount() {
    this.fetchNewParagraph();
  }

  startAgain = () => {
      this.fetchNewParagraph();
  }

  handleUserInput = (inputValue) => {
    if (!this.state.timerStarted) {
      this.startTimer();
    }

    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1;

    if (index < 0) {
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: "notAttempted",
          },
          ...this.state.testInfo.slice(1),
        ],
        characters,
        words,
      });

      return;
    }

    if (index >= this.state.selectedParagraph.length) {
      this.setState({
        characters,
        words,
      });
      return;
    }

    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1))
      testInfo[index + 1].status = "notAttempted";

    const isMistake = inputValue[index] === testInfo[index].testLetter;

    testInfo[index].status = isMistake ? "correct" : "incorrect";

    this.setState({
      testInfo,
      words,
      characters,
    });
  };

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeLeft > 0) {
        const timeSpent = totalTime - this.state.timeLeft;
        const wpm =
          timeSpent > 0 ? (this.state.words / timeSpent) * totalTime : 0;

        this.setState({
          timeLeft: this.state.timeLeft - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  render() {
    return (
      <div className="app">
        <Nav />
        <Landing />
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeLeft={this.state.timeLeft}
          timerStarted={this.state.timerStarted}
          testInfo={this.state.testInfo}
          onInputChange={this.handleUserInput}
          startAgain = {this.startAgain}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
