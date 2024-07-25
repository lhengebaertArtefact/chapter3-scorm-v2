import React, { useContext } from 'react'
import { VideoObjective } from '../../../../types/Objective'
import { GlobalContext } from '../../../../context/GlobalContext'

const VideoElement = ({
    video
}:{
    video:VideoObjective
}) => {

    const {setIsCurrentDisplayedElementCompleted} = useContext(GlobalContext)
    

  return (
    <video 
        controls 
        autoPlay
        onEnded={()=>setIsCurrentDisplayedElementCompleted(true)}
    >
        <source src={video.content.src} type="video/mp4"  />
        Your browser does not support the video tag.
      </video>
  )
}

export default VideoElement