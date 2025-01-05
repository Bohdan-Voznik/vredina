import { GalleryStyled } from './Gallery.styled';

import firstImg from '../../img/photo_1.jpg';
import secondImg from '../../img/photo_2.jpg';
import thirdImg from '../../img/photo_3.jpg';
import { Container } from '../Container/Container';

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
