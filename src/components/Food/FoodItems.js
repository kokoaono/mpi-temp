import { FoodItem } from "./FoodItem";
import { Button } from "@chakra-ui/react";

export const FoodItems = ({ items, onDelete, onDeleteAll, onEdit }) => {
  return (
    <div>
      {items.map(item => (
        <FoodItem
          key={item.id}
          item={item}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
      <Button
        m={4}
        size={'sm'}
        colorScheme='pink'
        onClick={onDeleteAll}
      >
        Clear all
      </Button>
    </div>
  )
}