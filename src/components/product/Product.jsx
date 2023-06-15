import React, { useEffect } from "react";
import styles from "@/components/product/Product.module.scss";
import ProductFilter from "@/components/product/productFilter/ProductFilter";
import ProductList from "@/components/product/productList/ProductList";
import useFetchCollection from "@/customHooks/useFetchCollection";
import { useDispatch, useSelector } from "react-redux";
import { STORE_PRODUCTS, selectProducts } from "@/redux/slice/productSlice";
import spinnerImg from "@/assets/spinner.jpg";
import { GET_PRICE_RANGE } from "../../redux/slice/productSlice";

const Product = () => {
  const { data, isLoading } = useFetchCollection("products");
  const products = useSelector(selectProducts);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
        products: data,
      })
    );

    dispatch(
      GET_PRICE_RANGE({
        products: data,
      })
    );
  }, [dispatch, data]);
  return (
    <section>
      <div className={`container ${styles.product}`}>
        <aside className={styles.filter}>
          {isLoading ? null : <ProductFilter />}
        </aside>
        <div className={styles.content}>
          {isLoading ? (
            <img
              src={spinnerImg}
              alt="Loading..."
              style={{ width: "50px" }}
              className="--center-all "
            />
          ) : (
            <ProductList products={products} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
