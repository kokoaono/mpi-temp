import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton, Flex, FormControl, FormHelperText, Input, Button, Box, Select, ModalBody
} from '@chakra-ui/react';

export const EditFood = ({ onEdit, item }) => {
  const id = item.id;
  const [itemName, setItemName] = useState(item.itemName);
  const [itemTemp, setItemTemp] = useState(item.itemTemp);
  const [time, setTime] = useState(item.time);

  const items = ['Beef', 'Chicken', 'Lamb', 'Pork'];
  const updatedAt = Date();

  const updatedItem = { id, itemName, itemTemp, time, updatedAt }

  const onSubmit = e => {
    e.preventDefault()
    onEdit({ id, updatedItem })
  };

  return (
    <Flex m={3}>
      <Modal>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Select
                placeholder='Select Item'
                value={itemName}
                onChange={e => setItemName(e.target.value)}
              >
                {items.map(item => <option key={item}>{item}</option>)}
              </Select>
              {!itemName && (
                <FormHelperText>
                  Please select the item.
                </FormHelperText>
              )}
              <Box my={3}>
                <Input
                  type='number'
                  placeholder='Temperature'
                  value={itemTemp}
                  onChange={e => setItemTemp(e.target.value)}
                />
                {!itemTemp && (
                  <FormHelperText>
                    Temperature is required.
                  </FormHelperText>
                )}
              </Box>
              <Box my={3}>
                <Input
                  type='text'
                  placeholder='How long at this temp'
                  value={time}
                  onChange={e => setTime(e.target.value)}
                />
                {!time && (
                  <FormHelperText>
                    Length of time is required.
                  </FormHelperText>
                )}
              </Box>
              <Button
                p={4}
                size='sm'
                variant={'solid'}
                colorScheme={'green'}
                onClick={onSubmit}
              >
                Edit
              </Button>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex >
  )
};
