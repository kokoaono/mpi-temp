import React from "react";
import FridgeListItem from "./FridgeListItem";

const getData = () => {
  const data = localStorage.getItem('fridges');
  if (data) {
    return JSON.parse(data);
  } else {
    return []
  }
};
const fridges = getData();
console.log('result', fridges);

const FridgeList = () => (
  <div>
    {fridges.map(fridge => (
      <FridgeListItem key={fridge.id} {...fridge} />
    ))}
  </div>
);

export default FridgeList;