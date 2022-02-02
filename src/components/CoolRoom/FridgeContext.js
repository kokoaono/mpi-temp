import React, { useContext, useState } from 'react';
import { getData } from '../Lsfunctions';

const FridgeContext = React.createContext();
const FridgeAddContext = React.createContext();
const FridgeUpdateContext = React.createContext();
const FridgeDeleteContext = React.createContext();
const FridgeDeleteAllContext = React.createContext();

export const useFridges = () => {
  return useContext(FridgeContext)
};

export const useAddFridge = () => {
  return useContext(FridgeAddContext)
};

export const useFridgeUpdate = () => {
  return useContext(FridgeUpdateContext)
};

export const useFridgeDelete = () => {
  return useContext(FridgeDeleteContext)
};

export const useDeleteAllFridges = () => {
  return useContext(FridgeDeleteAllContext)
};

export const FridgeProvider = ({ children }) => {
  const [fridges, setFridges] = useState(getData());

  //Add fridge
  const addFridge = fridge => {
    const id = Math.floor(Math.random() * 100)
    const date = Date()
    const newFridge = { id, date, ...fridge }
    setFridges([...fridges, newFridge])
  };

  //Update Fridge
  const updateFridge = (id, updatedFridge) => {
    setFridges(fridges.map(fridge => fridge.id === id ? updatedFridge : fridge))
  };

  //Delete Fridge by its ID
  const deleteFridge = id => {
    const filteredFridges = fridges.filter(fridge => fridge.id !== id)
    setFridges(filteredFridges)
  };

  //Delete All
  const deleteAll = () => (
    setFridges([])
  );

  return (
    <FridgeContext.Provider value={{ fridges, setFridges }}>
      <FridgeAddContext.Provider value={addFridge}>
        <FridgeUpdateContext.Provider value={updateFridge}>
          <FridgeDeleteContext.Provider value={deleteFridge}>
            <FridgeDeleteAllContext.Provider value={deleteAll}>
              {children}
            </FridgeDeleteAllContext.Provider>
          </FridgeDeleteContext.Provider>
        </FridgeUpdateContext.Provider>
      </FridgeAddContext.Provider>
    </FridgeContext.Provider>
  )
};