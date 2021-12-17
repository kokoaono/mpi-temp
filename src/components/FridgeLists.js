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

const FridgeLists = () => (
  <div>
    {fridges.length < 1 && <p>Nothing to show</p>}
    < FridgeListItem fridges={fridges} />
  </div>
);

export default FridgeLists;