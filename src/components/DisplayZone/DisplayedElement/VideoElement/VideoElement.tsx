import React, { useContext } from 'react'
import { VideoObjective } from '../../../../types/Objective'
import { GlobalContext } from '../../../../context/GlobalContext'

const VideoElement = ({
    video
}:{
    video:VideoObjective
}) => {

    const {setCurrentObjective, currentObjective} = useContext(GlobalContext)
    

  return (
    <video 
        controls 
        autoPlay
        onEnded={()=>setCurrentObjective(currentObjective +1)}
    >
        <source src={video.content.src} type="video/mp4"  />
        Your browser does not support the video tag.
      </video>
  )
}

export default VideoElement