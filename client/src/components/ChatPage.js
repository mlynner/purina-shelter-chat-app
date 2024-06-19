import React, { useEffect, useState } from 'react';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import { useLocation } from 'react-router-dom';

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [botMessages, setBotMessages] = useState([]);
  const location = useLocation();

useEffect(() => {
    const fetchData = async () => {
      try {
        // Extract sessionId from URL query parameters
        const searchParams = new URLSearchParams(location.search);
        const sessionId = searchParams.get('id');

        if (sessionId) {
          const response = await fetch(`${process.env.REACT_APP_SOCKET_URL}/proxy/transcripts?id=${sessionId}`);
          const data = await response.json();
          setBotMessages(data);
        } else {
          console.error('Session ID not found in URL parameters');
        }
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };

    fetchData();
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages, location.search]);

  return (
    <>
      <ChatBody messages={messages} botMessages={botMessages} />
      <ChatFooter socket={socket} />
    </>
  );
};

export default ChatPage;
