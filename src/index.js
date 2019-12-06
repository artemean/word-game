import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import { getRandomInt } from "./utils";
import cat from "./images/cat.jpg";
import dog from "./images/dog.jpg";
import cow from "./images/cow.jpg";
import mouse from "./images/mouse.jpg";
import "./styles.css";

const images = [
  { image: cat, name: "Cat" },
  { image: dog, name: "Dog" },
  { image: cow, name: "Cow" },
  { image: mouse, name: "Mouse" }
];

function App() {
  const [name, setName] = useState(images[0].name);
  const [result, setResult] = useState();
  const [answersCount, setAnswersCount] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  console.log(name);

  const handleClick = text => e => {
    console.log('click');
    let nextName = images[getRandomInt(0, images.length)].name;
    while (nextName === name) {
      nextName = images[getRandomInt(0, images.length)].name;
      setName(nextName);
    }
    setName(images[getRandomInt(0, images.length)].name);
    
    if (text === name) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }
    setResult(text === name);
    setAnswersCount(answersCount + 1);
  };
  const img = images.find(image => image.name === name);
  const reset = () => {
    setAnswersCount(0);
    setCorrectAnswersCount(0);
  };

  return (
    <div className="App">
      <h1>Select correct word</h1>
      <img src={img.image} alt="img" />
      <div>Correct: {correctAnswersCount} out of {answersCount}</div>
      <div class="result">{result ? "True!" : "False!"}</div>
      <ul className="answers">
        {images.map(image => (
          <Button key={image.name} text={image.name} onClick={handleClick} />
        ))}
      </ul>
      <button className="reset-button" onClick={reset}>Reset</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
