import React, { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import Quiz2 from "./components/Quiz2";
import { finishLMS, initializeLMS, setCompletionStatus } from "./scorm/Scorm";
import ChatZone from "./components/ChatZone/ChatZone.tsx";
import DisplayZone from "./components/DisplayZone/DisplayZone.tsx";
import ProgressZone from "./components/ProgressZone/ProgressZone.tsx";
import { Objective } from "./types/Objective.ts";

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

    const objectives:Objective[] = [
      {
        type:'quiz',
        id:'objectif_quiz1',
        content:{
          question:'What is 10 * 10 ?',
          answers:[
            {
              id:0,
              label:'20'
            },
            {
              id:1,
              label:'100'
            }
          ],
          correctAnswerID:1
        }
      },
      {
        type:'quiz',
        id:'objectif_quiz2',
        content:{
          question:"What is France's capital ?",
          answers:[
            {
              id:0,
              label:'Madrid'
            },
            {
              id:1,
              label:'Berlin'
            },
            {
              id:2,
              label:'Paris'
            }
          ],
          correctAnswerID:2
        }
      }
    ]



  return (
    <div
      className="w-full h-full grid grid-cols-1 grid-rows-5 sm:grid-cols-3 sm:grid-rows-6 gap-6 p-6 bg-gradient-to-br from-bgGradientBlue1 to-bgGradientBlue2"
    >
      <ChatZone
        objectives={objectives}
      />
      <DisplayZone/>
      <ProgressZone/>
    </div>
  );
};

export default App;
