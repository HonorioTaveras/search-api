import React from 'react';

const Item = ({ image, name, msrp, price }) => {
  return (
    <div>
      <img src={image} alt='' />
      {name}
    </div>
  );
};

export default Item;
