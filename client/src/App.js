import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChatPage from './components/ChatPage';
import MessagesPage from './components/MessagesPage';
import socketIO from 'socket.io-client';
import AppBar from './components/AppBar';

const socket = socketIO.connect(process.env.REACT_APP_SOCKET_URL);

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
          <Route path="/messages" element={<MessagesPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
