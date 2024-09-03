import React, { useEffect, useState } from "react";
import AccordianItem from "./AccordianItem";

const Accordian = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [activeAccordianIndex, setActiveAccordianIndex] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=10"
      );
      if (response.status !== 200) {
        throw new Error("status error");
      }
      const data = await response.json();
      setProducts(data), setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const toggleAccordian = (id) => {
    console.log(activeAccordianIndex, id);

    if (id == activeAccordianIndex) {
      return setActiveAccordianIndex(0);
    }
    setActiveAccordianIndex(id);
  };

  return loading ? (
    <div>....is Loading</div>
  ) : (
    <div className="w-[100%]">
      {products.map((productItem) => (
        <AccordianItem
          isOpen={productItem.id === activeAccordianIndex ? true : false}
          handleAccordian={toggleAccordian}
          key={productItem.id}
          product={productItem}
        />
      ))}
    </div>
  );
};

export default Accordian;
