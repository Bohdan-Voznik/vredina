import styled from '@emotion/styled';

import img from '../../assets/images/background.webp';

export const GalleryStyled = styled.section`
  padding: 32px 0;
  ul {
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (min-width: 568px) {
      flex-direction: row;

      gap: 24px;
    }
  }

  li {
    display: block;

    @media (min-width: 568px) {
      width: calc((100% - 24px * 2) / 3);
    }
  }

  img {
    width: 100%;
  }
`;
