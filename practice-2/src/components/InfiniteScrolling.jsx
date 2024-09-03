import React, { useEffect, useState } from "react";

const InfiniteScrolling = () => {
  const [imagesList, setImagesList] = useState([1, 2, 3, 4]);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(1);

  console.log(Array(9).fill(""));

  useEffect(() => {
    fetchProducts();
  }, []);

  const myThrottle = (cb, delay) => {
    let last = 0;
    return function (...args) {
      let currentTime = new Date().getTime();
      if (currentTime - last < delay) return;
      last = currentTime;
      return cb(...args);
    };
  };

  const handleScroll = myThrottle(() => {
    if (
      !loading &&
      window.innerHeight + document.documentElement.scrollTop + 500 >
        document.documentElement.offsetHeight
    ) {
      fetchProducts();
    }
  }, 900);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const fetchProducts = async () => {
    setLoading(false);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=${index * 10}`
      );
      if (response.status !== 200) {
        throw new Error("status error");
      }
      const data = await response.json();
      setImagesList(...imagesList, ...data),
        setSelectedIndex(selectedIndex + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <div>...loading</div>
  ) : (
    <div className="pagination-item-wrap h-[75vh] w-[80%] sm:w-[80%] mx-auto ">
      {imagesList?.map((productItem) => (
        <div
          key={productItem.id}
          className="flex my-2 border-[1px] p-6  rounded-md border-solid border-stone-500"
        >
          <div className="w-[70%]">
            <h1 className="text-2xl font-bold">{productItem.title}</h1>
            <p className="my-2">{productItem.description}</p>
          </div>
          <img
            className="w-36 h-36 ml-[10%]"
            src={productItem.url}
            alt={productItem.title}
          />
        </div>
      ))}

      {/* <div className="pagination-list-wrap  flex justify-center ">
        <button
          className="px-4 py-1 mx-3 border-2  border-solid border-blue-400  focus:bg-slate-400"
          onClick={() => {
            if (selectedIndex !== 1 && selectedIndex < imagesList.length / 4) {
              setSelectedIndex((prevIndex) => prevIndex - 1);
            }
          }}
          disabled={selectedIndex === 1}
        >
          👈
        </button>

        {[...Array(imagesList.length / 4)].map((_, index) => (
          <button
            className="px-4 py-1 mx-3 border-2  border-solid border-blue-400 focus:bg-slate-400 cursor-pointer"
            onClick={() => {
              setSelectedIndex(index + 1);
            }}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-4 py-1 mx-3 border-2  border-solid border-blue-400  focus:bg-slate-400 cursor-pointer"
          onClick={() => {
            if (selectedIndex !== 0 && selectedIndex < imagesList.length / 4) {
              setSelectedIndex((prevIndex) => prevIndex + 1);
            }
          }}
          disabled={selectedIndex === imagesList.length}
        >
          👉
        </button>
      </div> */}
    </div>
  );
};

export default InfiniteScrolling;
