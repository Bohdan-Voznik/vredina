import styled from '@emotion/styled';

import img from '../../assets/images/background.webp';

export const LayoutStyled = styled.main`
  min-height: 100vh;
  display: flex;

  background-image: url(${img});
  background-position: top center;

  flex-direction: column;
  .main {
    width: 100%;
    flex: 1;
  }
`;
