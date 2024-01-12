import styled from '@emotion/styled';

export const ServicesStyled = styled.div`
  padding: 73px 0;
`;

export const Title = styled.p`
  color: #f3f3f3;
  font-size: 70px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  margin-bottom: 52px;
`;

export const ServicesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -25px;

  li {
    width: calc((100% - 50px * 2) / 2);
    margin: 25px;
  }
  img {
    display: block;
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }

  .imageWrap {
    position: relative;
    margin-bottom: 15px;
    overflow: hidden;
    cursor: pointer;

    &:hover {
      .text {
        transform: translateY(0);
      }
    }
  }

  .text {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    width: 100%;
    height: 100%;
    color: #f3f3f3;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    transform: translateY(100%);

    transition: transform 500ms;
  }

  .title {
    color: #f3f3f3;
    font-size: 65px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
  }
`;
