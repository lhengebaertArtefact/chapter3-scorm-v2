import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../../context/GlobalContext'
import { Objective } from '../../../types/Objective'

const DisplayedElement = () => {

    const { currentDisplayElement } = useContext(GlobalContext)

    useEffect(()=>console.log(currentDisplayElement),[currentDisplayElement])

    const renderElement = (element: null|Objective) => {
        if(!element) return null
        switch (element.type) {
          case "video":
            return <span>VIDEO</span>
          case "quiz":
            return <span>QUIZ</span>;

          case "miniGame":
            return <span>MINIGAME</span>;
        }
      };

  return (
    <div
        className='h-full w-full'
    >
        {
            renderElement(currentDisplayElement)
        }
    </div>
  )
}

export default DisplayedElement