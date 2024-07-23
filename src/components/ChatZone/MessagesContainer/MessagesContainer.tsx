import React from 'react'
import { Objective } from '../../../types/Objective'


import Quiz from './Quiz/Quiz.tsx'


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
            <Quiz
              objectif={objectif}
              key={objectif.id}
            />
          )

        })
      }
    </div>
  )
}

export default MessagesContainer