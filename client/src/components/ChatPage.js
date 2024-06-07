import React, { useEffect, useState } from 'react';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  return (
    <>
      <ChatBody messages={messages} />
      <ChatFooter socket={socket} />
    </>
  );
};

export default ChatPage;
