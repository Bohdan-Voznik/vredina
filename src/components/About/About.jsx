import { Container } from 'components/Container/Container';
import { AboutStyled, Text, Title } from './About.styled';

export const About = () => {
  return (
    <AboutStyled>
      <Container className="container">
        <Title>About</Title>
        <Text>
          Hi there! I'm Nadiia, your graphic designer and illustrator.
          <br />
          <br />
          I've found my happiness in drawing from an early age, and this passion
          for art has accompanied me throughout my entire life. I'm constantly
          seeking new creative challenges.
          <br />
          <br />
          Throughout my creative journey, I've always pursued new knowledge in
          art and graphic design. My experience in the field of printing has
          given me the opportunity to create designs for various companies,
          businesses, and individuals. I've been involved in crafting designs
          for business cards, flyers, posters, greeting cards, calendars, and
          other printed materials.
          <br />
          <br />
          I also enjoy creating illustrations for children's books, greeting
          cards, and packaging.
          <br />
          <br />
          I always put in 110% effort and strive for excellence for my beloved
          clients, many of whom stay with me for a long time. I don't settle for
          what's been achieved and always aim for perfection, aiming to bring
          joy through my work to those for whom it's created.
          <br />
          <br />
          My pursuit of excellence and thirst for new knowledge confirm that
          there are no limits to my creativity. For me, each project is an
          opportunity to bring something special and inspirational to life.
        </Text>
      </Container>
    </AboutStyled>
  );
};
