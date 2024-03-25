import bgTitle from "../../assets/images/bg-title.png";
import bgPattern from "../../assets/images/bg-pattern.jpg";
import FilterProducts from "./FilterProducts";
import ProductList from "./ProductList";
import { useState } from "react";
import Product1 from "../../assets/images/product-1.jpg";
import Product2 from "../../assets/images/product-2.jpg";
import Product3 from "../../assets/images/product-3.png";
import Product4 from "../../assets/images/product-4.jpg";
import Product5 from "../../assets/images/product-5.jpg";
import Product6 from "../../assets/images/product-6.jpg";
import Product7 from "../../assets/images/product-7.jpg";
import Product8 from "../../assets/images/product-8.jpg";

const Menu = () => {
  const products = [
    {
      id: 1,
      name: "DOUBLE CHEESE PIZZA",
      description: "Double cheese, oregano, tomato sauce, basil",
      category: "pizzas",
      price: 10,
      img: Product1,
    },
    {
      id: 2,
      name: "SEAFOOD",
      description: "Shrimp, mussels, calamari, tomato sauce, basil",
      category: "fastfood",
      price: 15,
      img: Product2,
    },
    {
      id: 3,
      name: "DOUBLE MAC BURGER",
      description: "Double cheese, oregano, tomato sauce, basil",
      category: "burgers",
      price: 20,
      img: Product3,
    },
    {
      id: 4,
      name: "PASTA",
      description: "Pasta, tomato sauce, basil",
      category: "pastas",
      price: 5,
      img: Product4,
    },
    {
      id: 5,
      name: "BEEF CHEESE BURGER",
      description: "Double cheese, oregano, tomato sauce, basil",
      category: "burgers",
      price: 8,
      img: Product5,
    },
    {
      id: 6,
      name: "GRAND ITALIANO PIZZA",
      description: "Double cheese, oregano, tomato sauce, basil",
      category: "pizzas",
      price: 10,
      img: Product6,
    },
    {
      id: 7,
      name: "LEMONADE",
      description: "Lemon, sugar, water",
      category: "drinks",
      price: 10,
      img: Product7,
    },
    {
      id: 8,
      name: "CHICKEN BURGER",
      description: "Chicken, cheese, oregano, tomato sauce, basil",
      category: "burgers",
      price: 15,
      img: Product8,
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterSelect = filter => {
      if (filter === 'all') {
        setFilteredProducts(products);
      } else {
        const filtered = products.filter(product => product.category === filter);
        setFilteredProducts(filtered);
      }
    };

  return (
    <div
      id="menu"
      className="bg-repeat py-24 justify-center"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div className="custom-container">
        <div className="flex justify-center mb-12">
          <img src={bgTitle} />
          <h2 className="about-title uppercase text-4xl font-extrabold">
            Our Menu
          </h2>
        </div>
        <FilterProducts onSelectFilter={handleFilterSelect} filteredProducts={filteredProducts} />
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Menu;
