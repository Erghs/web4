import React from 'react';

const Input = ({ type, placeholder, value }) => {
  return (
    <input type={type} className="form-control" placeholder={placeholder} value={value} />
  );
};

export default Input;