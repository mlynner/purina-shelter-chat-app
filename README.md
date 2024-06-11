# React & Node.js Monorepo POC

This Proof of Concept (POC) is a React application organized as a monorepo, containing both a client and a Node.js server. The architecture leverages WebSockets with Socket.io to facilitate real-time communication between the server and the client.

## Overview

The application is divided into two main parts:

- **Client**: Built with React and uses Socket.io for real-time communication.
- **Server**: Built with Node.js and Express, using Socket.io to manage WebSocket connections.

## Client

### Technologies Used

- **Socket.io**

  - Enables real-time, bi-directional communication between web browsers and a Node.js server.
  - Provides fallback to HTTP long-polling and supports automatic reconnection.

- **React Router**
  - Used for handling routing within the React application.

## Server

### Technologies Used

- **Express.js**

  - Framework for building web applications in Node.js.

- **Cors**

  - Node.js package that enables communication between different domains.

- **Nodemon**

  - Automatically restarts the Node.js server upon detecting file changes.

- **Socket.io**
  - Enables configuring a real-time connection on the server.

### Using the Application for Demo

1. Open an incognito browser window and visit the link: http://localhost:3000. This will open the sign-in page.

2. Sign in with the username “Admin".

**IMPORTANT**: The exact string “Admin” must be used as the username in order to log in as an admin and be directed to the /messages page.
The admin user will be directed to the /messages page where you can click on the “Jane” conversation to open the chat window.

3. Sign in on another browser with the username “Jane”. You will be directed to the chat page connected to the Admin user.

4. You will need to provide an URL id param to pull the chatbot data. (http://localhost:3000/chat?id=6961e97f961baab7ef75accedc37a3a9).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### License

This project is licensed under the MIT License.

### Contact

Matt Lynner at matt.lynner@nerdery.com.
