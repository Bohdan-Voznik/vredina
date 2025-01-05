import { LayoutStyled } from './Layout.styled';

export const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <div className="main">{children}</div>
      {/*<Footer />*/}
    </LayoutStyled>
  );
};
