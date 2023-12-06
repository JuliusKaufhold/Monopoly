import './App.css';
import './index.css'
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { Feld, Players, Trades, Properties, ChatLog} from './components/ExportFile';

const socket = io.connect("http://localhost:3001");

function App() {
  //Username and button visibilty
  const [message, setMessage] = useState("");
  const [showButton, setShowButton] = useState(true);
  const [yourTurn, setYourTurn] = useState(false);
  const [id, setID] = useState(0);

  //player-list
  const [players, setPlayers] = useState([]);

  //Button and username-input disappear after use
  const toggleButton = () => {
    setShowButton(false);
  };

  //Username input to Server
  const sendMessage = () => {
    socket.emit("login" , message);
  };

  //get connected player username, insert new player
  useEffect(() => {
    socket.on("updatePlayers", (data) => {
      setPlayers(data)
    })

    socket.on('nextTurn', (id) => {
      if(socket.id === id){
        setYourTurn(true);
      }
    })
  }, [socket])

  return (
    
    <div className="App">
      
      {/*Chat and Chatlog*/}
      <div className='flex justify-start bg-slate-900 absolute top-6 left-12 '>
        <ChatLog/>
      </div>

      {/*Game and connect*/}
      <div className=' flex justify-center bg-slate-900 absolute top-6 left-1/4'>
        <Feld/>
        <div className='flex justify-center'>

          {/*Username input*/}
          {showButton && <input onKeyDown={(e)=>{if(e.key==="Enter"){sendMessage();toggleButton();}}} placeholder='Username...' className='absolute left-64 top-96 bg-slate-600 text-slate-200 rounded-lg ring-1 ring-black h-10 w-40' 
            onChange={(event) =>{
            setMessage(event.target.value);
          }} />}

          {/*Connect-Button*/}
          {showButton && <button className='absolute right-64 top-96 ring-1 ring-black bg-gradient-to-tr from-slate-800 to-slate-900 rounded-xl text-white font-mono h-10 w-40 font-bold text-lg transition duration-300 ease-in-out hover:scale-105' 
          onClick={() => {sendMessage();toggleButton();}} > Connect</button>}

          <h1 className='absolute bottom-72 left-96 text-white text-xl'></h1>
        </div>

      </div> 

      {/*List with Players*/}
      <div class="flex justify-end pr-12 bg-slate-900 h-screen"> 
        <div className='bg-gradient-to-tr from-slate-800 to-slate-900 h-60 w-1/4 rounded-xl absolute top-12 ring-2 ring-slate-500'>
          <div className='text-white text-lg'>
              <ul className='px-3 py-1 space-y-3 font-semibold font-mono'>
                {players && players.map(player => (
                  <li key={player.id}>
                    <div className='flex justify-between'>
                      <p className='ml-20'>{player.name}</p>
                      <p className='mr-8'>{player.money}</p>
                    </div>
                  </li>
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
