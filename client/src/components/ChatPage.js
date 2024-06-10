import React, { useEffect, useState } from 'react';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [botMessages, setBotMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/proxy/transcripts');
        const data = await response.json();
        setBotMessages(data);
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };
    fetchData();
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  return (
    <>
      <ChatBody messages={messages} botMessages={botMessages} />
      <ChatFooter socket={socket} />
    </>
  );
};

export default ChatPage;
