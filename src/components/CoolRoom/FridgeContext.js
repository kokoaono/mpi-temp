import React, { useContext, useState } from "react";
import { getData } from "../Lsfunctions";

const FridgeUpdateContext = React.createContext();
const FridgeDeleteContext = React.createContext();
const FridgeDeleteAllContext = React.createContext();

export const useFridgeUpdate = () => {
  return useContext(FridgeUpdateContext);
};

export const useFridgeDelete = () => {
  return useContext(FridgeDeleteContext);
};

export const useDeleteAllFridges = () => {
  return useContext(FridgeDeleteAllContext);
};

export const FridgeProvider = ({ children }) => {
  const [fridges, setFridges] = useState(getData());

  //Update Fridge
  const updateFridge = (id, updatedFridge) => {
    setFridges(
      fridges.map((fridge) => (fridge.id === id ? updatedFridge : fridge))
    );
  };

  //Delete Fridge by its ID
  const deleteFridge = (id) => {
    const filteredFridges = fridges.filter((fridge) => fridge.id !== id);
    setFridges(filteredFridges);
  };

  //Delete All
  const deleteAll = () => setFridges([]);

  return (
    <FridgeUpdateContext.Provider value={updateFridge}>
      <FridgeDeleteContext.Provider value={deleteFridge}>
        <FridgeDeleteAllContext.Provider value={deleteAll}>
          {children}
        </FridgeDeleteAllContext.Provider>
      </FridgeDeleteContext.Provider>
    </FridgeUpdateContext.Provider>
  );
};
