import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { EditFridge } from "./EditFridge";
import { useFridgeDelete } from "./FridgeContext";
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
  ModalCloseButton,
} from "@chakra-ui/react";

export const Fridge = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteFridge = useFridgeDelete();

  return (
    <Flex>
      <Box p={3}>
        <Text>Name: {data.fridgeName}</Text>
        <Text>Temperature: {data.fridgeTemp} &#8451;</Text>
        <Text>Created on: {data.date}</Text>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Edit Fridge</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditFridge fridge={data} onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box>
        <IconButton
          mr={3}
          boxShadow={"xl"}
          aria-label="edit fridge"
          fontSize="20px"
          variant="outline"
          colorScheme="green"
          onClick={onOpen}
          icon={<AiOutlineEdit />}
        />
      </Box>
      <IconButton
        ml={5}
        boxShadow={"xl"}
        aria-label="delete fridge"
        fontSize="20px"
        variant="solid"
        colorScheme="red"
        onClick={() => deleteFridge(data.id)}
        icon={<RiDeleteBin5Line />}
      />
    </Flex>
  );
};
