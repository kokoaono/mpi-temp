import { FoodItem } from "./FoodItem";

export const FoodItems = ({ items, onDelete, onDeleteAll }) => {
  return (
    <div>
      {items.map(item => (
        <FoodItem
          key={item.id}
          item={item}
          onDelete={onDelete}
        />
      ))}
      <button onClick={onDeleteAll}>Clear all</button>
    </div>
  )
}