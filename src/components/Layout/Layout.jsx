import { Header } from '../Header';
import { Footer } from '../Footer';
import { Container } from '../Container/Container';
import { LayoutStyled } from './Layout.styled';

export const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </LayoutStyled>
  );
};
