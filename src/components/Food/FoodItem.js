import { RiDeleteBin5Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import { EditFood } from './EditFood';
import {
  Button,
  Box,
  Text,
  Flex,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';

export const FoodItem = ({ item, onDelete, onEdit }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Box>
        <Text>Item: {item.itemName}</Text>
        <Text>Cooked Temp: {item.itemTemp} &#8451;</Text>
        <Text>Created at: {item.date}</Text>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditFood item={item} onEdit={onEdit} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              close
            </Button>
          </ModalFooter>
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
        variant='outline'
        colorScheme='red'
        onClick={() => onDelete(item.id)}
        icon={<RiDeleteBin5Line />}
      />
    </Flex>
  )
};
