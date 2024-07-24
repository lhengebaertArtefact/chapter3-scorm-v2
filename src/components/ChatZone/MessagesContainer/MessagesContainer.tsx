import React, { useContext } from "react";
import { Message } from "../../../types/Message";
import Quiz from "./Quiz/Quiz";

import MiniGame from "../../../components/MiniGame";
import DefaultMessage from "./DefaultMessage/DefaultMessage";
import VideoMessage from "./VideoMessage/VideoMessage";
import { GlobalContext } from "../../../context/GlobalContext";

const MessagesContainer = () => {

  const {messages} = useContext(GlobalContext)
 


  const renderMessage = (message: Message) => {
    switch (message.type) {
      case "text":
        return <DefaultMessage key={message.id} message={message} />
      case "quiz":
        return <Quiz key={message.id} objective={message} />;
      case "video":
        return <VideoMessage key={message.id} objective={message} />;
      case "miniGame":
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
