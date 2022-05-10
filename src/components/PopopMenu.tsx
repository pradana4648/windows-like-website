import {
  Box,
  HStack,
  Icon,
  IconButton,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Draggable from "react-draggable";
import { MdClose, MdMaximize, MdMinimize } from "react-icons/md";
import folder from "../assets/icons/folder.ico";

const PopupMenu: React.FC = () => {
  return (
    <Draggable>
      <Box w="2xl" h="md" border="1px" position="fixed" top={0} left={0}>
        <HStack borderBottom="1px" px={5} id="top-bar">
          <Image src={folder} boxSize={5} />
          <Text>Hello World</Text>
          <Spacer />
          <HStack>
            <IconButton
              variant="ghost"
              aria-label="Minimize"
              _focus={{
                border: "none",
              }}
              icon={<Icon as={MdMinimize} />}
            />
            <IconButton
              variant="ghost"
              aria-label="Maximize"
              icon={<Icon as={MdMaximize} />}
              _focus={{
                border: "none",
              }}
            />
            <IconButton
              variant="ghost"
              aria-label="Close"
              icon={<Icon as={MdClose} />}
              _focus={{
                border: "none",
              }}
            />
          </HStack>
        </HStack>
      </Box>
    </Draggable>
  );
};

export default PopupMenu;
