import React, { useState, useEffect } from "react";
import {
  initializeLMS,
  recordObjectiveProgress,
  setObjectiveStatus,
  finishLMS,
} from "../scorm/Scorm";

const Quiz2 = ({ id, onComplete }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    initializeLMS();
    return () => {
      finishLMS();
    };
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption !== null) {
      const score = selectedOption === "correct" ? 100 : 0;
      setObjectiveStatus(id, "completed");
      recordObjectiveProgress(id, score);
      setIsCompleted(true);
      onComplete(id);
    }
  };

  return (
    <div>
      <h3>Quiz 2</h3>
      <p>What is the capital of Germany?</p>
      <div>
        <label>
          <input
            type="radio"
            value="correct"
            checked={selectedOption === "correct"}
            onChange={handleOptionChange}
          />
          Berlin
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="incorrect1"
            checked={selectedOption === "incorrect1"}
            onChange={handleOptionChange}
          />
          Paris
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="incorrect2"
            checked={selectedOption === "incorrect2"}
            onChange={handleOptionChange}
          />
          Madrid
        </label>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {isCompleted && <p>Objective completed!</p>}
    </div>
  );
};

export default Quiz2;
