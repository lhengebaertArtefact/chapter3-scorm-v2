import { Message } from '../types/Message';
import { objectives } from './objectives';

export const messages: Message[] = [
  {
    type: 'text',
    id: 'msg1',
    content: 'Bonjour ! Je suis content de vous retrouver :)',
    objectifID:0,
    apparitionDelay:0
  },
  {
    type: 'text',
    id: 'msg2',
    content: 'Vous connaissez maintenant l\'incroyable potentiel de l\'IA générative, mais vous savez aussi que l\'IA n\'est pas magique.',
    objectifID:0,
    apparitionDelay:1000
  },
  {
    type: 'text',
    id: 'msg3',
    content: 'Parlons des risques de l\'IA générative.',
    objectifID:0,
    apparitionDelay:2000
  },
  objectives[0],
  {
    type: 'text',
    id: 'msg4',
    content: 'Regardez cette vidéo pour en savoir plus sur les limites techniques de l\'IA générative.',
    objectifID:1,
    apparitionDelay:1000
  },
  objectives[1],
  objectives[2]
];
