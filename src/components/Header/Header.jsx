import { useLocation } from 'react-router-dom';

import { HeaderStyled } from './Header.styled';
import { Container } from '../Container/Container';

import logoImg from '../../img/logo.png';
import bannerImg from '../../img/banner.png';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container className="container">
        <div className="header__content">
          <div className="header__logo">
            <img src={logoImg} alt="logo" />

            <p>Göttingen · Kassel · Fulda · Eisenach</p>
          </div>
          <div className="header__banner">
            <img src={bannerImg} alt="logo" />
          </div>
        </div>
      </Container>
    </HeaderStyled>
  );
};
