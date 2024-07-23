import React, {useState} from 'react'
import { Objective, QuizObjective } from '../../../../types/Objective'

import AIMessageTopBorder from '../../../../assets/msgAIBorderTop.png'
import AIMessageBottomBorder from '../../../../assets/msgAIBorderBot.png'
import AIMessageTopBG from '../../../../assets/msgAITop.png'
import AIMessageBottomBG from '../../../../assets/msgAIBot.png'
import { recordObjectiveProgress, setObjectiveStatus } from '../../../../scorm/Scorm'

const Quiz = ({
    objectif
}:{
    objectif:QuizObjective
}) => {

    const [isQuizAnswered, setIsQuizAnswered] = useState<boolean>(false)
    const [pickedAnswer, setPickedAnswer] = useState<number|null>(null)

    const handleAnswerChoose = (chosenAnswerId:number) => {
        const score = chosenAnswerId === objectif.content.correctAnswerID ? 100 : 0
        recordObjectiveProgress(objectif.id, score)
        setObjectiveStatus(objectif.id, "completed")
        setIsQuizAnswered(true)
        setPickedAnswer(chosenAnswerId)
    }


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
                        onClick={()=>{
                            if(isQuizAnswered) return
                            handleAnswerChoose(answer.id)
                        }}
                        className={`
                                w-full h-fit p-1  mb-2  transition-colors
                                ${!isQuizAnswered ? 'hover:bg-white/60' : ''}
                                ${pickedAnswer !== null && pickedAnswer === answer.id ? 
                                    pickedAnswer === objectif.content.correctAnswerID ?
                                        'bg-green-500/50'
                                        :
                                        'bg-red-500/50'
                                    : 
                                    'bg-bordersCyan/60'}
                            `}
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
}

export default Quiz