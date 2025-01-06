import styled from '@emotion/styled';
import waveImg from '../../img/wawe_footer.svg';

export const FooterStyled = styled.footer`
  .container {
    position: relative;
    background-color: #6b8cbb;

    :after {
      position: absolute;
      left: 0;
      right: 0;
      top: 2px;
      transform: translateY(-100%);
      z-index: -1;
      content: '';
      display: block;
      aspect-ratio: 1440 / 360;

      background-image: url(${waveImg});
      background-size: 100%;
      background-repeat: no-repeat;
    }
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    gap: 32px;

    padding: 0 0 40px 32px;

    font-weight: 300;
    font-size: 16px;
    color: #fff;

    @media (min-width: 568px) {
      display: flex;
      flex-direction: row;
      gap: 16px;

      padding: 0 0 40px 0;

      justify-content: space-between;
    }

    @media (min-width: 768px) {
      padding: 60px 32px;
    }

    @media (min-width: 1000px) {
      padding: 58px 140px;
    }
  }

  .footer-title {
    font-style: italic;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 16px;
  }

  .footer-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;
