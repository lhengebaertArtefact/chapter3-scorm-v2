import React, { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import Quiz2 from "./components/Quiz2";
import { setCompletionStatus } from "./scorm/Scorm";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  const [completedObjectives, setCompletedObjectives] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (
      completedObjectives.includes("objectif_quiz1") &&
      completedObjectives.includes("objectif_quiz2")
    ) {
      setCompletionStatus("completed");
    }
    const progressPercentage = (completedObjectives.length / 2) * 100;
    setProgress(progressPercentage);
  }, [completedObjectives]);

  const handleComplete = (id) => {
    setCompletedObjectives((prev) => [...new Set([...prev, id])]);
  };

  return (
    <div>
      <h1>SCORM Objectives</h1>
      <ProgressBar progress={progress} />
      <Quiz id="objectif_quiz1" onComplete={handleComplete} />
      <Quiz2 id="objectif_quiz2" onComplete={handleComplete} />
    </div>
  );
};

export default App;
