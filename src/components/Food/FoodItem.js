import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import { EditFood } from './EditFood';
import { useItemDelete } from './ItemContext';
import {
  Box,
  Text,
  Flex,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';

export const FoodItem = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const deleteItem = useItemDelete();

  return (
    <Flex>
      <Box p={3}>
        <Text>Item: {item.itemName}</Text>
        <Text>Cooked Temp: {item.itemTemp} &#8451;</Text>
        <Text>Created at: {item.date}</Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign='center'>Edit Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditFood item={item} onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <IconButton
        mr={3}
        boxShadow={'xl'}
        aria-label='edit foodItem'
        fontSize='20px'
        variant='outline'
        colorScheme='green'
        onClick={onOpen}
        icon={<AiOutlineEdit />}
      />
      <IconButton
        ml={5}
        boxShadow={'xl'}
        aria-label='delete foodItem'
        fontSize='20px'
        variant='solid'
        colorScheme='red'
        onClick={() => deleteItem(item.id)}
        icon={<RiDeleteBin5Line />}
      />
    </Flex >
  )
};