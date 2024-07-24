import React, { useContext } from "react";
import { VideoObjective } from "../../../../types/Objective";
import { GlobalContext } from "../../../../context/GlobalContext";


const VideoMessage = ({ objective }: { objective: VideoObjective }) => {

  const {setCurrentDisplayElement} = useContext(GlobalContext)

 

  return (
    <div className="video-container"
      onClick={()=>setCurrentDisplayElement(objective)}
    >
      <video controls>
        <source src={objective.content.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoMessage;