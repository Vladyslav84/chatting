import {io} from 'socket.io-client';
const URL = 'localhost:5000';

export const socket = io(URL);
 
