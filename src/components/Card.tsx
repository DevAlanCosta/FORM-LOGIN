import { ChakraProvider, Input, Box, Center, Button } from "@chakra-ui/react";
import login from "../services/login";

function Card() {
  return (
    <ChakraProvider>
      <Box bg="#383f46" minH="100vh" padding="25px">
        <Box bg="#24282c" borderRadius="25px" padding="15px" color="white">
          <Center color="white">
            <h1>Faça Seu login</h1>
          </Center>

          <label htmlFor="emailInput">Email: </label>
          <Input placeholder="Digite seu Email" />

          <label htmlFor="passwordInput">Senha: </label>
          <Input placeholder="Digite sua senha" />
          <Button
            marginTop="10px"
            type="submit"
            colorScheme="blue"
            onClick={login}
          >
            Button
          </Button>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Card;
