import "../styles/Quiz.css";
import Question from "./Question";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const Quiz = () => {
  const [trivia, setTrivia] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => setTrivia(data.results));
  }, []);

  return (
    <main className="main-content">
      {trivia &&
        trivia.map((triviaQuestion) => (
          <Question key={nanoid()} triviaQuestion={triviaQuestion} />
        ))}
      <button className="check-button">Check answers</button>
    </main>
  );
};

export default Quiz;
