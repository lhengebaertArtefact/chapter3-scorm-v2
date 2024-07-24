export interface VideoObjective {
    type:'video';
    id:string;
    order:number
    content:{
        src:string,
        miniature:string
    };
}

export interface MiniGameObjective {
    type:'miniGame';
    id:string;
    order:number
    content:string;
}

export interface QuizObjective {
    type:'quiz';
    id:string;
    order:number
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