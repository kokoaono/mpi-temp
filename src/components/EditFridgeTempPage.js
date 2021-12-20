import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from './Lsfunctions'
// import { useHistory } from 'react-dom';

// all in capital => global non-changing variable.
// object contains different actions.
// const ACTIONS = {
//   EDIT: 'edit'
// };

//dispatch sets with action variable
//current state in the state variable
//reducer is going to return new updated state
// // function reducer(fridges, action) {
// //   switch (action.type) {
// //     case ACTIONS.EDIT:
// //       return [...fridges, editFridge(state)]
// //   }
// // };

const fridgeData = getData();


function EditFridgeTempPage() {
  const { id } = useParams();
  const data = fridgeData
  console.log(data);
  return (
    <div>
      <p key={data.id}>

      </p>
    </div>
  )

  //   const [fridges, dispatch] = useReducer(reducer, []);
  //   const [state, setState] = useState({
  //     fridgeName
  //   });

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     dispatch({ type: ACTIONS.EDIT })
  //   };

  //   return (
  //     <>
  //       <form>
  //         <input
  //           placeholder='Fridge Name/No'
  //           type='text'
  //         >
  //         </input>
  //         <input
  //           placeholder='Temp'
  //           type='number'
  //         >
  //         </input>
  //         <button>Edit</button>
  //         <button>Delete</button>
  //       </form>
  //     </>
  //   )
};

export default EditFridgeTempPage;