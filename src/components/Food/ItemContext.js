import React, { useContext, useState } from 'react';
import { getItemData } from '../Lsfunctions';

// const itemData = getItemData();

// export const ItemsContext = React.createContext();
export const ItemsContext = React.createContext();

export const useItems = () => {
  return useContext(ItemsContext)
}

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState(getItemData());

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  )
};