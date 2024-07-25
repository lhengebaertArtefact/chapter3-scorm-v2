import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../../context/GlobalContext'
import { Objective } from '../../../types/Objective'
import VideoElement from './VideoElement/VideoElement'
import MinigameElement from './MinigameElement/MinigameElement'
import { objectives } from '../../../data/objectives'

const DisplayedElement = () => {

    const { currentDisplayElement } = useContext(GlobalContext)


    const renderElement = (element: null|Objective) => {
        if(!element) return null
        switch (element.type) {
          case "video":
            return <VideoElement video={element} />
          case "quiz":
            return <span>QUIZ</span>;

          case "miniGame":
            return <MinigameElement minigame={element} />;
        }
      };

  return (
    <div
        className='h-full w-full flex items-center justify-center'
    >
        {
            renderElement(currentDisplayElement)
        }
    </div>
  )
}

export default DisplayedElement