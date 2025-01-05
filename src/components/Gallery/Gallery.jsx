import { GalleryStyled } from './Gallery.styled';

import firstImg from '../../img/photo_1.jpg';
import secondImg from '../../img/photo_2.jpg';
import thirdImg from '../../img/photo_3.jpg';
import { Container } from '../Container/Container';

const PRICING_LIST = [
  {
    price: 'ab 55 €',
    title: 'Komplette Pflege für Hunde*',
    description:
      'Waschen, Trocknen, Kämmen, effilieren, Intimpflege, Augen- , Pfoten- &Krallenpflege.',
  },
  {
    price: 'ab 65 €',
    title: 'Premium Komplette Pflege für Hunde*',
    description:
      'Das Komplettpaket der professionellen Hunde-Stylings mit Baden, Trocknen, Bürsten bzw. Schneiden, Scheren, Krallen-, Augen-, Pfoten-, Ohren-,Intimpflege.',
  },
  {
    price: 'ab 50 €',
    title: 'Komplette Pflege für Katzen*',
    description:
      'Krallen kürzen, Pfoten schneiden, Krallen-, Augen-, Pfoten-, Ohren-, Intimpflege.',
  },

  {
    price: '17 € pro Stunde',
    title: 'Trimmen von Hunden*',
    description:
      'Mechanisches Entfernen abgestorbener Haare bei rauhaarigen Hunderassen.',
  },
];

export const Gallery = () => {
  return (
    <GalleryStyled>
      <Container>
        <ul>
          <li>
            <img src={firstImg} alt="firstImg" />
          </li>
          <li>
            <img src={secondImg} alt="secondImg" />
          </li>
          <li>
            <img src={thirdImg} alt="thirdImg" />
          </li>
        </ul>
      </Container>
    </GalleryStyled>
  );
};
