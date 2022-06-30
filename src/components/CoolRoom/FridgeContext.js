import React, { useContext, useState } from "react";
import { getData } from "../Lsfunctions";

const FridgeDeleteAllContext = React.createContext();

export const useDeleteAllFridges = () => {
  return useContext(FridgeDeleteAllContext);
};

export const FridgeProvider = ({ children }) => {
  const [fridges, setFridges] = useState(getData());

  //Delete All
  const deleteAll = () => setFridges([]);

  return (
    <FridgeDeleteAllContext.Provider value={deleteAll}>
      {children}
    </FridgeDeleteAllContext.Provider>
  );
};
