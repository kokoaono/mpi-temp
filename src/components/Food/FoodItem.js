import React from "react";
import { useMutation } from "react-query";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { EditFood } from "./EditFood";
import api from "../../api/api";
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

export const FoodItem = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteItem = (id) => {
    api.delete(`/items/${id}`);
  };
  const { mutate } = useMutation(() => deleteItem(item.id));

  return (
    <Flex>
      <Box p={3}>
        <Text>Item: {item.item_name}</Text>
        <Text>Cooked Temp: {item.item_temp} &#8451;</Text>
        <Text>Created on: {item.date}</Text>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Edit Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditFood item={item} onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <IconButton
        mr={3}
        boxShadow={"xl"}
        aria-label="edit foodItem"
        fontSize="20px"
        variant="outline"
        colorScheme="green"
        onClick={onOpen}
        icon={<AiOutlineEdit />}
      />
      <IconButton
        ml={5}
        boxShadow={"xl"}
        aria-label="delete foodItem"
        fontSize="20px"
        variant="solid"
        colorScheme="red"
        onClick={() => mutate(item.id)}
        icon={<RiDeleteBin5Line />}
      />
    </Flex>
  );
};
