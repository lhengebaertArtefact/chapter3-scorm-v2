import { Message } from '../types/Message';

export const messages: Message[] = [
  {
    type: 'text',
    id: 'msg1',
    content: 'Bienvenue dans ce module d\'apprentissage !'
  },
  {
    type: 'text',
    id: 'msg2',
    content: 'Nous allons commencer avec une question simple.'
  },
  {
    type: 'quiz',
    id: 'quiz1',
    content: {
      type: 'quiz',
      id: 'objectif_quiz1',
      content: {
        question: 'What is 10 * 10 ?',
        answers: [
          { id: 0, label: '20' },
          { id: 1, label: '100' },
        ],
        correctAnswerID: 1,
      }
    }
  },
  {
    type: 'text',
    id: 'msg3',
    content: 'Félicitations pour votre réponse ! Passons à la suite.'
  },
  {
    type: 'video',
    id: 'video1',
    content: {
      type: 'video',
      id: 'video1',
      content: 'URL_DE_LA_VIDEO'
    }
  },
  {
    type: 'miniGame',
    id: 'miniGame1',
    content: {
      type: 'miniGame',
      id: 'miniGame1',
      content: 'Description du mini-jeu'
    }
  },
  {
    type: 'quiz',
    id: 'quiz2',
    content: {
      type: 'quiz',
      id: 'objectif_quiz2',
      content: {
        question: 'What is France\'s capital ?',
        answers: [
          { id: 0, label: 'Madrid' },
          { id: 1, label: 'Berlin' },
          { id: 2, label: 'Paris' },
        ],
        correctAnswerID: 2,
      }
    }
  },
];
