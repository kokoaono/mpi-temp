import { RiDeleteBin5Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import { EditFood } from './EditFood';
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

export const FoodItem = ({ item, onDelete, onEdit }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <EditFood item={item} onEdit={onEdit} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <IconButton
        mr={3}
        aria-label='edit foodItem'
        fontSize='20px'
        variant='outline'
        colorScheme='green'
        onClick={onOpen}
        icon={<AiOutlineEdit />}
      />
      <IconButton
        aria-label='delete foodItem'
        fontSize='20px'
        variant='solid'
        colorScheme='red'
        onClick={() => onDelete(item.id)}
        icon={<RiDeleteBin5Line />}
      />
    </Flex >
  )
};
