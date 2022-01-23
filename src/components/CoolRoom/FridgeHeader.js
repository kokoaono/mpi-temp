import { Button, Box, Heading, Flex } from '@chakra-ui/react';

const title = 'Daily Fridge Temperature';

export const FridgeHeader = ({ onAdd, showAdd }) => {
  return (
    <Flex
      align={'center'}
      justify={'center'}
    >
      <Box>
        <Heading as='h3' size='lg' p={2}>{title}</Heading>
        <Button
          m={4}
          size='sm'
          colorScheme={showAdd ? 'red' : 'green'}
          onClick={onAdd}
        >
          {showAdd ? 'close' : 'create'}
        </Button>
      </Box>
    </Flex>
  )
};