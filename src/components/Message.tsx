import { Card, Box, Text, Image } from "@chakra-ui/react";
import { MessageProps } from "../interfaces";

export const SentMessage = (props: MessageProps) => {
  return (
    <Box height='fit-content' display='flex' fontSize='14px' fontWeight={400} lineHeight='17.5px' gap='6px'
      justifyContent="flex-end">
      <Card display='inline-block' maxWidth='85%' bgColor='#1C63D5' boxShadow='0px 4px 8px 0px #00000014' borderRadius='12px' paddingX='8px' paddingY='8px' borderBottomRightRadius={0} textAlign='start'>
        <Text color='white'>
          {props.message}
        </Text>
      </Card>
    </Box>
  );
}

export const ResponseMessage = (props: MessageProps) => {
  return (
    <Box height='fit-content' display='flex' fontSize='14px' fontWeight={400} lineHeight='17.5px' gap='6px'>
      <Image borderRadius='50%' width='24px' height='24px' src={props.profileImage} alt="" placeholder="https://freesvg.org/img/abstract-user-flat-3.png" />
      <Card display='inline-block' maxWidth='85%' boxShadow='0px 4px 8px 0px #00000014' borderRadius='12px' paddingX='8px' paddingY='8px' borderTopLeftRadius={0} textAlign='start'>
        <Text >
          {props.message}
        </Text>
      </Card>
    </Box >
  );
}