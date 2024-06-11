import React, { useEffect, useState } from 'react';
import rudy from '../assets/dog.jpeg';
import chatbotAvatar from '../assets/chatbot-avatar.svg';
import janeAvatar from '../assets/jane-avatar.svg';
import adminProfile from '../assets/admin-avatar.svg';
import Modal from './Modal';

const ChatBody = ({ messages, botMessages }) => {
  const [userName, setUserName] = useState('User');
  const [senderAvatar, setSenderAvatar] = useState('You');
  const [recipientAvatar, setRecipientAvatar] = useState('You');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        <button onClick={openModal} className="chat__adoption__status">Ready to adopt</button>
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
            <img
              src={message.transcript_source === 'USER' ? janeAvatar : chatbotAvatar}
              alt={message.transcript_source === 'USER' ? 'sender' : 'user'}
            />
            <div className="message__recipient">
              <p>{message.transcript_response}</p>
            </div>
          </div>
        ))}
        {messages.map((message) =>
          message.name === localStorage.getItem('userName') ? (
            <div className="message__chats" key={message.id}>
              <div className="sender__name">
                <img src={senderAvatar} alt="You" />
              </div>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <img src={recipientAvatar} alt="User" />
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="modal__container">
          <h2>Has Rudy been adopted by them?</h2>
          <div class="d__flex btn__container">
              <button className="btn btn__primary">Yes</button>
              <button className="btn btn__secondary">No</button>
          </div>
        </div>
        <div className="modal__container">
          <h2>Would you like to update Rudy's status?</h2>
          <div class="d__flex btn__container">
              <button className="btn btn__secondary">Adopted</button>
              <button className="btn btn__primary">Update Status</button>
          </div>
          <label class="checkbox__notification">
            Notify other <span className="text__primary"><u><b>4</b></u></span> interested adopters that Rudy is no longer available.
            <input type="checkbox" checked="checked" />
            <span class="checkmark"></span>
          </label>
        </div>
      </Modal>
    </>
  );
};

export default ChatBody;
