import React from 'react';

const Button = ({ text, onClick, className }) => {
  return (
    <button
      className={`bg-buttonOrange hover:bg-orange-600 text-white text-sm py-3 px-6 rounded font-bold uppercase ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
