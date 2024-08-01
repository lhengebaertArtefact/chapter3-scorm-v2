import React, { useContext, useEffect, useRef, useState } from "react";
import { Message } from "../../../types/Message";
import Quiz from "./Quiz/Quiz";

import DefaultMessage from "./DefaultMessage/DefaultMessage";
import VideoMessage from "./VideoMessage/VideoMessage";
import { GlobalContext } from "../../../context/GlobalContext";
import MinigameMessage from "./MinigameMessage/MinigameMessage";
import DoubleImageQuizMessage from "./DoubleImageQuizMessage/DoubleImageQuizMessage";

const MessagesContainer = () => {

  const {messages, currentObjective} = useContext(GlobalContext)

  const messageContainerRef = useRef<HTMLDivElement>(null)

 
  const renderMessage = (message: Message) => {

    switch (message.type) {
      case "text":
        if(message.objectifID > currentObjective) return null
          return <DefaultMessage key={message.id} message={message} container={messageContainerRef.current} />
      case "quiz":
        if(message.order > currentObjective) return null
        return <Quiz key={message.id} objective={message} container={messageContainerRef.current} />;
      case "video":
        if(message.order > currentObjective) return null
        return <VideoMessage key={message.id} objective={message} container={messageContainerRef.current} />;
      case "miniGame":
        if(message.order > currentObjective) return null
        return <MinigameMessage key={message.id} objective={message} container={messageContainerRef.current} />;
      case "doubleImageQuiz":
        if(message.order > currentObjective) return null
        return <DoubleImageQuizMessage key={message.id} objective={message} container={messageContainerRef.current}/>;
    }
  };

  return (
    <div ref={messageContainerRef} className="w-5/6 h-3/4 flex flex-col justify-start items-start overflow-y-scroll no-scrollbar">
      {messages.map(renderMessage)}
    </div>
  );
};

export default MessagesContainer;
