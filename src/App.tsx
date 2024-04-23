import "./App.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <>
      <ChakraProvider>
        <Box>
          <Header />
          <Box>
            <Card />
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
