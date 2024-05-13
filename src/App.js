
import { Route, Routes } from 'react-router-dom';

import Home from "./routes/home/home.component";
import Authentification from "./routes/authentification/authentification.component";
import Shop from "./routes/shop/shop.component";
import Navigation from "./routes/navigation/navigation.component";
import Checkout from "./routes/checkout/checkout.component";

function App() {

  return (
    <Routes >
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentification />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
