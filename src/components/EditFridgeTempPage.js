import React, { useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useHistory } from 'react-dom';
// // // import FridgeTempForm from './FridgeTempForm';
const { id } = useParams();

// // // all in capital => global non-changing variable.
// // // object contains different actions.
const ACTIONS = {
  EDIT: 'edit'
};

// // // // //dispatch sets with action variable
// // // // //current state in the state variable
// // // // //reducer is going to return new updated state
function reducer(fridges, action) {
  switch (action.type) {
    case ACTIONS.EDIT:
      return [...fridges, editFridge(state)]
  }
};

function editFridge(state) {
  if (state.id === id) {

  }
};


function EditFridgeTempPage() {
  const [fridges, dispatch] = useReducer(reducer, []);
  const [state, setState] = useState({
    fridgeName
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: ACTIONS.EDIT })
  };

  return (
    <>
      <form onSubmit={handleSubmit}>

      </form>
    </>
  )
};

export default EditFridgeTempPage;