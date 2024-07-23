import { VideoObjective, MiniGameObjective, QuizObjective } from '../types/Objective';

export type MessageType = 'text' | 'quiz' | 'video' | 'miniGame';

export interface TextMessage {
  type: 'text';
  id: string;
  content: string;
}

export interface QuizMessage {
  type: 'quiz';
  id: string;
  content: QuizObjective;
}

export interface VideoMessage {
  type: 'video';
  id: string;
  content: VideoObjective;
}

export interface MiniGameMessage {
  type: 'miniGame';
  id: string;
  content: MiniGameObjective;
}

export type Message = TextMessage | QuizMessage | VideoMessage | MiniGameMessage;
