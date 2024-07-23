import React from "react";
import { Message } from "../../../types/Message";
import Quiz from "./Quiz/Quiz.tsx";
import Video from "../../../components/Video.tsx";
import MiniGame from "../../../components/MiniGame.tsx";

const MessagesContainer = ({ messages }: { messages: Message[] }) => {
  const renderMessage = (message: Message) => {
    switch (message.type) {
      case "text":
        return (
          <div key={message.id} className="bot-message">
            {message.content}
          </div>
        );
      case "quiz":
        return <Quiz key={message.id} objective={message.content} />;
      case "video":
        return <Video key={message.id} objective={message.content} />;
      case "miniGame":
        return <MiniGame key={message.id} objective={message.content} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-5/6 h-3/4 border-2 flex flex-col justify-start items-start">
      {messages.map(renderMessage)}
    </div>
  );
};

export default MessagesContainer;
