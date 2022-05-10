import {
  Box,
  HStack,
  Icon,
  IconButton,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import Draggable from "react-draggable";
import { MdClose, MdMaximize, MdMinimize } from "react-icons/md";
import { ShowMenuContext } from "../App";
import folder from "../assets/icons/folder.ico";

const PopupMenu: React.FC = () => {
  const { isClosed, toggleClosed } = useContext(ShowMenuContext);

  const [position, setPosition] = useState<{
    isMaximized: boolean;
    width: number;
    height: number;
    controlledPosition: {
      x: number;
      y: number;
    };
  }>({
    isMaximized: false,
    height: 70,
    width: 50,
    controlledPosition: {
      x: 300,
      y: 100,
    },
  });

  const onMaximize = () => {
    //   Jika sudah full
    if (position.isMaximized) {
      setPosition((prev) => ({
        ...prev,
        controlledPosition: { x: 300, y: 100 },
        width: 50,
        height: 70,
      }));
    } else {
      setPosition((prev) => ({
        ...prev,
        controlledPosition: { x: 0, y: 0 },
        width: 100,
        height: 100,
      }));
    }
    setPosition((prev) => ({ ...prev, isMaximized: !prev.isMaximized }));
  };

  return (
    <Draggable
      onMouseDown={(e) => {
        console.log("Client X " + e.clientX);
        console.log("Client Y " + e.clientY);
      }}
      onDrag={(e, position) => {
        setPosition((prev) => ({
          ...prev,
          controlledPosition: { x: position.x, y: position.y },
        }));
      }}
      position={position?.controlledPosition}
    >
      <Box
        w={position.width + "%"}
        h={position.height + "%"}
        border="1px"
        position="fixed"
        top={0}
        left={0}
        display={!isClosed ? "none" : "block"}
      >
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
              onDoubleClick={() => onMaximize()}
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
              onClick={() => toggleClosed?.(false)}
            />
          </HStack>
        </HStack>
        <Text>X {position.controlledPosition.x}</Text>
        <Text>Y {position.controlledPosition.y}</Text>
      </Box>
    </Draggable>
  );
};

export default PopupMenu;
