import './App.css';
import './index.css'
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { Feld, Players, Trades, Properties, ChatLog} from './components/ExportFile';

const socket = io.connect("http://localhost:3001");
const initialPlayers=[{id:1,name:"AA"}]
let nextID=3;

function App() {
  //Username and button visibilty
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [showButton, setShowButton] = useState(true);

  //player-list and new username
  const [name,setName] = useState('');
  const [players, setPlayers] = useState(initialPlayers);

  //Button and username-input disappear after use
  const toggleButton = () => {
    setShowButton(false);
  };

  //Username input to Server
  const sendMessage = () => {
    socket.emit("send_message" , {message});
  };
  
  //insert new player in player-list
  function newPlayer() {
    const insertAt=1;
    const nextPlayers = [
      ...players.slice(0,insertAt),
      {id:nextID++,name: name},
      ...players.slice(insertAt)
    ];
    setPlayers(nextPlayers);
    setName('');
  }

  //get connected player username, insert new player
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    })
  }, [socket])

  return (
    
    <div className="App">
      
      {/*Chat and Chatlog*/}
      <div className='flex justify-start bg-slate-900 absolute top-12 left-12 '>
        <ChatLog/>
      </div>

      {/*Game and connect*/}
      <div className=' flex justify-center bg-slate-900 absolute top-12 left-1/4'>
        <Feld/>
        <div className='flex justify-center'>

          {/*Username input*/}
          {showButton && <input value={name} placeholder='Username...' className='absolute left-64 top-96 bg-slate-600 text-slate-200 rounded-lg ring-1 ring-black h-10 w-40' 
            onChange={(event) =>{
            setMessage(event.target.value);
            setName(event.target.value);
          }} />}

          {/*Connect-Button*/}
          {showButton && <button className='absolute right-64 top-96 ring-1 ring-black bg-gradient-to-tr from-slate-800 to-slate-900 rounded-xl text-white font-mono h-10 w-40 font-bold text-lg transition duration-300 ease-in-out hover:scale-105' 
          onClick={() => {newPlayer();sendMessage();toggleButton();}} > Connect</button>}

          <h1 className='absolute bottom-72 left-96 text-white text-xl'>{messageReceived}</h1>
        </div>

      </div>

      {/*List with Players*/}
      <div class="flex justify-end pr-12 bg-slate-900 h-screen"> 
        <div className='bg-gradient-to-tr from-slate-700 to-slate-800 h-60 w-1/4 rounded-xl absolute top-12 ring-2 ring-slate-500'>
          <div className='text-white text-5xl'>
            <ul>
              {players.map(player => (
                <li key={player.id}>{player.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <Trades/>
        <Properties/>
      </div>

    </div>
  );
}

export default App;
