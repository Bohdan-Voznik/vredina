import { useLocation } from 'react-router-dom';

import {
  HeaderStyled,
  Title,
  NavigationList,
  HeaderContent,
  NavigationLink,
} from './Header.styled';
import { Container } from '../Container/Container';
import classNames from 'classnames';

const DATA = [
  { text: 'Home', href: '/' },
  { text: 'Services', href: '/services' },
  { text: 'About', href: '/about' },
  { text: 'Contacts', href: '/contacts' },
];

export const Header = () => {
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <HeaderStyled>
      <Container className="container">
        <HeaderContent>
          <Title>
            Design <br />
            for you
          </Title>

          <NavigationList>
            {DATA.map(({ text, href }, index) => (
              <NavigationLink to={href} className="hovered">
                {text}
              </NavigationLink>
            ))}
          </NavigationList>
        </HeaderContent>
      </Container>
    </HeaderStyled>
  );
};
