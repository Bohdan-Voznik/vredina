import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  width: 100%;
  background: rgba(185, 238, 255, 0.5);
  box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.25) inset;

  .container {
    padding: 0 85px;
  }
`;

export const HeaderContent = styled.div`
  padding-top: 163px;
  width: 100%;
  height: 552px;

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

export const NavigationList = styled.nav`
  height: 111px;
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 61px;
`;

export const NavigationLink = styled(NavLink)`
  padding: 17px 0;
  position: relative;
  color: #000000;
  font-size: 25px;
  font-weight: 400;
  text-transform: uppercase;

  &.active {
    pointer-events: none;

    &:after {
      position: absolute;
      left: 0;
      bottom: 0;
      content: '';
      width: 100%;
      height: 6px;
      border-radius: 3px;
      background-color: currentColor;
    }
  }
`;
