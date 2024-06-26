import { Fragment } from "react";
import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categoriesMap  = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
      isLoading ? (
        <Spinner></Spinner>
      ):(
        <Fragment>
          {Object.keys(categoriesMap).map(title => (
            <CategoryPreview key={title} title={title} products={categoriesMap[title]}/>
          ))}
        </Fragment>
      )
  )
}

export default CategoriesPreview;