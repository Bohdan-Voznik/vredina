import { Container } from 'components/Container/Container';
import {
  ServicesStyled,
  ProjectList,
  Text,
  Title,
  ServicesList,
} from './Services.styled';

const DATA = [
  {
    title: 'Logos',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at atque cum deleniti distinctio dolorem earum exfuga, incidunt, iusto laborum mollitia nam odio, quibusdam rem rerum ullam. Delectus, facere?',
    src: 'https://fon.litrelax.ru/uploads/posts/2023-01/thumbs/1673832807_foni-club-p-kartinki-na-rabochii-stol-sneg-idet-2.jpg',
    alt: 'test',
  },
  {
    title: 'Branding',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at atque cum deleniti distinctio dolorem earum exfuga, incidunt, iusto laborum mollitia nam odio, quibusdam rem rerum ullam. Delectus, facere?',
    src: 'https://fon.litrelax.ru/uploads/posts/2023-01/thumbs/1673832807_foni-club-p-kartinki-na-rabochii-stol-sneg-idet-2.jpg',
    alt: 'test',
  },
  {
    title: 'Custom Illustrations',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at atque cum deleniti distinctio dolorem earum exfuga, incidunt, iusto laborum mollitia nam odio, quibusdam rem rerum ullam. Delectus, facere?',
    src: 'https://fon.litrelax.ru/uploads/posts/2023-01/thumbs/1673832807_foni-club-p-kartinki-na-rabochii-stol-sneg-idet-2.jpg',
    alt: 'test',
  },
  {
    title: 'Illustrations for books',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at atque cum deleniti distinctio dolorem earum exfuga, incidunt, iusto laborum mollitia nam odio, quibusdam rem rerum ullam. Delectus, facere?',
    src: 'https://fon.litrelax.ru/uploads/posts/2023-01/thumbs/1673832807_foni-club-p-kartinki-na-rabochii-stol-sneg-idet-2.jpg',
    alt: 'test',
  },
  {
    title: 'Business cards and more',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at atque cum deleniti distinctio dolorem earum exfuga, incidunt, iusto laborum mollitia nam odio, quibusdam rem rerum ullam. Delectus, facere?',
    src: 'https://fon.litrelax.ru/uploads/posts/2023-01/thumbs/1673832807_foni-club-p-kartinki-na-rabochii-stol-sneg-idet-2.jpg',
    alt: 'test',
  },
  {
    title: 'Websites from scratch',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at atque cum deleniti distinctio dolorem earum exfuga, incidunt, iusto laborum mollitia nam odio, quibusdam rem rerum ullam. Delectus, facere?',
    src: 'https://fon.litrelax.ru/uploads/posts/2023-01/thumbs/1673832807_foni-club-p-kartinki-na-rabochii-stol-sneg-idet-2.jpg',
    alt: 'test',
  },
];

export const Services = () => {
  return (
    <ServicesStyled>
      <Container>
        <Title>Offered services</Title>
        <ServicesList>
          {DATA.map(({ src, alt, title, text }, index) => (
            <li key={index}>
              <p className="imageWrap">
                <img src={src} alt={alt} />
                <span className="text">{text}</span>
              </p>

              <p className="title">{title}</p>
            </li>
          ))}
        </ServicesList>
      </Container>
    </ServicesStyled>
  );
};
