import React from "react";

const CollapsibleCard = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="p-5 bg-cardBack w-auto">
      {/* Card Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onToggle}
      >
        <h3
          className={`text-lg font-semibold ${
            isOpen ? "text-textColor" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
        <span
          className={`text-xl font-bold ${
            isOpen ? "text-textColor" : "text-black"
          }`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </div>

      {/* Card Content with Smooth Transition */}
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="mt-4 text-textColor2">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default CollapsibleCard;
