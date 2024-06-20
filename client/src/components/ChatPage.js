import React, { useEffect, useState, useRef } from 'react';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import { useLocation } from 'react-router-dom';

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [botMessages, setBotMessages] = useState([]);
  const location = useLocation();
  const lastMessageRef = useRef(null);

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

  useEffect(() => {
    // scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <ChatBody messages={messages} botMessages={botMessages} lastMessageRef={lastMessageRef} />
      <ChatFooter socket={socket} />
    </>
  );
};

export default ChatPage;
