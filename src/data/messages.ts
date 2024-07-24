import { Message } from '../types/Message';
import { objectives } from './objectives';

export const messages: Message[] = [
  {
    type: 'text',
    id: 'msg1',
    content: 'Bienvenue dans ce module d\'apprentissage !',
    objectifID:0
  },
  {
    type: 'text',
    id: 'msg2',
    content: 'Nous allons commencer avec une question simple.',
    objectifID:0
  },
  objectives[0],
  {
    type: 'text',
    id: 'msg3',
    content: 'Félicitations pour votre réponse ! Passons à la suite.',
    objectifID:1
  },
  objectives[1],
  objectives[2]
];
