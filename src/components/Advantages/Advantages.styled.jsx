import styled from '@emotion/styled';

import img from '../../assets/images/background.webp';

export const AdvantagesStyled = styled.section`
  position: relative;
  padding-bottom: 32px;

  .advantages__content {
    @media (min-width: 568px) {
      z-index: 1;
      position: absolute;
      top: -30px;
      transform: translateY(-100%);
    }

    @media (min-width: 1000px) {
      width: 47%;
    }
  }

  .advantages__title {
    max-width: 360px;

    font-weight: 400;
    font-size: 36px;
    color: #000;
    margin-bottom: 24px;

    @media (min-width: 1000px) {
      max-width: 500px;
    }
  }

  .advantages__list {
    list-style: unset;
    padding-left: 24px;
    font-weight: 300;
    font-size: 18px;
    color: #000;
  }
`;
