import React, { useState, useContext } from 'react';
import { getItemData } from '../Lsfunctions';

const ItemsContext = React.createContext();

export const useItems = () => {
  return useContext(ItemsContext)
};

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState(getItemData())

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  )
};