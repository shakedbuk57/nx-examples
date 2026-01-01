import { Route, Routes } from 'react-router-dom';

import '@nx-example/shared/header';

import { CartCartPage } from '@nx-example/cart/cart-page';
import { LoginPage } from './LoginPage';

export const App = () => {
  return (
    <>
      <nx-example-header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartCartPage />} />
      </Routes>
    </>
  );
};

export default App;
