import { AdvantagesStyled } from './Advantages.styled';

import firstImg from '../../img/photo_1.jpg';
import secondImg from '../../img/photo_2.jpg';
import thirdImg from '../../img/photo_3.jpg';
import { Container } from '../Container/Container';

const ADVANTAGES_LIST = [
  'Ihr Hund während der Fahrt Stress hat.',
  'Er sich in einer neuen Umgebung unwohl fühlt.',
  'Ihr Haustier schlechte Erfahrungen mit einem Grooming-Salon gemacht hat.',
  'Angst oder Aggression in fremder Umgebung zeigt.',
  'Sie keine Zeit oder Möglichkeit haben, Ihren Hund in einen Salon zu bringen.',
];

export const Advantages = () => {
  return (
    <AdvantagesStyled>
      <Container>
        <div className="advantages__content">
          <h2 className="advantages__title">
            Mobiler Hundeservice ist ideal für Sie, wenn:
          </h2>
          <ul className="advantages__list">
            {ADVANTAGES_LIST.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </Container>
    </AdvantagesStyled>
  );
};
