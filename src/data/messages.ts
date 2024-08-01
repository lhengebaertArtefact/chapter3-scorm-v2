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
  objectives[2],
  {
    type: 'text',
    id: 'msg5',
    content: "Au-delà des limites techniques, l'IA générative peut également présenter des risques pour la société lorsqu'elle est utilisée à mauvais escient.",
    objectifID:3,
    apparitionDelay:500
  },
  objectives[3],
  {
    type: 'text',
    id: 'msg6',
    content: "L'IA peut créer des images très réalistes. Elles peuvent être utilisées pour diffuser de fausses informations.",
    objectifID:4,
    apparitionDelay:1000
  },
  {
    type: 'text',
    id: 'msg7',
    content: "L'IA peut aussi avoir d'autres effets néfastes sur la société dans son ensemble.",
    objectifID:4,
    apparitionDelay:2000
  },
  {
    type: 'text',
    id: 'msg8',
    content: "Cette vidéo vous en dira plus sur les effets de l'IA générative sur la société.",
    objectifID:4,
    apparitionDelay:3000
  },
  objectives[4],
  {
    type: 'text',
    id: 'msg9',
    content: "Félicitations, vous avez fini ce chapitre ! Vous comprennez maintenant que l'IA n'est pas magique : elle a des limites et présente des risques.",
    objectifID:5,
    apparitionDelay:100
  },
];
