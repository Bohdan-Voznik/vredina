import styled from '@emotion/styled';

export const PricingStyled = styled.section`
  .pricing__content {
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    gap: 32px;

    @media (min-width: 568px) {
      flex-direction: row;
      padding-top: 265px;
    }
    @media (min-width: 1000px) {
      padding-top: 0;
    }
  }
  .pricing__title {
    font-weight: 400;
    font-size: 36px;
    color: #000;
    margin-bottom: 32px;

    @media (min-width: 568px) {
      max-width: calc(100% - 305px);
    }
  }

  .pricing-list {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .pricing__right {
    flex-shrink: 0;

    @media (min-width: 568px) {
      position: absolute;
      width: 305px;
      right: 0;
      top: 40px;
    }

    @media (min-width: 1000px) {
      width: 35%;
      position: static;
    }

    img {
      width: 100%;
    }
  }

  .pricing-item {
    font-weight: 300;
    font-size: 18px;
    color: #000;

    display: flex;
    flex-direction: column;

    gap: 24px;

    @media (min-width: 1000px) {
      gap: 80px;
      justify-content: space-between;
      flex-direction: row;

      align-items: center;
    }

    .pricing-item__title {
      display: block;
      flex: 1;
      max-width: 650px;
      font-weight: 500;
    }

    .pricing-item__price {
      display: inline-block;

      flex-shrink: 0;
      width: 85px;
      font-weight: 500;
      text-align: center;
      font-size: 20px;
      color: #000;
    }
  }
`;
