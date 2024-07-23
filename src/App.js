import React, { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import Quiz2 from "./components/Quiz2";
import { setCompletionStatus } from "./scorm/Scorm";

const App = () => {
  const [completedObjectives, setCompletedObjectives] = useState([]);

  useEffect(() => {
    if (
      completedObjectives.includes("objectif_quiz1") &&
      completedObjectives.includes("objectif_quiz2")
    ) {
      setCompletionStatus("completed");
    }
  }, [completedObjectives]);

  const handleComplete = (id) => {
    setCompletedObjectives((prev) => [...new Set([...prev, id])]);
  };

  return (
    <div>
      <h1>SCORM Objectives</h1>
      <Quiz id="objectif_quiz1" onComplete={handleComplete} />
      <Quiz2 id="objectif_quiz2" onComplete={handleComplete} />
    </div>
  );
};

export default App;
