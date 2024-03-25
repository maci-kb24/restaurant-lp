import PropTypes from "prop-types";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <div className="custom-container">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductItem products={product} key={product.id} />
      ))}
      </ul>
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
