import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChatPage from './components/ChatPage';
import MessagesPage from './components/MessagesPage';
import socketIO from 'socket.io-client';
import AppBar from './components/AppBar';
import { UserProvider } from './context/UserContext';

const socket = socketIO.connect(process.env.REACT_APP_SOCKET_URL);

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <AppBar />
          <Routes>
            <Route path="/" element={<Home socket={socket} />}></Route>
            <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
            <Route path="/messages" element={<MessagesPage />}></Route>
          </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
