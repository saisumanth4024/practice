import React from "react";
import { CiSquarePlus } from "react-icons/ci";

const AccordianItem = ({ product, handleAccordian, isOpen }) => {
  //   console.log(product);
  const { id, price, title, image, description } = product;

  const handleAccordians = () => {
    console.log("accordian clicked");
    handleAccordian(id);
  };

  return (
    <div className="border shadow-sm rounded-md my-10 p-4 w-[80%] m-auto">
      <div
        className="flex justify-between shadow-sm active:bg-slate-100 px-4"
        onClick={handleAccordians}
      >
        <h1 className="text-2xl font-bold">Items</h1>
        <button>
          <CiSquarePlus />
        </button>
      </div>
      {isOpen && (
        <div className="flex my-4 mx-4 justify-between ">
          <div className="w-[60%]">
            <h1 className="text-xl font-medium ">{title}</h1>
            <p className="truncate">{description.slice(0, 2000)}</p>
            <p>{`price: ${price} Rs`}</p>
          </div>
          <img className="w-[18%] h-36" src={image} />
        </div>
      )}
    </div>
  );
};

export default AccordianItem;
