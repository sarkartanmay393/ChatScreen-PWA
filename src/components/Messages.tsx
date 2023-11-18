import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { ChatMessage, ChatApiResponse } from "../interfaces";
import { SentMessage, ResponseMessage } from "./Message";

// Scrollable Area (w/ State, HTTP requests, Hooks)
export const Messages = () => {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const [chatData, setChatData] = useState<ChatMessage[]>([]);
  const [page, setPage] = useState(0);
  const [prevScrollHeight, setPrevScrollHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const response = await fetch(`https://qa.corider.in/assignment/chat?page=${page}`);
        const data = await response.json() as ChatApiResponse;
        setChatData((prevChatData) => [...prevChatData, ...data.chats]);
      } catch (error) {
        console.error('Error fetching chat data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchChatData();
  }, [page]);

  const handleScroll = () => {
    const container = chatContainerRef.current;
    if (!container) { return }

    const isAtTop = container.scrollTop === 0;
    if (isAtTop && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const container = chatContainerRef.current;
    if (!container) { return }

    if (!page) {
      container.scrollTop = container.scrollHeight;
    } else {
      container.scrollTop = container.scrollHeight - prevScrollHeight;
    }
    setPrevScrollHeight(container.scrollHeight)

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };

  }, [page, chatData]);

  return (
    <Box
      ref={chatContainerRef}
      gap='16px'
      display='flex'
      flexDirection='column'
      overflowY='scroll'
      alignItems='flex-end'
      margin='auto'
    >
      {chatData.map((data) => {
        return (
          data.sender.self ?
            <SentMessage key={data.id} profileImage={data.sender.image} message={data.message} />
            : <ResponseMessage key={data.id} profileImage={data.sender.image} message={data.message} />
        )
      })}
    </Box>
  )
}