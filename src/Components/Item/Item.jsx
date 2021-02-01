import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Placeholder from '../../assets/photo.png';

const Item = ({ image, name, msrp, price }) => (
  <div className="item-container">
    <LazyLoadImage
      alt=''
      src={image}
      placeholderSrc={Placeholder}
      effect='blur'
    />
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
