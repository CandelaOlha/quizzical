import "../styles/Question.css";
import PropTypes from "prop-types";

const Question = ({ triviaQuestion }) => {
  const { question, correct_answer, incorrect_answers } = triviaQuestion;

  const randomIndex = Math.floor(Math.random() * 3);
  const answers = incorrect_answers.toSpliced(randomIndex, 0, correct_answer);

  return (
    <div className="question-container">
      <h2 className="question">{question}</h2>
      <div className="answers-container">
        {answers.map((answer, index) => (
          <button key={index} className="answer-button">
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

Question.propTypes = {
  triviaQuestion: PropTypes.object.isRequired,
};

export default Question;
