import React from 'react';

const Title = ({ text, size, color }) => {
  const style = {
    fontSize: size === 'large' ? '2em' : size === 'medium' ? '1.5em' : '1em',
    color: color === 'red' ? 'red' : color === 'blue' ? 'blue' : 'black'
  };

  return (
    <h1 style={style}>{text}</h1>
  );
};

export default Title;