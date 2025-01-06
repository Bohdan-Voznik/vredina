import { Route, Routes } from 'react-router-dom';

import { Home } from './Home/Home';
import { Layout } from './Layout/Layout';
import { Terms } from './Terms/Terms';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
      </Routes>
    </Layout>
  );
};
