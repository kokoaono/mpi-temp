import { useState } from 'react'

export const AddItem = ({ onAdd }) => {
  const protein = ['Beef', 'Chicken', 'Lamb', 'Pork'];

  const [itemTemp, setItemTemp] = useState('');
  const [itemName, setItemName] = useState('');

  const onSubmit = e => {
    e.preventDefault()

    if (!itemTemp || !itemName) {
      alert('Please select name and add temperature')
      return
    }
    onAdd({ itemTemp, itemName });

    setItemTemp('');
    setItemName('');
  }

  return (
    <form onSubmit={onSubmit}>
      <select
        onChange={e => setItemName(e.target.value)}
        value={itemName}
      >
        <option defaultValue='select item'>Select Item</option>
        {protein.map(p => <option key={p}>{p}</option>)}
      </select>
      <input
        type='number'
        placeholder='Temperature'
        value={itemTemp}
        onChange={e => setItemTemp(e.target.value)}
      />
      <button>add</button>
    </form>
  )
}
