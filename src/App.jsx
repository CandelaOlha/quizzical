import Intro from "./components/Intro";
import Quiz from "./components/Quiz";
import { useState } from "react";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const handleClick = () => {
    setGameStarted(true);
  };

  return <>{gameStarted ? <Quiz /> : <Intro handleClick={handleClick} />}</>;
};

export default App;
