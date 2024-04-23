import { Center, ChakraProvider } from "@chakra-ui/react";

function Header() {
  return (
    <>
      <ChakraProvider>
        <Center bg="black" color="white">
          <h1>Formulario de login</h1>
        </Center>
      </ChakraProvider>
    </>
  );
}

export default Header;
