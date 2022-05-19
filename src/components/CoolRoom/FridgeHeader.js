import { Button, Box, Heading, Flex } from '@chakra-ui/react';

export const FridgeHeader = ({ title, onAdd, showAdd }) => {
  return (
    <Flex align={'center'} justify={'center'}>
      <Box>
        <Heading as='h3' size='lg'>{title}</Heading>
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

FridgeHeader.defaultProps = {
  title: 'Daily Fridge Temperature'
};