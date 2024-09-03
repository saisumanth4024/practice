import React, { useState } from "react";
import Star from "./Star";

const StarRating = () => {
  const [activeRating, setActiveRating] = useState(0);

  const changeRating = (index) => {
    setActiveRating(index);
  };

  return (
    <div className="flex justify-center mt-10">
      <Star star={5} changeRating={changeRating} rating={activeRating} />
    </div>
  );
};

export default StarRating;
