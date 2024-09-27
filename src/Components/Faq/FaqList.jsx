import React from "react";
import { faqs } from "../../assets/data/faqs";
import FaqItem from "./FaqItem";

export const FaqList = (item) => {
  return (
    <>
      <ul>
        {faqs.map((item, index) => (
          <FaqItem item={item} key={index} />
        ))}
      </ul>
    </>
  );
};

export default FaqList;
