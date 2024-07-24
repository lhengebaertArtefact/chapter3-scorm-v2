import React, { useContext, useEffect, useState } from "react";
import { VideoObjective } from "../../../../types/Objective";
import { GlobalContext } from "../../../../context/GlobalContext";


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
    <div className={`${isDisplayed ? '' : 'hidden'}`}
      onClick={() => setCurrentDisplayElement(objective)}
    >
      <video controls>
        <source src={objective.content.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoMessage;