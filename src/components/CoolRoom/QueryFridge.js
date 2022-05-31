import React from "react";

export default function QueryFridge({ fridge }) {
  return (
    <ul>
      <li>Name: {fridge.fridgeName}</li>
      <li>Temperature: {fridge.fridgeTemp}</li>
    </ul>
  );
}
