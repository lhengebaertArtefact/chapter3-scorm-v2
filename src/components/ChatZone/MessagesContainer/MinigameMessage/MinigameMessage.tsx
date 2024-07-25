import React, { useContext, useEffect, useState } from 'react'
import { MiniGameObjective } from '../../../../types/Objective'

import AIMessageTopBorder from "../../../../assets/msgAIBorderTop.png";
import AIMessageBottomBorder from "../../../../assets/msgAIBorderBot.png";
import AIMessageTopBG from "../../../../assets/msgAITop.png";
import AIMessageBottomBG from "../../../../assets/msgAIBot.png";
import { GlobalContext } from '../../../../context/GlobalContext';

const MinigameMessage = ({ objective, container }: { objective: MiniGameObjective, container: HTMLDivElement | null }) => {
    const [isDisplayed, setIsDisplayed] = useState(false)
    const {setCurrentDisplayElement} = useContext(GlobalContext)

    useEffect(() => {
        setTimeout(() => {
            setIsDisplayed(true)
            setCurrentDisplayElement(objective)
        }, objective.apparitionDelay)
    }, [])

    useEffect(() => {
        if (isDisplayed) {
            if (container) {
                container.scrollTo({
                    top: container.clientHeight + 1000,
                    behavior: 'smooth',
                })
            }
        }
    }, [isDisplayed])


    return (
        <div
            className={`h-fit w-4/5 my-2 relative ${isDisplayed ? '' : 'hidden'}`}
        >
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
            <div
                className='my-7 px-2 bg-bordersCyan/30 h-fit w-full'
            >
                <p className='text-white'>{objective.content.message}</p>
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
    );
};

export default MinigameMessage