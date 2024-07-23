import React from 'react'
import AInsteinIcon from './AInsteinIcon/AInsteinIcon.tsx'
import MessagesContainer from './MessagesContainer/MessagesContainer.tsx'

import bgChatBox from '../../assets/BgChatbox.png'
import inputSide from '../../assets/InputDeco.png'
import sendButton from '../../assets/sendButton.svg'
import { Objective } from '../../types/Objective.ts'

const ChatZone = ({
    objectives
}:{
    objectives:Objective[]
}) => {
    return (
        <div
            className="col-span-1 row-span-2 sm:row-span-6 relative"
        >
            <img
                src={bgChatBox}
                alt="a border"
                className="absolute top-0 right-0 w-full h-full z-0"
            />
            <div
                className="w-full  h-full z-10 absolute left-0 top-0 flex flex-col justify-start items-center"
            >
                <AInsteinIcon />
                <MessagesContainer
                    objectives={objectives}
                />
                <div
                    className="w-full bg-white/20 h-1/6 flex flex-row justify-center items-start px-1 pt-6"
                >
                    <div
                        className="w-4/5 h-fit flex flex-row justify-between items-center"
                    >
                        <div
                            className="w-full h-10 max-h-full flex flex-row justify-start items-start"
                        >
                            <img
                                className="h-full rotate-180"
                                src={inputSide}
                                alt="a ui img"
                            />
                            <div
                                className="w-11/12 h-full bg-white/50 mx-1 flex flex-row justify-start items-center pl-2"
                            >
                                <span
                                    className="text-lg"
                                >
                                    aaaaa
                                </span>
                            </div>
                            <img
                                className="h-full"
                                src={inputSide}
                                alt="a ui image"
                            />
                        </div>
                        <img
                            className="h-9 w-9 min-w-9"
                            src={sendButton}
                            alt="An icon"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatZone