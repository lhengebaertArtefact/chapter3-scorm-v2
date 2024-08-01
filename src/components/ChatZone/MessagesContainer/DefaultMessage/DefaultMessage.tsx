import React, { useEffect, useState } from 'react'

import AIMessageTopBorder from "../../../../assets/msgAIBorderTop.png";
import AIMessageBottomBorder from "../../../../assets/msgAIBorderBot.png";
import AIMessageTopBG from "../../../../assets/msgAITop.png";
import AIMessageBottomBG from "../../../../assets/msgAIBot.png";
import { TextMessage } from '../../../../types/Message';

const DefaultMessage = ({
    message,
    container
}: {
    message: TextMessage
    container:HTMLDivElement|null
}) => {

    const [isDisplayed, setIsDisplayed] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setIsDisplayed(true)
        },message.apparitionDelay)
    },[])

    useEffect(()=>{
        if(isDisplayed){
            if(container){
                container.scrollTo({
                    top:container.scrollHeight,
                    behavior:'smooth'
                })
            }
        }
    },[isDisplayed])

    return (
        <div key={message.id} className={`h-fit w-4/5 my-2 relative ${isDisplayed ? '' : 'hidden'}`}>
            <img
                className="h-7 absolute -left-1 -top-1"
                src={AIMessageTopBorder}
                alt="Top border decoration"
            />
            <img
                className="w-full h-7 absolute left-0 top-0"
                src={AIMessageTopBG}
                alt="Top background decoration"
            />
            <div className="flex flex-col justify-start items-start my-7 bg-bordersCyan/30 px-2">
                <span className='text-white'>{message.content}</span>
            </div>
            <img
                className="w-full h-7 absolute left-0 bottom-0"
                src={AIMessageBottomBG}
                alt="Bottom background decoration"
            />
            <img
                className="h-7 absolute -right-1 -bottom-1"
                src={AIMessageBottomBorder}
                alt="Bottom border decoration"
            />
        </div>
    )
}

export default DefaultMessage