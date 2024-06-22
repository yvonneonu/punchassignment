import React, { useState } from "react";
import Inactive from "../../asset/inactive.svg";
import Active from "../../asset/Active.svg";

const AccordionItem = ({ title, content, isOpen, onClick, des }) => {
  return (
    <div
      className={`p-4 ${isOpen ? "shadow-lg" : ""} rounded-md border ${
        isOpen ? "border-gray-300" : ""
      }`}
    >
      <button
        className="w-full text-left px-4 py-2 focus:outline-none flex gap-6 items-center"
        onClick={onClick}
      >
        <span>
          {isOpen ? (
            <img src={Active} alt="Active" />
          ) : (
            <img src={Inactive} alt="Inactive" />
          )}
        </span>
        <div className="space-x-1 text-base text-rwilt-tone-60">
          <span className="font-switSbold">{title}</span>

          <span className="font-switReg">{des}</span>
        </div>
      </button>
      {isOpen && (
        <div className="px-4 py-2 font-switReg text-base text-rwilt-tone-60">
          {content}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col gap-5 mt-8 max-w-[650px] mx-auto">
      {items.map((item, index) => (
        <div key={index} className="bg-white shadow-md rounded-md">
          <AccordionItem
            title={item.title}
            des={item.des}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
