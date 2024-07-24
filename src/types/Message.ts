import { VideoObjective, MiniGameObjective, QuizObjective } from '../types/Objective';



export interface TextMessage {
  type: 'text';
  id: string;
  content: string;
}



export type Message = TextMessage | QuizObjective | VideoObjective | MiniGameObjective;
