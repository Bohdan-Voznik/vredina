import styled from '@emotion/styled';

export const HomeStyled = styled.div`
  padding: 73px 0;

  .firstContainer {
    padding: 0 192px;
  }
`;

export const Text = styled.p`
  color: #f3f3f3;
  font-size: 46px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &.first {
    margin-bottom: 105px;
  }
  &.second,
  &.third {
    margin-bottom: 65px;
  }

  a {
    color: #014a73;
  }
`;

export const ProjectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -25px;

  li {
    width: calc((100% - 50px * 2) / 2);
    margin: 25px;
  }
  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }
`;
