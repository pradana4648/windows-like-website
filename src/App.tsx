import { Container, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import wpBg from "./assets/wp.jpg";
import CustomIcon from "./components/CustomIcon";
import PopupMenu from "./components/PopopMenu";
import { icons } from "./data/icons";

export const ShowMenuContext = React.createContext<{
  isClosed?: boolean;
  toggleClosed?: React.Dispatch<React.SetStateAction<boolean>>;
}>({});

const App: React.FC = () => {
  const [isClosed, toggleClosed] = useState<boolean>(false);

  return (
    <ShowMenuContext.Provider value={{ isClosed, toggleClosed }}>
      <Container
        maxW="full"
        h="100vh"
        bgImage={`url(${wpBg})`}
        bgRepeat={"no-repeat"}
        bgPos={"center"}
        bgSize={"cover"}
      >
        <SimpleGrid columns={1} spacing={5}>
          {icons.map((data, index) => (
            <CustomIcon key={index} icon={data.icon} name={data.name} />
          ))}
        </SimpleGrid>

        <PopupMenu />
      </Container>
    </ShowMenuContext.Provider>
  );
};

export default App;
