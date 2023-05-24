import React from "react";
import styles from "@/components/product/Product.module.scss";
import ProductFilter from "@/components/product/productFilter/ProductFilter";
import ProductList from "@/components/product/productList/ProductList";

const Product = () => {
  return (
    <section>
      <div className={`container ${styles.product}`}>
        <aside className={styles.filter}>
          <ProductFilter />
        </aside>
        <div className={styles.content}>
          <ProductList />
        </div>
      </div>
    </section>
  );
};

export default Product;
