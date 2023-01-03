import { useState } from "react";
import "./App.scss";

function App() {
  const [displaybar, setDisplaybar] = useState("0");
  const [tracker, setTracker] = useState("0");

  const display = (input) => {
    console.log(input);
    if (input === "AC") {
      setDisplaybar("0");
      setTracker("0");
      console.log("resetdisplay");
    } else if (input === "=") {
      let answer = eval(tracker)
      setDisplaybar(answer);
      console.log("should sum", answer);
    } else {
      if (tracker === "0") {
        setTracker(input);
        setDisplaybar(input);
      } else {
        setTracker((prev) => prev + input);
        setDisplaybar(input);
      }
    }
  };

  const buttonArray = [
    {
      display: "AC",
      text: "clear",
    },
    {
      display: "/",
      text: "divide",
    },
    {
      display: "*",
      text: "multiply",
    },
    {
      text: "seven",
      display: 7,
    },
    {
      text: "eight",
      display: 8,
    },
    {
      text: "nine",
      display: 9,
    },
    {
      display: "-",
      text: "subtract",
    },
    {
      text: "four",
      display: 4,
    },
    {
      text: "five",
      display: 5,
    },
    {
      text: "six",
      display: 6,
    },
    {
      display: "+",
      text: "add",
    },
    {
      text: "one",
      display: 1,
    },
    {
      text: "two",
      display: 2,
    },
    {
      text: "three",
      display: 3,
    },
    {
      display: "=",
      text: "equals",
    },
    {
      text: "zero",
      display: 0,
    },
    {
      display: ".",
      text: "decimal",
    },
  ];

  return (
    <div className="App">
      <div className="calculator">
        <div className="topbar">
          <div className="formula">{tracker}</div>
          <div classname="output" id="display">{displaybar}</div>
        </div>
        {buttonArray.map((button) => (
          <div
            className="buttons"
            id={button.text}
            key={button.text}
            onClick={() => display(button.display)}
          >
            {button.display}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
