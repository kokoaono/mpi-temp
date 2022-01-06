import { Fridge } from './Fridge';

export const Fridges = ({ fridges, onDelete, onDeleteAll }) => {
  return (
    <div>
      {fridges.map(fridge => (
        <Fridge
          key={fridge.id}
          fridge={fridge}
          onDelete={onDelete}
        />
      ))}
      <button onClick={onDeleteAll}>Clear All</button>
    </div>
  )
}
