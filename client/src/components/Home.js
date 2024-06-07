import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ socket }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userName', userName);
    //sends the username and socket ID to the Node.js server
    socket.emit('newUser', { userName, socketID: socket.id });
    if (userName !== 'Admin') {
      navigate('/chat');
    } else {
      navigate('/messages');
    }
  };
  return (
    <form className="home__container" onSubmit={handleSubmit}>
      <h2 className="home__header">Sign in to view Messages</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        className="username__input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="btn btn__primary">SIGN IN</button>
    </form>
  );
};

export default Home;
