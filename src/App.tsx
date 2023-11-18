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

//   <Grid minH = "100vh" p = { 3} >
//   <ColorModeSwitcher justifySelf="flex-end" />
//   <VStack spacing={8}>
//     <Logo h="40vmin" pointerEvents="none" />
//     <Text>
//       Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
//     </Text>
//     <Link
//       color="teal.500"
//       href="https://chakra-ui.com"
//       fontSize="2xl"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn Chakra
//     </Link>
//   </VStack>
// </Grid > 