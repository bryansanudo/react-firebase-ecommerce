import styles from "@/components/product/productList/ProductList.module.scss";
import { useState } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import Search from "@/components/search/Search";
import ProductItem from "@/components/product/productItem/ProductItem";

const ProductList = ({ products }) => {
  const [grid, setGrid] = useState(true);
  const [search, setSearch] = useState("");

  return (
    <div className={styles["product-list"]} id="product">
      <div className={styles.top}>
        <div className={styles.icons}>
          <BsFillGridFill
            size={22}
            color="orangered"
            onClick={() => setGrid(true)}
          />
          <FaListAlt size={24} color="#0066d4" onClick={() => setGrid(false)} />
          <p>
            <b>10</b> products found.
          </p>
        </div>
        {/* serach icon */}

        <div>
          <Search value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>

        {/* sort products */}

        <div className={styles.sort}>
          <label>Sort by:</label>
          <select>
            <option value="latest">Latest</option>
            <option value="lowest-price">Lowest Price</option>
            <option value="highest-price">Highest Price</option>
            <option value="a-z">A - Z</option>
            <option value="z-a">Z - A</option>
          </select>
        </div>
      </div>

      <div className={grid ? `${styles.grid}` : `${styles.list}`}>
        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          <>
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <ProductItem {...product} grid={grid} product={product} />
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
