export interface DoAndDontMinigame {
    type:'doAndDont'
    gameInfos:{
        answers:{
            label:string
            id:number
            correctAnswer:'do'|'dont'
        }[]
    }
}

export type Minigame = DoAndDontMinigame