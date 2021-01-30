import React from 'react';

const Item = ({ image, name, msrp, price }) => (
  <div>
    <img src={image} alt='' />
    <p className="item-name">{name}</p>
    {/* TODO: conditional rendering for price */}
    <span className="msrp">${msrp}</span>
    <span className="price">${price}</span>
  </div>
);

export default Item;
