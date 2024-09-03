import React, { useEffect, useRef, useState } from "react";

const CarouselImages = ({ images, imageLimit = 8 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const imageRefs = useRef([]);
  // console.log(imageRefs);

  useEffect(() => {
    if (images.length > 0 && imageRefs.current[0]) {
      // Set image width based on the first image's width
      setImageWidth(imageRefs.current[0].offsetWidth);
    }
  }, [images]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageLimit - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageLimit - 1 : prevIndex - 1
    );
  };

  return (
    <div className="h-full w-[95%] relative overflow-hidden">
      <div
        className="h-full w-[90%] m-auto flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${imageWidth * currentIndex}px)` }}
      >
        {images?.slice(0, 8).map((imageItem, index) => (
          <img
            className="m-2 border-2 border-solid border-gray-500"
            src={imageItem.image}
            alt={imageItem.title}
            key={imageItem.id}
            ref={(el) => (imageRefs.current[index] = el)}
            onLoad={() => setImageWidth(imageRefs.current[0]?.offsetWidth)}
          />
        ))}
      </div>
      <div>
        <button className="absolute top-[50%] left-[3%]" onClick={goToPrev}>
          ◀️
        </button>
        <button className="absolute top-[50%] right-[3%]" onClick={goToNext}>
          ▶️
        </button>
      </div>
    </div>
  );
};

export default CarouselImages;
