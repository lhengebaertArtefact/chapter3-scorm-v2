import React from "react";
import { VideoObjective } from "../../../../types/Objective";


const VideoMessage = ({ objective }: { objective: VideoObjective }) => {

  console.log(objective)

  return (
    <div className="video-container"
      onClick={()=>console.log("aaaaa")}
    >
      <video controls>
        <source src={objective.content.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoMessage;