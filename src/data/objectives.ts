import { Objective } from "../types/Objective";
import video from '../assets/video.mp4'
import miniature from '../assets/miniatureVideo.jpeg'

export const objectives:Objective[] = [
    {
        type: "quiz",
        id: "objectif_quiz1",
        order:0,
        apparitionDelay:3000,
        content: {
          question: "Pensez-vous qu'une IA puisse être biaisée ?",
          answers: [
            {
              id: 0,
              label: "Non, les modèles d'IA sont tous parfaits !",
            },
            {
              id: 1,
              label: "Oui, les modèles d'IA peuvent présenter des biais.",
            },
          ],
          aiResponse:[
            {
                id: 0,
                label: "J'aimerais bien ! Mais non, les modèles d'IA peuvent effectivement être biaisés.",
              },
              {
                id: 1,
                label: "Effectivement, et c'est pourquoi il faut toujours faire preuve d'esprit critique lorsqu'on utilise l'IA.",
              },
          ],
          correctAnswerID: 1,
        },
      },
      {
        type:"video",
        id:'videoObjective1',
        order:1,
        apparitionDelay:2000,
        content:{
            src:video,
            miniature:miniature
        }
      },
      {
        type:"miniGame",
        id:'miniGameObjective1',
        order:2,
        apparitionDelay:0,
        content:'MINIGAME 1'
      }
]