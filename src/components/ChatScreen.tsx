import {
  Box,
  Input, Text, chakra, Image, Button
} from "@chakra-ui/react";

import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";

import SendIcon from '../icons/send.svg';
import HeaderLogo from '../icons/header-logo.svg';

import { Messages } from "./Messages";
import { AttachmentPopover } from "./AttachmentPopover";


export const ChatScreen = () => {
  return (
    <Box width={{ sm: '320px' }} border={{ sm: '1px solid black' }} borderRadius={{ sm: '22px' }} overflow='hidden' bgColor='#FAF9F4'>
      {/* <Box height='40px' backgroundColor='' /> */}

      <Box height='100%' width='100%' aria-label="chat-screen" display='grid' gridTemplateRows={{ base: '120px calc(100vh - 120px)', sm: '120px 70vh' }} alignContent='space-between'>

        <Box aria-label="contact-header" display='grid' padding='12px' paddingBottom={0} borderBottom='1px solid' borderColor='rgba(229, 229, 224, 1)'>
          <Box display='flex' alignItems='center' justifyContent='space-between' fontSize='x-large'>
            <Box display='flex' gap='10px' alignItems='center'>
              <Button size='18px' borderRadius='100%' bg='transparent' _hover={{ bg: 'transparent' }} onClick={() => window.history.back()}>
                <IoMdArrowBack aria-label="back-button" />
              </Button>
              <Text fontWeight={600} _selection={{ 'user-select': 'none' }}>Trip 1</Text>
            </Box>
            <FaRegEdit />
          </Box>
          <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Box display='flex' gap='16px'>
              {/* <FaUserCircle size='44px' /> */}
              <Image width='48px' height='48px' src={HeaderLogo} alt="header logo" />
              <Box display='grid' fontSize='16px' gap={0} textAlign='start'>
                <Text>From <chakra.span fontWeight={600}>IGI Airport, T3</chakra.span></Text>
                <Text>To <chakra.span fontWeight={600}>Sector 28</chakra.span></Text>
              </Box>
            </Box>
            <BsThreeDotsVertical size='24px' />
          </Box>
        </Box>

        <Box display='flex' width='100%' flexDirection='column' padding='12px' paddingTop={0} justifyContent='flex-end' >
          <Messages />

          <Box aria-label="input-footer" display='flex' width='100%' paddingY='6px' justifyContent='center' alignItems='center'>
            <Box borderRadius='10px' padding='6px' width='100%' bgColor='white' height='48px' display='flex' alignItems='center' gap='6px'>
              <Input
                border={0}
                focusBorderColor="transparent"
                placeholder="Reply to @Rohit Yadav"
                _placeholder={{
                  'font-size': '14px',
                  'opacity': '50%'
                }}
              />

              <AttachmentPopover />

              <Image width='22px' marginLeft='6px' src={SendIcon} alt="" cursor='pointer' />
            </Box>
          </Box >
        </Box >

      </Box >

      {/* <Box height='48px' backgroundColor='' /> */}
    </Box >
  );
}
