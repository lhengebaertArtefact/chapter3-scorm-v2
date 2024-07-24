import React, { useContext, useEffect, useState } from "react";
import { VideoObjective } from "../../../../types/Objective";
import { GlobalContext } from "../../../../context/GlobalContext";

import AIMessageTopBorder from "../../../../assets/msgAIBorderTop.png";
import AIMessageBottomBorder from "../../../../assets/msgAIBorderBot.png";
import AIMessageTopBG from "../../../../assets/msgAITop.png";
import AIMessageBottomBG from "../../../../assets/msgAIBot.png";


const VideoMessage = ({ objective, container }: { objective: VideoObjective, container: HTMLDivElement | null }) => {

  const { setCurrentDisplayElement } = useContext(GlobalContext)

  const [isDisplayed, setIsDisplayed] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsDisplayed(true)
    }, objective.apparitionDelay)
  }, [])

  useEffect(() => {
    if (isDisplayed) {
      if (container) {
        container.scrollTo({
          top: container.clientHeight + 1000,
          behavior: 'smooth'
        })
      }
    }
  }, [isDisplayed])



  return (
    <div 
      className={`h-fit w-4/5 my-2 relative ${isDisplayed ? '' : 'hidden'} hover:cursor-pointer`}
      onClick={()=>setCurrentDisplayElement(objective)}
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
  );
};

export default VideoMessage;