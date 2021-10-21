import React,{useEffect, useState} from 'react';
import Message from '../message/message';
import Send from '../send/send';
import './chat.css';
import { socket } from './socket';

function Chat() {

  const [currentUser, setCurrentUser] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState({});

    useEffect(() => {
      socket.on('message', (data) => {
        let maxlengthMsgList = ([...messages, { user: data.user2, text: data.text2 }]);

        if (maxlengthMsgList.length > 10) {
            messages.shift();
        };

        return setMessages([...messages, { user: data.user2, text: data.text2 }]);

    });
    socket.on('users', (data) => setUsers(data))
    }, [messages]);
  
  const changeName = (event) => {
    setCurrentUser(event.target.value)
  };

   const changeMessage = (event) => {
    setMessage(event.target.value)
  };
  
  const inputName = () => {
    if (currentUser.trim().length > 0) {
      socket.emit('change:name', currentUser);
      setIsLogin(true)
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
      if (message.trim().length > 0) {
      socket.emit('message', { user2: currentUser, text2: message.trim() }); // Тут формуємо об'єкт, який передамо в socket.on('message', (data)
      setMessage('')
    }

  }  
 
  return (
    <>
{!isLogin && <main className="form-signin">
  <h4 className="form-floating mb-3">Please, introduce yourself</h4>
  <div className="form-floating mb-3">
    <label>
    <input
      className="form-control"
        value={currentUser}
      onChange={changeName}
      placeholder="Enter your nicname"
      id="floatingInput"
  /></label>
    </div>
    <button
    className="w-100 btn btn-lg btn-primary"
    onClick={inputName}
    >Enter
   </button>
  </main>
      }
      {isLogin &&
          <div className="container">
      <div className="row align-items-start">
          <div className="message-list col-md-9">
          <Send
                value={message}
                onChange={changeMessage}
                onSend={sendMessage}
              />
          <div className="messages">
                {messages.map((item, key) => (
                  <Message item={item} currentUser={currentUser} key={key} />
                ))}
              </div>
        </div>
          <ul className="list-group col-md-3">
            {Object.values(users).map((user, i) => (
                <li className="list-group-item" key={i}>
                  {user}
                </li>
              ))}
            </ul>
      </div>
    </div>
      }
    </>
  )};

export default Chat;