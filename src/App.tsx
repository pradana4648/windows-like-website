import { Container, SimpleGrid } from "@chakra-ui/react";
import wpBg from "./assets/wp.jpg";
import CustomIcon from "./components/CustomIcon";
import PopupMenu from "./components/PopopMenu";
import { icons } from "./data/icons";

const App: React.FC = () => {
  return (
    <Container
      maxW="full"
      h="100vh"
      bgImage={`url(${wpBg})`}
      bgRepeat={"no-repeat"}
      bgPos={"center"}
      bgSize={"cover"}
    >
      <SimpleGrid columns={1} spacing={10}>
        {icons.map((data, index) => (
          <CustomIcon key={index} icon={data.icon} name={data.name} />
        ))}
      </SimpleGrid>

      <PopupMenu />
    </Container>
  );
};

export default App;
