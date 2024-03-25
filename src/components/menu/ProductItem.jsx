import PropTypes from "prop-types";

const ProductItem = ({ products }) => {
  return (
    <li className="product-item hover:cursor-pointer">
      <div className="mb-5">
      <img src={products.img} className="hover:brightness-50 hover:duration-500" />
      </div>
      <div className="text-center">
        <h3 className="uppercase font-bold mb-5">{products.name}</h3>
        <p className="text-gray-300 mb-5">{products.description}</p>
        <p className="text-yellow-500 font-extrabold text-xl">${products.price}</p>
      </div>
    </li>
  );
};

ProductItem.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductItem;
