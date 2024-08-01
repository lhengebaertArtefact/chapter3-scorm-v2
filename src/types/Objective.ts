import { Minigame } from "./Minigames";

export interface VideoObjective {
    type:'video';
    id:string;
    order:number
    apparitionDelay:number
    content:{
        src:string,
        miniature:string
    };
}

export interface MiniGameObjective {
    type:'miniGame';
    id:string;
    order:number
    apparitionDelay:number
    content:{
        message:string
        game:Minigame
    }
}

export interface DoubleImageQuizObjective {
    type:'doubleImageQuiz',
    id:string,
    order:number,
    apparitionDelay:number,
    content:{
        question:string
        images:string[]
        answers:{
            id:number
            label:string
        }[],
        aiResponse:{
            id:number,
            label:string
        }[],
        correctAnswerID:number
    }
}

export interface QuizObjective {
    type:'quiz';
    id:string;
    order:number
    apparitionDelay:number
    content:{
        question:string
        answers:{
            id:number
            label:string
        }[],
        aiResponse:{
            id:number,
            label:string
        }[],
        correctAnswerID:number
    }
}

export type Objective = VideoObjective | MiniGameObjective | QuizObjective | DoubleImageQuizObjective