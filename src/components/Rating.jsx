import React from 'react';

const Rating = ({ maxStars, selectedStars }) => {
  const stars = Array.from({ length: maxStars }, (_, index) => {
    const starColor = index < selectedStars ? 'yellow' : 'gray';
    return <span key={index} style={{ color: starColor, fontSize: 40, marginLeft: 20}}>★</span>;
  });

  return (
    <div>{stars}</div>
  );
};

export default Rating;