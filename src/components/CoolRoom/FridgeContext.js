import React, { useContext, useState } from "react";
import { getData } from "../Lsfunctions";

const FridgeDeleteContext = React.createContext();
const FridgeDeleteAllContext = React.createContext();

export const useFridgeDelete = () => {
  return useContext(FridgeDeleteContext);
};

export const useDeleteAllFridges = () => {
  return useContext(FridgeDeleteAllContext);
};

export const FridgeProvider = ({ children }) => {
  const [fridges, setFridges] = useState(getData());

  //Delete Fridge by its ID
  const deleteFridge = (id) => {
    const filteredFridges = fridges.filter((fridge) => fridge.id !== id);
    setFridges(filteredFridges);
  };

  //Delete All
  const deleteAll = () => setFridges([]);

  return (
    <FridgeDeleteContext.Provider value={deleteFridge}>
      <FridgeDeleteAllContext.Provider value={deleteAll}>
        {children}
      </FridgeDeleteAllContext.Provider>
    </FridgeDeleteContext.Provider>
  );
};
