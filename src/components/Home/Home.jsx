import { HomeStyled } from './Home.styled';
import { Pricing } from '../Pricing/Pricing';
import { Gallery } from '../Gallery/Gallery';
import { Header } from '../Header';
import { Advantages } from '../Advantages/Advantages';
import { Footer } from '../Footer';

export const Home = () => {
  return (
    <HomeStyled>
      <Header />
      <Advantages />
      <Pricing />
      <Gallery />
      <Footer />
    </HomeStyled>
  );
};
