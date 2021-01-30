import React from 'react';

import Item from '../Item/Item';

const ItemList = ({ searchResults }) => (
  <div>
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
