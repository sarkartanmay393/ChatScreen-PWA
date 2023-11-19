import { Popover, PopoverTrigger, Button, PopoverContent, PopoverArrow, PopoverBody, Image } from "@chakra-ui/react";

import { GrAttachment } from "react-icons/gr";

import CameraIcon from '../icons/camera.svg';
import VideoIcon from '../icons/video.svg';
import DocIcon from '../icons/doc.svg';

export const AttachmentPopover = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button size='18px' borderRadius='100%' bg='transparent' _hover={{ bg: 'transparent' }}>
          <GrAttachment />
        </Button>
      </PopoverTrigger>
      {/* <Portal> */}
      <PopoverContent width='fit-content' bg='transparent' boxShadow={0} border={0} _focus={{ border: 0, boxShadow: 0, bg: 0 }}>
        <PopoverArrow bg='#008000' />
        <PopoverBody padding='12px 16px' display='flex' gap='14px' width='fit-content' bg='#008000' borderRadius={999} marginRight={2}>
          <button>
            <Image width='20px' src={CameraIcon} alt="cameraiconbtn" />
          </button>
          <button>
            <Image width='20px' src={VideoIcon} alt="VideofIconbtn" />
          </button>
          <button>
            <Image width='18px' src={DocIcon} alt="DocIconbtn" />
          </button>
        </PopoverBody>
      </PopoverContent>
      {/* </Portal> */}
    </Popover >
  );
}