
import Home from "./routes/home/home.component";
import Authentification from "./routes/authentification/authentification.component";
import Shop from "./routes/shop/shop.component";
import { Route, Routes } from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component";

function App() {

  return (
    <Routes >
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentification />} />
      </Route>
    </Routes>
  );
}

export default App;
