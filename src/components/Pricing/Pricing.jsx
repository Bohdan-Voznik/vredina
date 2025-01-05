import { PricingStyled } from './Pricing.styled';

import pricingImg from '../../img/pricing.png';
import { Container } from '../Container/Container';

const PRICING_LIST = [
  {
    price: 'ab 55 €',
    title: 'Komplette Pflege für Hunde*',
    description:
      'Waschen, Trocknen, Kämmen, effilieren, Intimpflege, Augen- , Pfoten- &Krallenpflege.',
  },
  {
    price: 'ab 65 €',
    title: 'Premium Komplette Pflege für Hunde*',
    description:
      'Das Komplettpaket der professionellen Hunde-Stylings mit Baden, Trocknen, Bürsten bzw. Schneiden, Scheren, Krallen-, Augen-, Pfoten-, Ohren-,Intimpflege.',
  },
  {
    price: 'ab 50 €',
    title: 'Komplette Pflege für Katzen*',
    description:
      'Krallen kürzen, Pfoten schneiden, Krallen-, Augen-, Pfoten-, Ohren-, Intimpflege.',
  },

  {
    price: '17 € pro Stunde',
    title: 'Trimmen von Hunden*',
    description:
      'Mechanisches Entfernen abgestorbener Haare bei rauhaarigen Hunderassen.',
  },
];

export const Pricing = () => {
  return (
    <PricingStyled>
      <Container>
        <div className="pricing__content">
          <div>
            <h2 className="pricing__title">Leistungen und Preise</h2>
            <ul className="pricing-list">
              {PRICING_LIST.map((item, index) => (
                <li key={index} className="pricing-item">
                  <div>
                    <h4 className="pricing-item__title">{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                  <p className="pricing-item__price">{item.price}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="pricing__right">
            <img src={pricingImg} className="pricing__image" alt="pricing" />
          </div>
        </div>
      </Container>
    </PricingStyled>
  );
};
