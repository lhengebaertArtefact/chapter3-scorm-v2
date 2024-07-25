import { createContext } from "react";
import { Message } from "../types/Message";

import { Objective } from "../types/Objective";


export type GlobalContextType = {
    messages:Message[]
    objectives:Objective[]
    currentObjective:number,
    setCurrentObjective:(value:number)=>void,
    currentDisplayElement:Objective|null,
    setCurrentDisplayElement:(value:Objective|null)=>void,
    isCurrentDisplayedElementCompleted:boolean
    setIsCurrentDisplayedElementCompleted:(value:boolean)=>void
}

export const GlobalContext = createContext<GlobalContextType>({
    messages:[],
    objectives:[],
    currentObjective:0,
    setCurrentObjective:()=>{},
    currentDisplayElement:null,
    setCurrentDisplayElement:()=>{},
    isCurrentDisplayedElementCompleted:false,
    setIsCurrentDisplayedElementCompleted:()=>{}
})