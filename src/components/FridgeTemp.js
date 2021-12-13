import React, { useState } from "react";

const FridgeTemp = () => {
  const [fridges, setFridges] = useState(
    [
      {
        id: 1,
        name: "fridge1",
        fridgeTemp: []
      },
      {
        id: 2,
        name: 'fridge2',
        fridgeTemp: []
      },
      {
        id: 3,
        name: 'fridge3',
        fridgeTemp: []

      },
      {
        id: 4,
        name: 'fridge4',
        fridgeTemp: []
      },
      {
        id: 5,
        freezerTemp: []
      }
    ]);
  localStorage.setItem('fridge', JSON.stringify(fridges))

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setFridges(prevState => {
  //     return { ...prevState, fridges }
  //   })
  //   console.log('c');
  // }

  return (
    <div>
      <h1>Temp</h1>
      <form>
        <input
          type="number"
          value={fridges.temp}
          onChange={e => setFridges(e.target.value)}
        >
        </input>
        {/* <button type="submit" value="submit" onClick={handleClick}>save</button> */}
      </form>
    </div>
  )
};


// const fridge = [
//   {
//     id: 1,
//     name: "Fridge1",
//     temp: "",

//   },
//   {
//     id: 2,
//     name: "Fridge2",
//     temp: ""
//   }
// ];

// localStorage.setItem("fridge", JSON.stringify(fridge))
// const stringData = localStorage.getItem("fridge")
// const result = JSON.parse(stringData)
// console.log(result);

// localStorage.getItem('fridge', JSON.parse(fridge))


// const FridgeTemp = () => {
//   const [fridgeArray, setFridgeArray] = useState([
//     {
//       id: 1,
//       name: "Fridge1",
//       temp: "",
//       note: ""
//     },
//     {
//       id: 2,
//       name: "Fridge2",
//       temp: "",
//       note: ""
//     }], () => {
//       const localData = localStorage.getItem("fridgeArray");
//       return localData ? JSON.parse(localData) : []
//     })
//   useEffect(() => {
//     localStorage.setItem('fridgeArray', JSON.stringify(fridgeArray))
//   }, [fridgeArray])


//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   localStorage.setItem('fridges', JSON.stringify(fridgeArray))
//   //   const result = fridgeArray.push(fridgeArray)
//   //   console.log(result);
//   // };

//   return (
//     <form>
//       <input
//         placeholder="name"
//         name="name"
//         type="text"
//         value={fridgeArray.name}
//         onChange={e => setFridgeArray({ ...fridgeArray, [e.target.name]: e.target.value })}
//       />
//       <input
//         type="number"
//         value={fridgeArray.temp}
//         onChange={e => setFridgeArray({ ...fridgeArray, [e.target.temp]: e.target.value })}
//       />
//       <input value={fridgeArray.note} type="text" onChange={e => setFridgeArray({ ...fridgeArray, [e.target.note]: e.target.value })} />
//       <h2>Fridge name is - {fridgeArray.name}</h2>
//       <h2>Fridge temp is - {fridgeArray.temp}</h2>
//       <h2>note is - {fridgeArray.note}</h2>
//       <button >SAVE</button>

//     </form>

//   )
// };

export default FridgeTemp;