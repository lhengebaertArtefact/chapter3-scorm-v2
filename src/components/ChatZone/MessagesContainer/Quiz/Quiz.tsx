import React, { useContext, useEffect, useState } from "react";
import { Objective, QuizObjective } from "../../../../types/Objective";

import AIMessageTopBorder from "../../../../assets/msgAIBorderTop.png";
import AIMessageBottomBorder from "../../../../assets/msgAIBorderBot.png";
import AIMessageTopBG from "../../../../assets/msgAITop.png";
import AIMessageBottomBG from "../../../../assets/msgAIBot.png";
import {
  recordObjectiveProgress,
  setObjectiveStatus,
} from "../../../../scorm/Scorm";
import { GlobalContext } from "../../../../context/GlobalContext";

const Quiz = ({ objective, container }: { objective: QuizObjective, container: HTMLDivElement | null }) => {

  const { currentObjective, setCurrentObjective } = useContext(GlobalContext)

  const [isDisplayed, setIsDisplayed] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsDisplayed(true)
    }, objective.apparitionDelay)
  }, [])

  

  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  useEffect(() => {
    if (isDisplayed || isAnswered) {
      if (container) {
        container.scrollTo({
          top: container.clientHeight,
          behavior: 'smooth'
        })
      }
    }
  }, [isDisplayed, isAnswered])

  const handleAnswerSelection = (answerId: number) => {
    if (isAnswered) return;

    const isCorrect = answerId === objective.content.correctAnswerID;
    const score = isCorrect ? 100 : 0;

    recordObjectiveProgress(objective.id, score);
    setObjectiveStatus(objective.id, "completed");
    setIsAnswered(true);
    setSelectedAnswer(answerId);
    setCurrentObjective(currentObjective + 1)
  };

  const getAnswerClassNames = (answerId: number) => {
    if (!isAnswered) {
      return "hover:bg-white/60 bg-bordersCyan/60";
    }

    if (selectedAnswer === answerId) {
      return selectedAnswer === objective.content.correctAnswerID
        ? "bg-green-500/50"
        : "bg-red-500/50";
    }

    return "bg-bordersCyan/60";
  };

  return (
    <>
      <div className={`h-fit w-4/5 my-2 relative ${isDisplayed ? '' : 'hidden'}`}>
        <img
          className="h-7 absolute -left-1 -top-1"
          src={AIMessageTopBorder}
          alt="Top border decoration"
        />
        <img
          className="w-full h-7 absolute left-0 top-0"
          src={AIMessageTopBG}
          alt="Top background decoration"
        />
        <div className="flex flex-col justify-start items-start my-7 bg-bordersCyan/30 px-2">
          <span className="text-white">{objective.content.question}</span>
          {objective.content.answers.map((answer) => (
            <div
              key={answer.id}
              onClick={() => handleAnswerSelection(answer.id)}
              className={`w-full h-fit p-1 mb-2 transition-colors ${getAnswerClassNames(
                answer.id
              )}`}
            >
              <span>{answer.label}</span>
            </div>
          ))}
        </div>
        <img
          className="w-full h-7 absolute left-0 bottom-0"
          src={AIMessageBottomBG}
          alt="Bottom background decoration"
        />
        <img
          className="h-7 absolute -right-1 -bottom-1"
          src={AIMessageBottomBorder}
          alt="Bottom border decoration"
        />

      </div>
      <div className={`h-fit w-4/5 my-2 relative ${isAnswered ? '' : 'hidden'}`}>
        <img
          className="h-7 absolute -left-1 -top-1"
          src={AIMessageTopBorder}
          alt="Top border decoration"
        />
        <img
          className="w-full h-7 absolute left-0 top-0"
          src={AIMessageTopBG}
          alt="Top background decoration"
        />
        <div className="flex flex-col justify-start items-start my-7 bg-bordersCyan/30 px-2">
          {
            objective.content.aiResponse.map(aiResponse=>{
              if(aiResponse.id !== selectedAnswer) return null
              return <span key={aiResponse.id} className="text-white">{aiResponse.label}</span>
            })
          }
        </div>
        <img
          className="w-full h-7 absolute left-0 bottom-0"
          src={AIMessageBottomBG}
          alt="Bottom background decoration"
        />
        <img
          className="h-7 absolute -right-1 -bottom-1"
          src={AIMessageBottomBorder}
          alt="Bottom border decoration"
        />
      </div>
    </>
  );
};

export default Quiz;
