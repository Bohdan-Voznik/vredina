import styled from '@emotion/styled';
import waveImg from '../../img/wave.svg';
import waveMobileImg from '../../img/wave_mobile.svg';

export const HeaderStyled = styled.header`
  .container {
    background-image: url(${waveMobileImg});
    background-size: 100%;
    background-repeat: no-repeat;

    @media (min-width: 568px) {
      background-image: url(${waveImg});
      background-size: 100%;
      min-height: 560px;
    }
  }

  .header__content {
    display: flex;
    flex-direction: column;
    padding-top: 32px;

    @media (min-width: 568px) {
      flex-direction: row;
      background-size: 100%;
      min-height: 560px;
      //padding-bottom: 70px;
    }
  }

  .header__logo {
    margin: 0 auto;
    width: 100%;
    flex-shrink: 0;

    p {
      padding: 0 40px;
      margin-top: -15px;
      font-family: 'Itim', serif;
      text-align: center;
      font-weight: 400;
      font-size: 20px;
      color: #000;

      @media (min-width: 768px) {
        font-size: 32px;
      }
    }
    @media (min-width: 568px) {
      min-width: 400px;
      width: 50%;
    }
  }

  .header__banner {
    width: 50%;
    margin-left: auto;

    @media (min-width: 568px) {
      flex: 1;
      margin-left: -40px;
    }
  }

  img {
    width: 100%;
  }
`;
