
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";
import { Route, Routes } from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
  return <p>Shop</p>;
}
 
function App() {

  return (
    <Routes >
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
