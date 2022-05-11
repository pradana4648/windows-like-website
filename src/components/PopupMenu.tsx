import {
  Box,
  Divider,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Draggable from "react-draggable";
import { MdClose, MdMaximize, MdMinimize } from "react-icons/md";
import { explorerMenu, SelectedDiskInfo } from "../data/explorer_menu";

const PopupMenu: React.FC<{
  type: string;
  isShowingMenu: boolean;
  icon: string;
  titleBar: string;
  onClose: () => void;
}> = ({ titleBar, icon, isShowingMenu, onClose, type }) => {
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
        border="1px solid lightblue"
        position="fixed"
        top={0}
        left={0}
        bgColor="whitesmoke"
        display={!isShowingMenu ? "none" : "block"}
      >
        <VStack alignItems="stretch" h="full">
          <HStack borderBottom="1px solid lightblue" px={5} id="top-bar">
            <Image src={icon} boxSize={5} />
            <Text>{titleBar}</Text>
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
                onClick={() => onMaximize()}
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
                onClick={onClose}
              />
            </HStack>
          </HStack>
          {RenderBody(type)}
        </VStack>
      </Box>
    </Draggable>
  );
};

const RenderBody: React.FC<string> = (value) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [selectedDisk, setSelectedDisk] = useState<{
    id: number;
    selectedDisk: SelectedDiskInfo;
  }>({
    id: 1,
    selectedDisk: SelectedDiskInfo.c,
  });
  const [history, setHistory] = useState<string[]>([]);
  const [command, setCommand] = useState("");

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const commandSplit = command.split(" ");

      commandSplit.map((data) => {
        if (data.includes("neofetch")) {
          setHistory((prev) => [
            ...prev,
            "C:\\Windows\\System32\\" + data,
            "Gak bisa bang kayak di Linux",
          ]);
        }
      });
      setCommand("");
    }
  };

  if (value === "cmd") {
    return (
      <Box overflow="auto">
        <Text>Jelas Bukan Microsoft Windows 8 yang Asli</Text>
        <Text>(c) Yang asli yang ada badaknya</Text>
        <Box mt={5}>
          {history.map((data, index) => (
            <Text mt={5} key={index}>
              {data}
            </Text>
          ))}
          <Text mt={5}>
            C:\Windows\System32\
            <Input
              ref={inputRef}
              variant="unstyled"
              maxW={120}
              onKeyDown={handleKey}
              onClick={() => inputRef.current?.focus()}
              onChange={(e) => setCommand(e.target.value)}
              value={command}
            />
          </Text>
        </Box>
      </Box>
    );
  } else {
    return (
      <HStack h="full" alignItems="flex-start" overflow="hidden">
        <Box flexGrow={1} minW={48}>
          {explorerMenu.map((data, index) => (
            <Box
              key={index}
              py={2}
              px={3}
              _hover={{
                cursor: "default",
                bgColor: "lightblue",
              }}
              bgColor={selectedDisk.id === data.id ? "lightblue" : ""}
              onClick={() => {
                setSelectedDisk({ selectedDisk: data.info, id: data.id });
              }}
            >
              <HStack>
                <Image src={data.icon} boxSize={4} />
                <Text>{data.name}</Text>
              </HStack>
            </Box>
          ))}
        </Box>
        <Divider orientation="vertical" border="1px solid lightblue" />
        <Box flexGrow={3} h="full" overflow="auto">
          {RenderText(selectedDisk.selectedDisk)}
        </Box>
      </HStack>
    );
  }
};

const RenderText: React.FC<SelectedDiskInfo | undefined> = (disk) => {
  switch (disk) {
    case SelectedDiskInfo.c:
      return <Text textAlign="center">Kosong gan</Text>;
    case SelectedDiskInfo.d:
      return (
        <Box textAlign="center">
          <Text>Hayo mau cari apa gan??</Text>
          <Text>
            Disini tidak akan ada, lebih baik kita mengcangkul karena padi tidak
            bisa mencabut dirinya sendiri
          </Text>
          <Image
            src="https://c.tenor.com/vSj8nRf4lQoAAAAC/see-you-you.gif"
            boxSize="full"
          />
        </Box>
      );
    case SelectedDiskInfo.e:
      return (
        <Box textAlign="center">
          <Text>Hayo mau cari apa lagi gan??</Text>
          <Text>
            Gabut / bosen lebih baik kita mengaduk semen karena semen tidak bisa
            mengaduk dirinya sendiri
          </Text>
          <Image
            src="https://c.tenor.com/DGvAy_Ssh9sAAAAC/terciduk-ciduk.gif"
            boxSize="full"
          />
        </Box>
      );
    default:
      return <Text></Text>;
  }
};

export default PopupMenu;
