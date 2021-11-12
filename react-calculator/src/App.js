import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      firstNum: "",
      secondNum: "",
      operation: null,
      switchToSecondNum: false,
      display: 0,
    };
  }

  handleNumberClick = (event) => {
    const { firstNum, secondNum, switchToSecondNum } = this.state;

    if (switchToSecondNum) {
      this.setState({
        secondNum: secondNum + event.target.value,
        display: secondNum + event.target.value,
      });
    } else {
      this.setState({
        firstNum: firstNum + event.target.value,
        display: firstNum + event.target.value,
      });
    }
  };

  handleOperationClick = (event) => {
    const { switchToSecondNum, operation, firstNum, secondNum } = this.state;
    this.setState({
      operation: event.target.value,
    });
    if (!operation) {
      this.setState({
        switchToSecondNum: !switchToSecondNum,
      });
    }
    if (firstNum && secondNum) {
      this.handleCalculate();
    }
    console.log(switchToSecondNum);
  };

  handleSignSwitch = () => {
    const { firstNum, secondNum, switchToSecondNum } = this.state;
    const numFlip = (num) => (num < 0 ? 0 + Math.abs(num) : 0 - num);

    if (switchToSecondNum) {
      this.setState({
        secondNum: numFlip(secondNum),
        display: numFlip(secondNum),
      });
    } else {
      this.setState({
        firstNum: numFlip(firstNum),
        display: numFlip(firstNum),
      });
    }
  };

  handleCalculate = () => {
    let { firstNum, secondNum, operation } = this.state;
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    let result;
    switch (operation) {
      case "+":
        result = firstNum + secondNum;
        break;
      case "-":
        result = firstNum - secondNum;
        break;
      case "/":
        result = firstNum / secondNum;
        break;
      case "*":
        result = firstNum * secondNum;
        break;
      default:
        result = firstNum;
    }
    this.setState({
      firstNum: result,
      secondNum: "",
      display: result,
    });
  };

  handleClear = () => {
    const { secondNum } = this.state;
    if (secondNum) {
      this.setState({
        secondNum: "",
        display: 0,
      });
    } else {
      this.setState({
        firstNum: "",
        display: 0,
        operation: null,
        switchToSecondNum: false,
      });
    }
  };

  render() {
    const { display, secondNum } = this.state;
    return (
      <div className="App">
        <div className="black" id="display">
          {display}
        </div>
        <button onClick={this.handleClear} className="gray button">
          {secondNum ? "C" : "AC"}
        </button>
        <button onClick={this.handleSignSwitch} className="gray button">
          ±
        </button>
        <button onClick={this.handleOperationClick} className="gray button">
          %
        </button>
        <button
          value="/"
          onClick={this.handleOperationClick}
          className="orange button"
        >
          ÷
        </button>
        <button
          onClick={this.handleNumberClick}
          value="7"
          className="black button"
        >
          7
        </button>
        <button
          onClick={this.handleNumberClick}
          value="8"
          className="black button"
        >
          8
        </button>
        <button
          onClick={this.handleNumberClick}
          value="9"
          className="black button"
        >
          9
        </button>
        <button
          value="*"
          onClick={this.handleOperationClick}
          className="orange button"
        >
          X
        </button>
        <button
          onClick={this.handleNumberClick}
          value="4"
          className="black button"
        >
          4
        </button>
        <button
          onClick={this.handleNumberClick}
          value="5"
          className="black button"
        >
          5
        </button>
        <button
          onClick={this.handleNumberClick}
          value="6"
          className="black button"
        >
          6
        </button>
        <button
          value="-"
          onClick={this.handleOperationClick}
          className="orange button"
        >
          -
        </button>
        <button
          onClick={this.handleNumberClick}
          value="1"
          className="black button"
        >
          1
        </button>
        <button
          onClick={this.handleNumberClick}
          value="2"
          className="black button"
        >
          2
        </button>
        <button
          onClick={this.handleNumberClick}
          value="3"
          className="black button"
        >
          3
        </button>
        <button
          value="+"
          onClick={this.handleOperationClick}
          className="orange button"
        >
          +
        </button>
        <button
          onClick={this.handleNumberClick}
          value="0"
          className="black button"
          id="zero"
        >
          0
        </button>
        <button onClick={this.handleNumberClick} className="black button">
          .
        </button>
        <button onClick={this.handleCalculate} className="orange button">
          =
        </button>
      </div>
    );
  }
}

export default App;
