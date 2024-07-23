export interface VideoObjective {
    type:'video'
    id:string
    content:string
}

export interface MiniGameObjective {
    type:'miniGame'
    id:string
    content:string
}

export interface QuizObjective {
    type:'quiz'
    id:string
    content:{
        question:string
        answers:{
            id:number
            label:string
        }[]
        correctAnswerID:number
    }
}

export type Objective = VideoObjective | MiniGameObjective | QuizObjective