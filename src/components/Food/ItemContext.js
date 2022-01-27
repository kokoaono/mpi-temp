import React, { useState } from 'react';
import { getItemData } from '../Lsfunctions';
const itemData = getItemData();
export const ItemsContext = React.createContext(itemData);

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState(itemData);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  )

};