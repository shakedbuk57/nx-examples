import { Route, Routes } from 'react-router-dom';

import '@nx-example/shared/header';

import { CartCartPage } from '@nx-example/cart/cart-page';
import { NewPage } from './NewPage';

export const App = () => {
  return (
    <>
      <nx-example-header />
      <Routes>
        <Route path="/cart" element={<CartCartPage />} />
        <Route path="/new-page" element={<NewPage />} />
      </Routes>
    </>
  );
};

export default App;
