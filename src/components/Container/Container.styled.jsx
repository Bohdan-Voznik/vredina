import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  outline: 1px solid red;

  max-width: 1440px;

  min-width: 360px;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;
