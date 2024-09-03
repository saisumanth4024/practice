import React from "react";
import { ShoppingState } from "../context/context";

const Home = () => {
  const {
    state: { products },
  } = ShoppingState();
  return (
    <div>
      <div className="py-9 flex">
        {/* Filters */}
        {/* <Filters /> */}
        {/* Products */}
        {filteredProducts.length > 0 && (
          <div className="products w-full">
            {filteredProducts?.slice(page * 10 - 10, page * 10).map((prod) => {
              return (
                <span className={`products__single`} key={prod.id}>
                  <img src={prod.thumbnail} alt={prod.title} />
                  <span>{prod.title}</span>
                  <hr />
                  <span>$ {prod.price}</span>
                  <StarRating rating={prod.rating} />
                </span>
              );
            })}
          </div>
        )}
      </div>

      {filteredProducts.length > 0 && (
        <Pagination products={filteredProducts} page={page} setPage={setPage} />
      )}
    </div>
  );
};

export default Home;
