import React, { useState, useContext } from 'react';
import { getItemData } from '../Lsfunctions';

const ItemsContext = React.createContext();
const ItemAddContext = React.createContext();
const ItemUpdateContext = React.createContext();
const ItemDeleteContext = React.createContext();
const DeleteAllContext = React.createContext();


export const useItems = () => {
  return useContext(ItemsContext)
};

export const useAddItem = () => {
  return useContext(ItemAddContext)
};

export const useItemUpdate = () => {
  return useContext(ItemUpdateContext)
};

export const useItemDelete = () => {
  return useContext(ItemDeleteContext)
};

export const useDeleteAll = () => {
  return useContext(DeleteAllContext)
};

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState(getItemData());

  //Add new item
  const addItem = item => {
    const id = Math.floor(Math.random() * 100)
    const date = new Date().toDateString();
    const newItem = { id, date, ...item }
    setItems([...items, newItem])
  };

  //Update Item
  const updateFoodItem = (id, updatedItem) => {
    setItems(items.map(item => item.id === id ? updatedItem : item))
  };

  //Delete item by its ID
  const deleteItem = id => {
    const filteredItems = items.filter(item => item.id !== id)
    setItems(filteredItems)
  };

  //Delete all
  const deleteAllItems = () => (
    setItems([])
  );

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      <ItemAddContext.Provider value={addItem}>
        <ItemUpdateContext.Provider value={updateFoodItem}>
          <ItemDeleteContext.Provider value={deleteItem}>
            <DeleteAllContext.Provider value={deleteAllItems}>
              {children}
            </DeleteAllContext.Provider>
          </ItemDeleteContext.Provider>
        </ItemUpdateContext.Provider>
      </ItemAddContext.Provider>
    </ItemsContext.Provider>
  )
};