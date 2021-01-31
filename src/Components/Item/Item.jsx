import React from 'react';

const Item = ({ image, name, msrp, price }) => (
  <div>
    <img src={image} alt='' />
    <p className='item-name'>{name}</p>
    {msrp && msrp * 1 > price * 1 ? (
      <>
        <span className='msrp-crossed'>${msrp}</span>
        <span className='price'>${price}</span>
      </>
    ) : (
      <span className='msrp'>${msrp}</span>
    )}
  </div>
);

export default Item;
