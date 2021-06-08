import { buildQueries } from '@testing-library/dom';
import products from '../../data';
import '../../index.css'
import ProductsHeader from '../ProductHeader/ProductsHeader';

const Products = () => {

  return (
    <div>
      <ProductsHeader />
      <ul className="products">
        {products.products.map((product) => (
          <li key={product.id}>
            <div className="product">
                <div className="order-cat">
                    <button>{product.details.tag}</button>
                </div>
                <img src={product.details.image} alt={product.name} />
                <p>{product.name}</p>
                <hr class="new1"></hr>
              <div className="product-price">
                <div>{product.details.price}</div>
              </div>
              <div>
              <button className="button primary">Add to Cart</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
