import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


import {CategoryTitle, CategoryContainer} from "./category.styles";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/categories.selector";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  },[categoriesMap, category])

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
        {isLoading ? (
          <Spinner></Spinner>
         ) : (
        <CategoryContainer>
          {
            products && products.map(product => <ProductCard key={product.id} product={product} />)
          }
        </CategoryContainer>
        )}
    </Fragment>
  )
}

export default Category;