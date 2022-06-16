import React from "react";
import { useNavigate } from "react-router-dom";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { useAuth } from "../Context/AuthContext";
import { NavLink } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  // Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  // useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  HStack,
  Text,
} from "@chakra-ui/react";

export const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const onLogout = () => {
    setAuth({});
    navigate("/", { state: { from: { pathname: "/home" } } });
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={100}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink to={"/home"}>Home</NavLink>
              <NavLink to="/items">Food Item</NavLink>
              <NavLink to="/fridges">Fridge/Freezer</NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <BsMoonFill /> : <BsFillSunFill />}
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <Text>username</Text>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Settings</MenuItem>
                  <MenuItem onClick={onLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
