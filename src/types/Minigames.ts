export interface DoAndDontMinigame {
    type:'doAndDont'
    gameInfos:{
        answers:{
            label:string
            id:number
            correctAnswer:"DO"|"DON'T"
        }[]
    }
}

export type Minigame = DoAndDontMinigame