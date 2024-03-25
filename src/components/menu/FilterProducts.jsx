import PropTypes from "prop-types";
import Button from "../Button";

const FilterProducts = ({ onSelectFilter }) => {
  const handleFilterClick = (filter) => {
    onSelectFilter(filter);
  };

  return (
    <div className="my-10 flex justify-evenly">
      <Button onClick={() => handleFilterClick("all")}>All</Button>
      <Button onClick={() => handleFilterClick("burgers")}>Burgers</Button>
      <Button onClick={() => handleFilterClick("pizzas")}>Pizzas</Button>
      <Button onClick={() => handleFilterClick("steaks")}>Steaks</Button>
      <Button onClick={() => handleFilterClick("pastas")}>Pastas</Button>
      <Button onClick={() => handleFilterClick("salads")}>Salads</Button>
      <Button onClick={() => handleFilterClick("deserts")}>Deserts</Button> 
      <Button onClick={() => handleFilterClick("drinks")}>Drinks</Button>
    </div>
  );
};

FilterProducts.propTypes = {
  onSelectFilter: PropTypes.func.isRequired,
};

export default FilterProducts;
