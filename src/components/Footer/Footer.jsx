import { FooterStyled, HeaderContent, SocialList } from './Footer.styled';
import { Container } from '../Container/Container';

import { ReactComponent as InstagramIcon } from '../../assets/svg/footer/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../assets/svg/footer/twitter.svg';
import { ReactComponent as EmailIcon } from '../../assets/svg/footer/email.svg';

const DATA = [
  {
    text: 'nadiia_kv',
    icon: <InstagramIcon width={40} height={40} />,
    href: 'https://blog.greenroots.info/3-quick-ways-to-add-fonts-to-your-react-app',
  },
  {
    text: 'Nadiia_KV',
    icon: <TwitterIcon width={40} height={40} />,
    href: 'https://blog.greenroots.info/3-quick-ways-to-add-fonts-to-your-react-app',
  },
  {
    text: '14nadya1997@gmail.com',
    icon: <EmailIcon width={40} height={40} />,
    href: 'https://blog.greenroots.info/3-quick-ways-to-add-fonts-to-your-react-app',
  },
];

export const Footer = () => {
  return (
    <FooterStyled>
      <Container className="container">
        <HeaderContent>
          <SocialList>
            {DATA.map(({ icon, text, href }, index) => (
              <li>
                <a href={href} className="hovered">
                  {icon}
                  <span>{text}</span>
                </a>
              </li>
            ))}
          </SocialList>
        </HeaderContent>
      </Container>
    </FooterStyled>
  );
};
