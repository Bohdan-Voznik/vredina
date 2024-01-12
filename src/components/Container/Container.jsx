import { Wrapper } from './Container.styled';

export const Container = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
