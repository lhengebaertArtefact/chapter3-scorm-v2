import { Objective } from "../types/Objective";

export const objectives:Objective[] = [
    {
        type: "quiz",
        id: "objectif_quiz1",
        content: {
          question: "What is 10 * 10 ?",
          answers: [
            {
              id: 0,
              label: "20",
            },
            {
              id: 1,
              label: "100",
            },
          ],
          correctAnswerID: 1,
        },
      },
      {
        type: "quiz",
        id: "objectif_quiz2",
        content: {
          question: "What is France's capital ?",
          answers: [
            {
              id: 0,
              label: "Madrid",
            },
            {
              id: 1,
              label: "Berlin",
            },
            {
              id: 2,
              label: "Paris",
            },
          ],
          correctAnswerID: 2,
        },
      },
      {
        type:"video",
        id:'videoObjective1',
        content:{
            src:'URL_DE_LA_VIDEO',
            miniature:'URL_DE_LA_MINIATURE'
        }
      }
]