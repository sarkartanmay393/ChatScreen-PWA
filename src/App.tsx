import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import { ChatScreen } from "./components/ChatScreen"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box
      height='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      bgColor='transparent'
      textAlign="center"
      fontSize="xl"
      paddingY='2rem'
    >
      <ChatScreen />
    </Box>
  </ChakraProvider>
)