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
  const [gameStarted, setGameStarted] = useState(false)
  const [roll,setRoll] = useState("roll");
  const [alreadyRolled, setAlreadyRolled] = useState(false)

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

  const endTurn = () => {
    setYourTurn(false)
    socket.emit("endTurn")
  }

  const start = () => {
    socket.emit("updateGameStart")
  }

  const rollingDice = () => {
    socket.emit("rolling")
  }

  //get connected player username, insert new player
  useEffect(() => {
    socket.on("updatePlayers", (data) => {
      console.log("AAA")
      setPlayers(data)
    })
  }, )

  useEffect(() =>{
    socket.on('nextTurn', (data) => {
      console.log("WWW")
      setRoll("roll")
      if(socket.id === data){
        setYourTurn(true);
        setAlreadyRolled(false);
      }
    })
  })

  useEffect(() =>{
    socket.on('started', () => {
      console.log("BBB")
      setGameStarted(true)
    })
  })

  useEffect(() =>{
    socket.on("rolled", (data) => {
      setRoll(data)
    })
  })

  return (
    
    <div className="App">
      
      {/*Chat and Chatlog*/}
      <div className=' bg-slate-900 absolute top-6 left-12 '>
        <ChatLog/>
        <div className='flex justify-center'>
          {!gameStarted && <button className='absolute top-96 ring-1 ring-black bg-gradient-to-tr from-slate-800 to-slate-900 rounded-xl text-white font-mono h-10 w-40 font-bold text-lg transition duration-300 ease-in-out hover:scale-105'
            onClick={() => {start();}}>
              <h1>start game</h1>
          </button>}
        </div>
      </div>

      {/*Game and connect*/}
      <div className=' flex justify-center bg-slate-900 absolute top-6 left-1/4'>
        <Feld/>
        
          {/*Username input*/}
          {showButton && <input onKeyDown={(e)=>{if(e.key==="Enter"){sendMessage();toggleButton();}}} placeholder='Username...' className='absolute left-64 top-96 bg-slate-600 text-slate-200 rounded-lg ring-1 ring-black h-10 w-40' 
            onChange={(event) =>{
            setMessage(event.target.value);
          }} />}

          {/*Connect-Button*/}
          {showButton && <button className='absolute right-64 top-96 ring-1 ring-black bg-gradient-to-tr from-slate-800 to-slate-900 rounded-xl text-white font-mono h-10 w-40 font-bold text-lg transition duration-300 ease-in-out hover:scale-105' 
          onClick={() => {sendMessage();toggleButton();}} > Connect</button>}

          {yourTurn && alreadyRolled && <button className='absolute bottom-48 left-1/2 ring-1 ring-black bg-gradient-to-tr from-slate-800 to-slate-900 rounded-xl text-white font-mono h-10 w-40 font-bold text-lg transition duration-300 ease-in-out hover:scale-105'
          onClick={() => {endTurn();}}>
            <h1>End Turn</h1>
          </button>}

          {yourTurn && !alreadyRolled && <button className='absolute top-80 right-[345px] ring-1 ring-black bg-gradient-to-tr from-slate-800 to-slate-900 rounded-xl text-white font-mono h-10 w-40 font-bold text-lg transition duration-300 ease-in-out hover:scale-105'
          onClick={() =>{setAlreadyRolled(true);rollingDice();}}>
            roll
          </button>}

          {gameStarted && <h1 className='font-semibold font-mono text-white text-lg absolute top-64 right-[405px]'>{roll}</h1>}

      </div> 

      {/*List with Players*/}
      <div class="flex justify-end pr-12 bg-slate-900 h-screen"> 
        <div className='bg-gradient-to-tr from-slate-800 to-slate-900 h-60 w-1/4 rounded-xl absolute top-12 ring-2 ring-slate-500'>
          <div className='text-white text-lg'>
              <ul className='px-3 py-1 space-y-3 font-semibold font-mono'>
                {players && players.map(player => (
                  <li key={player.num}>
                    <div className='flex justify-between'>
                      <p className='ml-20'>{player.name}</p>
                      <p className='mr-8'>${player.money}</p>
                      <p className='mr-8'>pos:{player.position}</p>
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
