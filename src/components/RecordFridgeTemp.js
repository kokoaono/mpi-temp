import React, { useState, useEffect } from "react";
import { getData } from "./Lsfunctions";

const header = 'Record Fridge/Freezer Temperature'

const RecordFridgeTemp = () => {
  //main array of object state
  //input field states
  // const [state, setState] = useState({
  //   id: Math.floor(Math.random() * 100),
  //   fridgeName: '',
  //   fridgeTemp: '',
  //   note: '',
  //   createdAt: Date()
  // });

  
  


   const [fridges, setFridges] = useState(getData());
  const [fridgeDataList,setFridgeDataList]=useState([])
  const [fridgeName,setFridgeName]= useState('')
  const [fridgeTemp,setFridgeTemp]=useState('')
  const [note,SetNote]=useState('')
  
  const pushData=()=>{
    console.log(getData())
    console.log(fridgeName,fridgeTemp,note)
    if (fridgeName && fridgeTemp && note){
      console.log('push')
      let temp=[...fridgeDataList]
      temp.push({
        fridgeName:fridgeName,
        fridgeTemp:fridgeTemp,
        note:note

      })
      setFridgeDataList(temp)
      setFridgeName('')
      setFridgeTemp('')
      SetNote('')
    }
    else{
      alert("enter all details before adding");
    }

  }
  const deleteFridge = index => {
    const temp =[...fridgeDataList]
    temp.splice(index, 1)
    setFridgeDataList(temp)
  };

  // SAVING DATA TO LS
  useEffect(() => {
    localStorage.setItem('fridges', JSON.stringify(fridges))
  }, [fridges])



const fridgelist=()=>{
  console.log(fridgeDataList)
  return fridgeDataList.map((each,i)=>(<li key={i}>{each.fridgeName} <button onClick={()=>deleteFridge(i)}>Delete</button></li>))
}


  return (
    <div>
    <ul>

    {fridgelist()}
    </ul>
      
        <h3>{header}</h3>
        <input
          for='fridgename'
          name="fridgeName"
          placeholder="Fridge Name/No"
          type="text"
          value={fridgeName}
          onChange={(e)=>setFridgeName(e.target.value)}
        >
        </input>
        <input
          placeholder="Temp"
          type='number'
          name='fridgeTemp'
          value={fridgeTemp}
          onChange={(e)=>setFridgeTemp(e.target.value)}
        >
        </input>
        <label>Note</label>
        <input
          type="text"
          name="note"
          value={note}
          onChange={(e)=>SetNote(e.target.value)}
        >
        </input>
        <button onClick={pushData}>Add</button>
      
      <button className="ui button" onClick={() => setFridgeDataList([])}>Delete All</button>

    </div >
  )
};


export default RecordFridgeTemp;