import SHOP_DATA from "../shop-data.json";

import { createContext, useState } from "react";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products, setProducts };
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
};