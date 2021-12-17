// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useHistory } from 'react-dom';
// // // import FridgeTempForm from './FridgeTempForm';

// // // all in capital => global non-changing variable.
// // // object contains different actions.
// // // const ACTIONS = {
// // //   DELETE: 'delete'
// // // };

// // // // //dispatch sets with action variable
// // // // //current state in the state variable
// // // // //reducer is going to return new updated state
// // // function reducer(info, action) {
// // //   switch (action.type) {
// // //     case ACTIONS.DELETE:
// // //       return info.filter(info => info.id !== action.payload.id)
// // //     default:
// // //       return info
// // //   };


// export default function EditFridgeTempPage() {
//   let { id } = useParams();
//   const history = useHistory();

//   //   //     return (
//   //   //       <div>
//   //   //         <FridgeTempForm />
//   //   //         <button onClick={() => dispatch({
//   //   //           type: ACTIONS.DELETE
//   //   //         })}>Delete</button>
//   //   //         ID is {id}
//   //   //       </div>
//   //   //     )
//   //   //     //     const [info, dispatch] = useReducer(reducer, [])
//   //   //     //     const [inputs, setInputs] = useState('');

//   //   //     //     const handleSubmit = e => {
//   //   //     //       e.preventDefault();
//   //   //     //       dispatchEvent({ type: ACTIONS.EDIT })
//   //   //     //       setInputs('')
//   //   //     //     };
//   //   //     //     // const [state, dispatch] = useReducer(reducer, { fridges:  });
//   //   //     //     //call dispatch and pass in type
//   //   //     //     return (
//   //   //     //       <div>
//   //   //     //         <p>86</p>
//   //   //     // <FridgeTempForm />
//   //   //     //         <button onClick={() => dispatch({
//   //   //     //           type: ACTIONS.DELETE, payload: { id: info.id }
//   //   //     //         })}>Delete</button>
//   //   //     //       </div>
//   //   //     //     )
// };