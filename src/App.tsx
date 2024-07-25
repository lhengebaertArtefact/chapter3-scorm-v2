import React, { useState, useEffect } from "react";
import {
  finishLMS,
  initializeLMS,
  setCompletionStatus,
  setObjectiveStatus,
} from "./scorm/Scorm";
import ChatZone from "./components/ChatZone/ChatZone";
import DisplayZone from "./components/DisplayZone/DisplayZone";
import ProgressZone from "./components/ProgressZone/ProgressZone";
import { messages } from "./data/messages";
import { GlobalContext } from "./context/GlobalContext";
import { objectives } from "./data/objectives";
import { Objective } from "./types/Objective";

const App = () => {
  //const [completedObjectives, setCompletedObjectives] = useState([]);
  //
  //useEffect(() => {
  //  if (
  //    completedObjectives.includes("objectif_quiz1") &&
  //    completedObjectives.includes("objectif_quiz2")
  //  ) {
  //    setCompletionStatus("completed");
  //  }
  //}, [completedObjectives]);
  //
  //const handleComplete = (id) => {
  //  setCompletedObjectives((prev) => [...new Set([...prev, id])]);
  //};

  /*
    <h1>SCORM Objectives</h1>
    <Quiz id="objectif_quiz1" onComplete={handleComplete} />
    <Quiz2 id="objectif_quiz2" onComplete={handleComplete} />
  */

  useEffect(() => {
    initializeLMS();

    return () => {
      finishLMS();
    };
  }, []);

  useEffect(() => {
    messages.forEach((message) => {
      if (
        message.type === "quiz" ||
        message.type === "video" ||
        message.type === "miniGame"
      ) {
        setObjectiveStatus(message.id, "incomplete");
      }
    });
  }, []);

  const [currentObjective, setCurrentObjective] = useState<number>(0)
  const [currentDisplayElement, setCurrentDisplayElement] = useState<Objective|null>(null)
  const [isCurrentDisplayedElementCompleted, setIsCurrentDisplayedElementCompleted] = useState<boolean>(false)

  return (
    <GlobalContext.Provider
      value={{
        messages:messages,
        objectives:objectives,
        currentObjective,
        setCurrentObjective:(value)=>setCurrentObjective(value),
        currentDisplayElement:currentDisplayElement,
        setCurrentDisplayElement:(value)=>setCurrentDisplayElement(value),
        isCurrentDisplayedElementCompleted:isCurrentDisplayedElementCompleted,
        setIsCurrentDisplayedElementCompleted:(value)=>setIsCurrentDisplayedElementCompleted(value)
      }}
    >
      <div className="w-full h-full grid grid-cols-1 grid-rows-5 sm:grid-cols-3 sm:grid-rows-6 gap-6 p-6 bg-gradient-to-br from-bgGradientBlue1 to-bgGradientBlue2">
        <ChatZone />
        <DisplayZone />
        <ProgressZone />
      </div>
    </GlobalContext.Provider>
  );
};

export default App;
