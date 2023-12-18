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
  const [dice1,setDice1] = useState()
  const [dice2,setDice2] = useState()
  const [posPlayer1,setPosPlayer1] = useState()
  const [posPlayer2,setPosPlayer2] = useState()
  const [posPlayer3,setPosPlayer3] = useState()
  const [posPlayer4,setPosPlayer4] = useState()
  const [posPlayer5,setPosPlayer5] = useState()
  const [posPlayer6,setPosPlayer6] = useState()
  const [canBuyProperty,setCanBuyProperty] = useState(false)
  const [propertyList, setPropertyList] = useState([])

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
    setCanBuyProperty(false)
    socket.emit("endTurn")
  }

  const start = () => {
    socket.emit("updateGameStart")
  }

  const rollingDice = () => {
    socket.emit("rolling")
  }

  const syncPlayerList = () => {
    socket.emit("syncPlayerList")
  }

  const BuyProperty = () => {
    setCanBuyProperty(false)
    socket.emit("BuyProperty")
  }

  function BuyHouse (propertyID,ObjectOwner,priceHouse,HousesAlreadyBuilt){
    console.log("X")
    socket.emit("BuyHouse",propertyID,ObjectOwner,priceHouse,HousesAlreadyBuilt)
  }

  function SellHouse (propertyID,ObjectOwner,priceHouse,HousesAlreadyBuilt){
    socket.emit("SellHouse",propertyID,ObjectOwner,priceHouse,HousesAlreadyBuilt)
  }

  function MortageProperty(ID,Houses,Owner){
    socket.emit("MortageProperty",ID,Houses,Owner)
  }

  function BuyBackProperty(ID,Owner){
    socket.emit("BuyBackProperty",ID,Owner)
  }

  function updatePOS(){
    for(let i=0;i<players.length;i++){
      if(i===0){
        setPosPlayer1(players[0].position)
      }
      if(i===1){
        setPosPlayer2(players[1].position)
      }
      if(i===2){
        setPosPlayer3(players[2].position)
      }
      if(i===3){
        setPosPlayer4(players[3].position)
      }
      if(i===4){
        setPosPlayer5(players[4].position)
      }
      if(i===5){
        setPosPlayer6(players[5].position)
      }
    }
  }

  //get connected player username, insert new player
  useEffect(() => {
    socket.on("updatePlayers", (playerServer,propertyServer) => {
      setPlayers(playerServer)
      setPropertyList(propertyServer)
      syncPlayerList()
    })
  }, )

  useEffect(() =>{
    socket.on('nextTurn', (data) => {
      setRoll("")
      setDice1("")
      setDice2("")
      if(socket.id === data){
        setYourTurn(true);
        setAlreadyRolled(false);
      }
    })
  })

  useEffect(() =>{
    socket.on('started', () => {
      setGameStarted(true)
    })
  })

  useEffect(() =>{
    socket.on("rolled", (curRoll,d1,d2,paschCount) => {
      setRoll(curRoll)
      setDice1(d1)
      setDice2(d2)
      if(d1===d2){
        if(paschCount===3){return}
        setAlreadyRolled(false)
      }
    })
  })

  useEffect(() => {
    socket.on("clientSyncList",()=>{
      updatePOS()
    })
  })

  useEffect(() => {
    socket.on("OpportunityBuyProperty",(canBuy,data) => {
      if(socket.id === data){
        setCanBuyProperty(canBuy)
      } 
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

        {canBuyProperty && <button className='bg-gradient-to-tr from-slate-800 to-slate-900 absolute top-8 right-4 h-12 w-32 rounded-2xl ring-2 ring-black transition duration-300 ease-in-out hover:scale-105 text-white font-mono text-lg font-bold'
          onClick={() => {BuyProperty();}}>
            <h1>Buy</h1>
        </button>}
        </div>
      </div>

      {/*Game and connect*/}
      <div className=' flex justify-center bg-slate-900 absolute top-6 left-1/4'>
        <Feld positionP1={posPlayer1} positionP2={posPlayer2} positionP3={posPlayer3} positionP4={posPlayer4} positionP5={posPlayer5} positionP6={posPlayer6}/>
        
          {/*Username input*/}
          {showButton && <input onKeyDown={(e)=>{if(e.key==="Enter"){sendMessage();toggleButton();}}} placeholder='Username...' className='absolute left-64 top-96 bg-slate-600 text-slate-200 rounded-lg ring-1 ring-black h-10 w-40' 
            onChange={(event) =>{
            setMessage(event.target.value);
          }} />}

          {/*Connect-Button*/}
          {showButton && <button className='absolute right-64 top-96 ring-1 ring-black bg-gradient-to-tr from-slate-800 to-slate-900 rounded-xl text-white font-mono h-10 w-40 font-bold text-lg transition duration-300 ease-in-out hover:scale-105' 
          onClick={() => {sendMessage();toggleButton();}} > Connect</button>}

          {yourTurn && alreadyRolled && <button className='absolute bottom-48 right-[345px] ring-1 ring-black bg-gradient-to-tr from-slate-800 to-slate-900 rounded-xl text-white font-mono h-10 w-40 font-bold text-lg transition duration-300 ease-in-out hover:scale-105'
          onClick={() => {endTurn();}}>
            <h1>End Turn</h1>
          </button>}

          {yourTurn && !alreadyRolled && <button className='absolute top-80 right-[345px] ring-1 ring-black bg-gradient-to-tr from-slate-800 to-slate-900 rounded-xl text-white font-mono h-10 w-40 font-bold text-lg transition duration-300 ease-in-out hover:scale-105'
          onClick={() =>{setAlreadyRolled(true);rollingDice();}}>
            roll
          </button>}

          {gameStarted && <h1 className='font-semibold font-mono text-white text-lg absolute top-64 right-[405px]'>{dice1} {dice2}</h1>}
          {gameStarted && <h1 className='font-semibold font-mono text-white text-2xl absolute top-56 right-[413px]'>{roll}</h1>}

      </div> 

      {/*List with Players*/}
      <div class="flex justify-end pr-12 bg-slate-900 h-screen"> 
        <Players playerArray={players}/>
        <Trades/>
        <Properties canBuy={canBuyProperty} propertylist={propertyList} socketid={socket.id} playerlist={players} childBuyHouse={BuyHouse} childSellHouse={SellHouse} childMortage={MortageProperty} childBuyBack={BuyBackProperty}/>
      </div>

    </div>
  );
}

export default App;
