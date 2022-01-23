import { Button, Box, Flex, Heading } from '@chakra-ui/react';

const foodTitle = 'Poultry and Meat Temperature'

export const FoodHeader = ({ onAdd, showAdd }) => {
  return (
    <Flex
      align={'center'}
      justify={'center'}
    >
      <Box>
        <Heading as='h3' size='lg' p={2} >{foodTitle}</Heading>
        <Button
          m={4}
          size='sm'
          colorScheme={showAdd ? 'red' : 'green'}
          onClick={onAdd}
        >
          {showAdd ? 'close' : 'create'}
        </Button>
      </Box>
    </Flex >
  )
};
