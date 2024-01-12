import { Container } from 'components/Container/Container';
import { HomeStyled, ProjectList, Text } from './Home.styled';

const DATA = [
  {
    src: 'https://fon.litrelax.ru/uploads/posts/2023-01/thumbs/1673832807_foni-club-p-kartinki-na-rabochii-stol-sneg-idet-2.jpg',
    alt: 'test',
  },
  {
    src: 'https://fon.litrelax.ru/uploads/posts/2023-01/thumbs/1673832807_foni-club-p-kartinki-na-rabochii-stol-sneg-idet-2.jpg',
    alt: 'test',
  },
  {
    src: 'https://fon.litrelax.ru/uploads/posts/2023-01/thumbs/1673832807_foni-club-p-kartinki-na-rabochii-stol-sneg-idet-2.jpg',
    alt: 'test',
  },
  {
    src: 'https://fon.litrelax.ru/uploads/posts/2023-01/thumbs/1673832807_foni-club-p-kartinki-na-rabochii-stol-sneg-idet-2.jpg',
    alt: 'test',
  },
  {
    src: 'https://fon.litrelax.ru/uploads/posts/2023-01/thumbs/1673832807_foni-club-p-kartinki-na-rabochii-stol-sneg-idet-2.jpg',
    alt: 'test',
  },
  {
    src: 'https://fon.litrelax.ru/uploads/posts/2023-01/thumbs/1673832807_foni-club-p-kartinki-na-rabochii-stol-sneg-idet-2.jpg',
    alt: 'test',
  },
];

export const Home = () => {
  return (
    <HomeStyled>
      <Container className="firstContainer">
        <Text className="first">
          Hi! I'm Nadiia.
          <br />A freelance graphic designer and illustrator.
        </Text>
        <Text className="second">I`ll help bring your ideas to life!</Text>
        <Text className="third">
          Scroll down to see more of my work or{' '}
          <a
            href="https://www.ffonts.net/JejuMyeongjo.font.download"
            className="hovered"
          >
            get in touch with me directly.
          </a>
        </Text>
      </Container>
      <Container className="secondContainer">
        <ProjectList>
          {DATA.map(({ src, alt }, index) => (
            <li key={index}>
              <img src={src} alt={alt} />
            </li>
          ))}
        </ProjectList>
      </Container>
    </HomeStyled>
  );
};
