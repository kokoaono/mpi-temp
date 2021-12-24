import React from "react";
import FridgeListItem from "./FridgeListItem";
import { getData } from "./Lsfunctions";

const fridges = getData();

const FridgeList = () => (
  <>
    <h4>List of Fridges/Freezers</h4>
    <div>
      {fridges.length < 1 && <p>Nothing to show</p>}
      < FridgeListItem fridges={fridges} />
    </div>
  </>
);

export default FridgeList;