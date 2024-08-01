import React, { useContext, useEffect, useState } from "react";
import { VideoObjective } from "../../../../types/Objective";
import { GlobalContext } from "../../../../context/GlobalContext";

import AIMessageTopBorder from "../../../../assets/msgAIBorderTop.png";
import AIMessageBottomBorder from "../../../../assets/msgAIBorderBot.png";
import AIMessageTopBG from "../../../../assets/msgAITop.png";
import AIMessageBottomBG from "../../../../assets/msgAIBot.png";


const VideoMessage = ({ objective, container }: { objective: VideoObjective, container: HTMLDivElement | null }) => {

  const { setCurrentDisplayElement, currentDisplayElement, isCurrentDisplayedElementCompleted, setIsCurrentDisplayedElementCompleted, currentObjective, setCurrentObjective } = useContext(GlobalContext)

  const [isDisplayed, setIsDisplayed] = useState(false)
  const [isValidationMessageDisplayed, setIsValidationMessageDisplayed] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setIsDisplayed(true)
    }, objective.apparitionDelay)
  }, [])

  useEffect(() => {
    if (isDisplayed) {
      if (container) {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: 'smooth'
        })
      }
    }
  }, [isDisplayed])

  useEffect(() => {
    if(isCurrentDisplayedElementCompleted && currentDisplayElement === objective){
      setIsValidationMessageDisplayed(true)
      setIsCurrentDisplayedElementCompleted(false)
    }
  }, [isCurrentDisplayedElementCompleted])

  useEffect(()=>{
    if(isValidationMessageDisplayed){
      if (container) {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: 'smooth'
        })
      }
    }
  },[isValidationMessageDisplayed])



  return (
    <>
      <div
        className={`h-fit w-4/5 my-2 relative ${isDisplayed ? '' : 'hidden'} hover:cursor-pointer`}
        onClick={() => setCurrentDisplayElement(objective)}
      >
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
        <img className="my-7" src={objective.content.miniature} alt="a video image" />
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
      <div
        className={`${isValidationMessageDisplayed ? '' : 'hidden'} h-fit w-4/5 my-2 relative`}
      >
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
        <div className="my-7 px-2 bg-bordersCyan/30 h-fit w-full flex flex-col justify-start items-start">
          <span className="text-white">Have you completed the video yet ?</span>
          <span 
            className="bg-bordersCyan/60 hover:bg-white/60 w-full p-1 mt-2 transition-colors"
            onClick={()=>{
              setCurrentDisplayElement(null)
              setCurrentObjective(currentObjective+1)
            }}
          >
            Yes !
          </span>
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

export default VideoMessage;