import React, { useEffect, useState } from "react";
import CarouselImages from "./CarouselImages";

const Carousel = () => {
  const [imagesList, setImagesList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(false);
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=10"
      );
      if (response.status !== 200) {
        throw new Error("status error");
      }
      const data = await response.json();
      setImagesList(data), setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <div>...loading</div>
  ) : (
    <div className="h-[50vh] w-[90%] mx-auto">
      <CarouselImages images={imagesList} imageLimit={8} />
    </div>
  );
};

export default Carousel;
