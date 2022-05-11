import { Box, Button, Container, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";
import wpBg from "./assets/wp.jpg";
import CustomIcon from "./components/CustomIcon";
import PopupMenu from "./components/PopopMenu";
import { icons } from "./data/icons";

const App: React.FC = () => {
  const contextMenuRef = React.useRef<HTMLDivElement>(null);

  const [popupMenu, toggleShowPopupMenu] = React.useState({
    isShowing: false,
    icon: "",
    titleBar: "",
    type: "",
  });

  const [contextMenu, toggleContextMenu] = React.useState<{
    isShowing: boolean;
    top: number;
    left: number;
  }>({
    isShowing: false,
    top: 0,
    left: 0,
  });

  const showContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    toggleContextMenu({
      isShowing: !contextMenu.isShowing,
      left: e.clientX,
      top: e.clientY,
    });
  };

  const closeContextMenu = (e: MouseEvent) => {
    e.preventDefault();

    toggleContextMenu({
      left: 0,
      top: 0,
      isShowing: contextMenu.isShowing,
    });
  };

  React.useEffect(() => {
    window.addEventListener("contextmenu", showContextMenu);
    window.addEventListener("click", closeContextMenu);
    return () => {
      window.removeEventListener("contextmenu", showContextMenu);
      window.removeEventListener("click", closeContextMenu);
    };
  }, []);

  return (
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
          <CustomIcon
            key={index}
            icon={data.icon}
            name={data.name}
            onClose={() =>
              toggleShowPopupMenu((prev) => ({
                type: data.type,
                icon: data.icon,
                titleBar: data.name,
                isShowing: !prev.isShowing,
              }))
            }
          />
        ))}
      </SimpleGrid>
      <PopupMenu
        type={popupMenu.type}
        icon={popupMenu.icon}
        titleBar={popupMenu.titleBar}
        isShowingMenu={popupMenu.isShowing}
        onClose={() => {
          toggleShowPopupMenu((prev) => ({
            ...prev,
            isShowing: !prev.isShowing,
          }));
        }}
      />

      <Box
        ref={contextMenuRef}
        top={contextMenu.top}
        left={contextMenu.left}
        position="fixed"
        onMouseUp={(e) => console.log(e.clientX)}
        display={contextMenu.isShowing ? "block" : "none"}
        p={1}
        borderRadius="sm"
        bgColor="whitesmoke"
      >
        <VStack>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => console.log("Button Clicked")}
          >
            Buat File TXT
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default App;
