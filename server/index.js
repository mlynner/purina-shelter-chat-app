require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id ' + db.threadId);
});

const socketIO = require('socket.io')(http, {
  cors: {
    origin: ["http://localhost:3000"],
  }
});

socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on('message', (data) => {
    socketIO.emit('messageResponse', data);
  });

  socket.on('newUser', (data) => {
    users.push(data);
    socketIO.emit('newUserResponse', users);
  });

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello world' });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
