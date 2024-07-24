import React, { useContext, useState } from "react";
import { Message } from "../../../types/Message";
import Quiz from "./Quiz/Quiz";

import MiniGame from "../../../components/MiniGame";
import DefaultMessage from "./DefaultMessage/DefaultMessage";
import VideoMessage from "./VideoMessage/VideoMessage";
import { GlobalContext } from "../../../context/GlobalContext";

const MessagesContainer = () => {

  const {messages, currentObjective} = useContext(GlobalContext)

  const [currentRenderedMessages, setCurrentRenderedMessage] = useState<Message[]>([])
 


  const renderMessage = (message: Message) => {
    console.log(message)
    switch (message.type) {
      case "text":
        if(message.objectifID > currentObjective) return null
          return <DefaultMessage key={message.id} message={message} />
      case "quiz":
        if(message.order > currentObjective) return null
        return <Quiz key={message.id} objective={message} />;
      case "video":
        if(message.order > currentObjective) return null
        return <VideoMessage key={message.id} objective={message} />;
      case "miniGame":
        if(message.order > currentObjective) return null
        return <MiniGame key={message.id} objective={message} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-5/6 h-3/4 flex flex-col justify-start items-start overflow-y-scroll no-scrollbar">
      {messages.map(renderMessage)}
    </div>
  );
};

export default MessagesContainer;
