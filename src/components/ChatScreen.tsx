import { Box, Divider, Input, Text, chakra } from "@chakra-ui/react";

import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEdit, FaUserCircle } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { IoMdArrowBack, IoMdSend } from "react-icons/io";

import { Messages } from "./Messages";

export const ChatScreen = () => {

  return (
    <Box width='320px' border='1px solid black' borderRadius='22px' overflow='hidden' bgColor='#FAF9F4'>
      {/* <Box height='40px' backgroundColor='' /> */}

      <Box height='100%' width='100%' aria-label="chat-screen" display='grid' gridTemplateRows='120px 70vh' alignContent='space-between'>

        <Box aria-label="contact-header" display='grid' padding='12px' gap='8px'>
          <Box display='flex' alignItems='center' justifyContent='space-between' fontSize='x-large'>
            <Box display='flex' gap='10px' alignItems='center'>
              <IoMdArrowBack />
              <Text fontWeight={600}>Trip 1</Text>
            </Box>
            <FaRegEdit />
          </Box>
          <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Box display='flex' gap='16px'>
              <FaUserCircle size='44px' />
              <Box display='grid' fontSize='16px' gap={0} textAlign='start'>
                <Text>From <chakra.span fontWeight={600}>IGI Airport, T3</chakra.span></Text>
                <Text>To <chakra.span fontWeight={600}>Sector 28</chakra.span></Text>
              </Box>
            </Box>
            <BsThreeDotsVertical size='24px' />
          </Box>
          <Divider />
        </Box>

        <Box display='flex' width='100%' flexDirection='column' padding='12px' justifyContent='flex-end' >
          <Messages />
          <Box aria-label="input-footer" display='flex' width='100%'  paddingY='6px' justifyContent='center' alignItems='center'>
            <Box borderRadius='10px' padding='6px' width='100%' bgColor='white' height='42px' display='flex' alignItems='center' gap='6px'>
              <Input
                border={0}
                focusBorderColor="transparent"
                placeholder="Reply to @Rohit Yadav"
                _placeholder={{
                  'font-size': '14px',
                  'opacity': '50%'
                }}
              />
              <GrAttachment />
              <IoMdSend />
            </Box>
          </Box>

        </Box>

      </Box>

      {/* <Box height='48px' backgroundColor='' /> */}
    </Box>
  );
}
