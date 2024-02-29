import "../styles/Intro.css";
import PropTypes from "prop-types";

const Intro = (props) => {
  return (
    <header className="header">
      <h1 className="app-name">Quizzical</h1>
      <p className="app-description">
        Test your knowledge on different topics by taking this fun quiz created
        by The Open Trivia Database.
      </p>
      <button onClick={props.handleClick} className="start-quiz-button">
        Start quiz
      </button>
    </header>
  );
};

Intro.propTypes = {
  handleClick: PropTypes.func,
};

export default Intro;
