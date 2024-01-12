import styled from '@emotion/styled';

export const FooterStyled = styled.footer`
  width: 100%;
  background: rgba(185, 238, 255, 0.5);
  box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.25) inset;

  .container {
    padding: 0 50px;
  }
`;

export const HeaderContent = styled.div`
  padding-top: 49px;
  width: 100%;
  height: 243px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 90px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SocialList = styled.ul`
  li:not(:last-child) {
    margin-bottom: 7px;
  }

  a {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  svg {
    fill: #0f3379;
    opacity: 0.55;
    margin-right: 24px;
  }

  span {
    color: #f3f3f3;

    font-size: 35px;
    font-weight: 300;
    line-height: normal;
  }
`;
