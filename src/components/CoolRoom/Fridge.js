import { RiDeleteBin5Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import { EditFridge } from './EditFridge';
import { useFridgeDelete } from './FridgeContext';
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

export const Fridge = ({ fridge }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteFridge = useFridgeDelete();

  return (
    <Flex>
      <Box p={3}>
        <Text>Name: {fridge.fridgeName}</Text>
        <Text>Temperature: {fridge.fridgeTemp} &#8451;</Text>
        <Text>Created at: {fridge.date}</Text>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign='center'>
            Edit Fridge
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditFridge fridge={fridge} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <IconButton
        mr={3}
        aria-label='edit fridge'
        fontSize='20px'
        variant='outline'
        colorScheme='green'
        onClick={onOpen}
        icon={<AiOutlineEdit />}
      />
      <IconButton
        aria-label='delete fridge'
        fontSize='20px'
        variant='solid'
        colorScheme='red'
        onClick={() => deleteFridge(fridge.id)}
        icon={<RiDeleteBin5Line />}
      />
    </Flex >
  )
};
