import React, { useState } from 'react';
import { ReactComponent as RightArrowIcon } from '../assets/rightIcon.svg';

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem('userName')) {
      socket.emit('message', {
        text: message,
        name: localStorage.getItem('userName'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage('');
  };

  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <textarea
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          width="100%"
          height="100%"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="btn__send">
          <RightArrowIcon className="icon__rightArrow" />
        </button>
      </form>
    </div>
  );
};

export default ChatFooter;
