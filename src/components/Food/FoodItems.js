import { FoodItem } from "./FoodItem";
import { Button, Box, Flex } from "@chakra-ui/react";

export const FoodItems = ({ items, onDelete, onDeleteAll, onEdit }) => {
  return (
    <Flex>
      <Box>
        {items.map(item => (
          <FoodItem
            key={item.id}
            item={item}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </Box>
      <Box alignItems='left'>
        <Button
          m={4}
          size={'sm'}
          colorScheme='red'
          onClick={onDeleteAll}
        >
          Clear all
        </Button>
      </Box>
    </Flex>
  )
};