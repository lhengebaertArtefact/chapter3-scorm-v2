import React from "react";
import { VideoObjective } from "../types/Objective";

const Video = ({ objective }: { objective: VideoObjective }) => {
  return (
    <div className="video-container">
      <video controls>
        <source src={objective.content} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
