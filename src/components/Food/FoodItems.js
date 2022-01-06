import { FoodItem } from "./FoodItem";
import { Button } from "@chakra-ui/react";

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