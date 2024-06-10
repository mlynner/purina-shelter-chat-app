import React, { useEffect, useState } from 'react';
import rudy from '../assets/dog.jpeg';
import chatbotAvatar from '../assets/chatbot-avatar.svg';
import janeAvatar from '../assets/jane-avatar.svg';
import adminProfile from '../assets/admin-avatar.svg';

const ChatBody = ({ messages, botMessages }) => {
  const [userName, setUserName] = useState('User');
  const [senderAvatar, setSenderAvatar] = useState('You');
  const [recipientAvatar, setRecipientAvatar] = useState('You');

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      if (storedUserName === 'Admin') {
        setUserName('Admin');
        setSenderAvatar(adminProfile);
        setRecipientAvatar(janeAvatar);
      } else {
        setUserName(storedUserName);
        setSenderAvatar(janeAvatar);
        setRecipientAvatar(adminProfile);
      }
    }
  }, []);

  return (
    <>
      <header className="chat__mainHeader">
        <div>
          <p className="chat__recipient">{userName}</p>
          <small className="chat__recipient__status">{userName} is currently online</small>
        </div>
        <p className="chat__adoption__status">Ready to adopt</p>
      </header>
      <div className="chat__subHeader">
        <img src={rudy} alt="animal" />
        <div>
          <small>About</small>
          <p>Rudy</p>
        </div>
      </div>
      <div className="message__container">
        {botMessages.map((message) => (
          <div className="message__chats" key={message.transcript_id}>
            {message.transcript_source === 'USER' ? (
              <>
                <div className="sender__name">
                  <img src={janeAvatar} alt="sender" />
                </div>
                <div className="message__sender">
                  <p>{message.transcript_response}</p>
                </div>
              </>
            ) : (
              <>
                <img src={chatbotAvatar} alt="user" />
                <div className="message__recipient">
                  <p>{message.transcript_response}</p>
                </div>
              </>
            )}
          </div>
        ))}
        {messages.map((message) =>
          message.name === localStorage.getItem('userName') ? (
            <div className="message__chats" key={message.id}>
              <div className="sender__name">
                <img src={senderAvatar} alt="user" />
              </div>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <img src={recipientAvatar} alt="recipient" />
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default ChatBody;
