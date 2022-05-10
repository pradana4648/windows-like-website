import { Image, Text, VStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ShowMenuContext } from "../App";

interface CustomIconProps {
  name: string;
  icon: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({ icon, name }) => {
  const { toggleClosed } = useContext(ShowMenuContext);

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
      onDoubleClick={() => toggleClosed?.(true)}
    >
      <Image src={icon} alt="Icons" boxSize={14} alignSelf="center" />
      <Text textAlign="center">{name}</Text>
    </VStack>
  );
};

export default CustomIcon;
