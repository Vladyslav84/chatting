import io from 'socket.io-client';
require('dotenv').config()
const URL = "https://server-for-chatting.herokuapp.com" || 'localhost:5000';
// process.env.REACT_APP_URL = "https://server-for-chatting.herokuapp.com"
console.log(process.env.REACT_APP_URL);

export const socket = io(URL);
 
