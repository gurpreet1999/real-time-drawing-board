import React, { useState } from 'react'
import { toast, ToastContainer } from "react-toastify";
import JoinCreateRoom from './JoinCreateRoom';
import Room from './Room';

const App = () => {
  const [userNo, setUserNo] = useState(0);
  const [roomJoined, setRoomJoined] = useState(false);
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const uuid = () => {
    var S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  };

  return (
    <div className="home">
    {/* <ToastContainer />
  
      <JoinCreateRoom
         uuid={uuid}
         setRoomJoined={setRoomJoined}
         setUser={setUser}
      /> */}
 
 <Room/>
  </div>
  )
}

export default App