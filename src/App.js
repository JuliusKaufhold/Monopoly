import './App.css';
import './index.css'
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { Feld, Players, Trades, Properties, ChatLog} from './components/ExportFile';

const socket = io.connect("http://localhost:3001");

function App() {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const sendMessage = () => {
    socket.emit("send_message" , {message});
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    })
  }, [socket])

  return (
    
    <div className="App">
      
      
      <div className='flex justify-start bg-slate-900 absolute top-12 left-12 '>
        <ChatLog/>
      </div>
      <div className=' flex justify-center bg-slate-900 absolute top-12 left-1/4'>
        <Feld/>
        <div className='flex justify-center'>
          <input placeholder='Username...' className='absolute left-64 top-96 bg-slate-600 text-slate-200 rounded-lg ring-1 ring-black h-10 w-40' 
            onChange={(event) =>{
            setMessage(event.target.value)
          }} />
          <button className='absolute right-64 top-96 ring-1 ring-black bg-gradient-to-tr from-slate-800 to-slate-900 rounded-xl text-white font-mono h-10 w-40 font-bold text-lg transition duration-300 ease-in-out hover:scale-105' 
          onClick={sendMessage}> Connect</button>
          <h1 className='absolute bottom-72 left-96'>{messageReceived}</h1>
        </div>
      </div>
      <div class="flex justify-end pr-12 bg-slate-900 h-screen"> 
        <Players/>
        <Trades/>
        <Properties/>
      </div>
    </div>
  );
}

export default App;
