import styles from "@/components/product/productFilter/ProductFilter.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from "@/redux/slice/productSlice";
import { useState } from "react";
import { FILTER_BY_CATEGORY } from "@/redux/slice/filterSlice";

const ProductFilter = () => {
  const [category, setCategory] = useState("All");
  const products = useSelector(selectProducts);

  const dispatch = useDispatch();

  const allCategories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filterProducts = (cat) => {
    setCategory(cat);
    dispatch(FILTER_BY_CATEGORY({ products, category: cat }));
  };

  return (
    <div className={styles.filter}>
      <h4>Categories</h4>
      <div className={styles.category}>
        {allCategories.map((cat, index) => {
          return (
            <button
              key={index}
              type="button"
              className={`${category}` === cat ? `${styles.active} ` : null}
              onClick={() => filterProducts(cat)}
            >
              &#8250; {cat}
            </button>
          );
        })}
      </div>
      <h4>Brand</h4>
      <div className={styles.brand}>
        <select name="brand">
          <option value="all">All</option>
        </select>
        <h4>Price</h4>
        <p>1500</p>
        <div className={styles.price}>
          <input type="range" name="price" min="100" max="1000" />
        </div>
        <br />
        <button className="--btn --btn-danger">Clear Filter</button>
      </div>
    </div>
  );
};

export default ProductFilter;
