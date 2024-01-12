import { Route, Routes } from 'react-router-dom';

import { Home } from './Home/Home';
import { Layout } from './Layout/Layout';
import { Services } from './Services/Services';
import { About } from './About/About';
import { Contacts } from './Contacts/Contacts';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Layout>
  );
};
