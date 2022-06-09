import { Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface CustomIconProps {
  name: string;
  icon: string;
  onClose: () => void;
}

const CustomIcon: React.FC<CustomIconProps> = ({ icon, name, onClose }) => {
  return (
    <VStack
      alignItems="flex-start"
      w="fit-content"
      p={4}
      maxW={"28"}
      _hover={{
        cursor: "default",
        bgColor: "lightblue",
      }}
      onDoubleClick={onClose}
    >
      <Image src={icon} alt="Icons" boxSize={14} alignSelf="center" />
      <Text textAlign="center">{name}</Text>
    </VStack>
  );
};

export default CustomIcon;
