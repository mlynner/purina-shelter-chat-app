import React, { useEffect, useState, useContext } from 'react';
import rudy from '../assets/dog.jpeg';
import chatbotAvatar from '../assets/chatbot-avatar.svg';
import janeAvatar from '../assets/jane-avatar.svg';
import adminProfile from '../assets/admin-avatar.svg';
import rudyModal from '../assets/rudy-adopt-modal.png';
import Modal from './Modal';
import downCaret from '../assets/downCaretPrimary.svg'
import { SHELTER_VIEW_KEY } from '../consts/const';
import UserContext from '../context/UserContext';

const ChatBody = ({ messages, botMessages, lastMessageRef }) => {
  const {userName, setUserName} = useContext(UserContext);
  const [senderAvatar, setSenderAvatar] = useState('You');
  const [recipientAvatar, setRecipientAvatar] = useState('You');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      if (storedUserName === SHELTER_VIEW_KEY) {
        setUserName(SHELTER_VIEW_KEY);
        setSenderAvatar(adminProfile);
        setRecipientAvatar(janeAvatar);
      } else {
        setUserName(storedUserName);
        setSenderAvatar(janeAvatar);
        setRecipientAvatar(adminProfile);
      }
    }
  }, []);

  const openModal = () => {
    if (userName === SHELTER_VIEW_KEY) {
      setIsModalOpen(true);
    } else {
      window.open('https://ebullymatch.com/dog-adoption/');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        <div ref={lastMessageRef} />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="modal__admin">
          <div className="d__flex justify__content__center">
            <img src={rudyModal} alt="adopt animal" />
          </div>
          <div className="modal__container">
            <h2>Has Rudy been adopted by Jane?</h2>
            <div class="d__flex btn__container">
                <button className="btn btn__primary">Yes</button>
                <button className="btn btn__secondary">No</button>
            </div>
          </div>
          <div className="modal__container">
            <h2>Would you like to update Rudy's status?</h2>
            <div class="d__flex btn__container">
                <button className="btn btn__secondary btn__icon">Adopted<img src={downCaret} alt="down caret" /></button>
                <button className="btn btn__primary">Update Status</button>
            </div>
            <label class="checkbox__notification">
              Notify other <span className="text__primary"><u><b>4</b></u></span> interested adopters that Rudy is no longer available.
              <input type="checkbox" checked="checked" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ChatBody;
