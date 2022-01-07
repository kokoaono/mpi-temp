import { Fridge } from './Fridge';
import { Button } from '@chakra-ui/react';

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
