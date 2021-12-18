import React from "react";
import FridgeListItem from "./FridgeListItem";
import { getData } from "./Lsfunctions";

const fridges = getData();

const FridgeLists = () => (
  <div>
    {fridges.length < 1 && <p>Nothing to show</p>}
    < FridgeListItem fridges={fridges} />
  </div>
);

export default FridgeLists;