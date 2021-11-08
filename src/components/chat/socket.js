import io from 'socket.io-client';
require('dotenv').config()

const URL = process.env.REACT_APP_URL || 'localhost:5000';

console.log(process.env.REACT_APP_URL);

export const socket = io(URL);
 
