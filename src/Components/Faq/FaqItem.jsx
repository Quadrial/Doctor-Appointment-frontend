import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen); // Toggle isOpen state
  };

  return (
    <div
      className="p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer"
      onClick={toggleAccordion}
    >
      <div className="flex items-center justify-between gap-5">
        <h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor">
          {item.question}
        </h4>
        <div
          className={`${
            isOpen && "bg-primaryColor text-white"
          } w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      {isOpen && (
        <div className="pt-5">
          <p className="text-[16px] leading-7 lg:text-[18px] lg:leading-8 border-[#141F21]">
            {item.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
