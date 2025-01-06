import { FooterStyled } from './Footer.styled';
import { Container } from '../Container/Container';
import { NavLink } from 'react-router-dom';

const DATA = [
  {
    title: 'Kontakt & Termin',
    items: [
      {
        text: ' Olena Zhyliaieva',
      },
      {
        text: '01516-2670569',
        href: 'tel:01516-2670569',
        options: { target: '_blank' },
      },
    ],
  },
  {
    title: 'Ressourcen',
    items: [
      {
        text: 'Nutzungsbedingungen',
        href: '/terms-and-conditions',
        options: {},
      },
    ],
  },
  {
    title: 'Unser Instagram',
    items: [
      {
        text: 'wauwau_groominga',
        href: 'https://www.instagram.com/wauwau_grooming',
        options: { target: '_blank', rel: 'noopener noreferrer' },
      },
    ],
  },
];

export const Footer = () => {
  return (
    <FooterStyled>
      <Container className="container">
        <div className="footer-content">
          {DATA.map(({ title, items }, index) => (
            <div>
              <h4 className="footer-title">{title}</h4>
              <ul className="footer-list">
                {items.map((item, index) => (
                  <li>
                    {!item.href ? (
                      item.text
                    ) : /^\//.test(item.href) ? (
                      <NavLink to={item.href}>{item.text}</NavLink>
                    ) : (
                      <a href={item.href} {...item.options}>
                        {item.text}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </FooterStyled>
  );
};
