import React from 'react'
import { Objective } from '../../../types/Objective'

import AIMessageTopBorder from '../../../assets/msgAIBorderTop.png'
import AIMessageBottomBorder from '../../../assets/msgAIBorderBot.png'
import AIMessageTopBG from '../../../assets/msgAITop.png'
import AIMessageBottomBG from '../../../assets/msgAIBot.png'


const MessagesContainer = ({
  objectives
}: {
  objectives: Objective[]
}) => {
  return (
    <div
      className='w-5/6 h-3/4 border-2 flex flex-col justify-start items-start'
    >
      {
        objectives.map((objectif) => {
          if (objectif.type !== 'quiz') return null

          return (
            <div
              key={objectif.id}
              className='h-fit w-4/5 my-2 relative'
            >
              <img
                className='h-7 absolute -left-1 -top-1'
                src={AIMessageTopBorder}
                alt='a ui related image'
              />
              <img
                className='w-full h-7 absolute left-0 top-0'
                src={AIMessageTopBG}
                alt='a ui related image'
              />
              <div
                className={`flex flex-col justify-start items-start my-7 bg-bordersCyan/30 px-2`}
              >
                <span className='text-white'>{objectif.content.question}</span>
                {
                  objectif.content.answers.map(answer=>{
                    return(
                      <div
                        key={answer.id}
                        className='w-full h-fit p-1 bg-bordersCyan/60 mb-2 hover:bg-white/60 transition-colors'
                      >
                        <span>{answer.label}</span>
                      </div>
                    )
                  })
                }
              </div>
              <img
                className='w-full h-7 absolute left-0 bottom-0'
                src={AIMessageBottomBG}
                alt='a ui related image'
              />
              <img
                className='h-7 absolute -right-1 -bottom-1'
                src={AIMessageBottomBorder}
                alt='a ui related image'
              />
            </div>
          )

        })
      }
    </div>
  )
}

export default MessagesContainer