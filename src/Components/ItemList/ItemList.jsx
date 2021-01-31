import React from 'react';

import Item from '../Item/Item';

import './ItemList.scss';

const ItemList = ({ searchResults }) => (
  <div className="item-list">
    {searchResults.map(({ id, thumbnailImageUrl, name, msrp, price }) => (
      <Item
        key={id}
        image={thumbnailImageUrl}
        name={name}
        msrp={msrp}
        price={price}
      />
    ))}
  </div>
);

export default ItemList;
