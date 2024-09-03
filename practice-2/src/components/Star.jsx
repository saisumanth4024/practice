import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ star = 5, changeRating, rating }) => {
  const [hoverIndex, setHoverIndex] = useState(0);

  return (
    <div className="flex">
      {[...Array(star)].map((_, index) => (
        <div
          className=""
          key={index}
          onMouseEnter={() => setHoverIndex(index + 1)}
          onMouseLeave={() => setHoverIndex(0)}
          onClick={() => changeRating(index + 1)}
        >
          <FaStar
            className={`text-3xl font-bold ${
              index < hoverIndex ? "text-orange-700" : ""
            } ${index < rating ? "text-green-500" : " "} `}
          />
        </div>
      ))}
    </div>
  );
};

export default Star;
