import React from "react";

import '../../index.css'
import products from '../../data'

const ProductsHeader = () => {
  return (
    <div className="product-header">
      <div className="numOf-products">
        <span>5 Product(s) found.</span>
      </div>
      <div>
        <span>Size: </span>
        <select className="select" name="sizelist" form="sizeform">
          {products.products.map((option, key) => <option key={key}>
              {option.details.size}
          </option>)}
        </select>
      </div>
    </div>
  );
};

export default ProductsHeader;
