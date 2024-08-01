import { VideoObjective, MiniGameObjective, QuizObjective, Objective } from '../types/Objective';



export interface TextMessage {
  type: 'text';
  id: string;
  content: string;
  objectifID:number
  apparitionDelay:number
}



export type Message = TextMessage | Objective;
