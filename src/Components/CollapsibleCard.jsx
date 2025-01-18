import React, { useState } from "react";

const CollapsibleCard = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={"p-5 bg-cardBack w-auto"}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className={`text-lg font-semibold ${isOpen ? "text-textColor" : "text-gray-900"}`}>
          {title}
        </h3>
        <span className={`text-xl font-bold ${isOpen ? "text-textColor" : "text-black"
      }`}>{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && (
        <div className="mt-4 text-textColor2">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default CollapsibleCard;