import React from 'react'
import Player1 from './icons8-ausgefüllter-kreis-20.png'
import Player2 from './Player2.png'
import Player3 from './icons8-ausgefüllter-kreis-20.png'
import Player4 from './icons8-ausgefüllter-kreis-20.png'
import Player5 from './icons8-ausgefüllter-kreis-20.png'
import Player6 from './icons8-ausgefüllter-kreis-20.png'

const Feld = (props) => {
  return (
      <div className='ring-2 ring-slate-500 h-[880px] w-[850px] bg-gray-800 rounded-lg'>
        <div className='flex justify-between items-center mx-6 text-white text-sm font-medium'>
          <div className='bg-gray-900 h-24 w-24 mt-4 rounded-lg ring-2 ring-black grid grid-rows-3'>
            <div className='flex items-center justify-center'>
              {props.positionP1===0 && <h1 className='bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===0 && <h1 className='bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===0 && <h1 className='bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===0 && <h1 className='bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===0 && <h1 className='bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===0 && <h1 className='bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            
            
            <h1 className='bg-gradient-to-tl from-green-600 to-green-200 inline-block text-transparent bg-clip-text text-2xl font-bold'>Start</h1>
          </div>

          <div className='bg-gradient-to-t from-yellow-900/40 to-amber-950/40 h-24 w-16 mt-4 ml-2 rounded-lg ring-2 ring-black grid grid-rows-6'>
            <div className='flex items-center justify-center row-span-2'>
              {props.positionP1===1 && <h1 className='bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===1 && <h1 className='bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===1 && <h1 className='bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===1 && <h1 className='bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===1 && <h1 className='bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===1 && <h1 className='bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            <div>
              <h1>Bad-<br/>Straße</h1>
              <h1>60$</h1>
            </div>
            
          </div>

          <div className='bg-chest bg-contain bg-center bg-no-repeat bg-slate-900 h-24 w-16 mt-4 ml-2 rounded-lg ring-2 ring-black grid grid-rows-6'>
            <div className='flex items-center justify-center row-span-2'>
              {props.positionP1===2 && <h1 className='bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===2 && <h1 className='bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===2 && <h1 className='bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===2 && <h1 className='bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===2 && <h1 className='bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===2 && <h1 className='bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            
          </div>

          <div className='bg-gradient-to-t from-yellow-900/40 to-amber-950/40 h-24 w-16 mt-4 ml-2 rounded-lg ring-2 ring-black grid grid-rows-6'>
            <div className='flex items-center justify-center row-span-2'>
              {props.positionP1===3 && <h1 className='bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===3 && <h1 className='bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===3 && <h1 className='bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===3 && <h1 className='bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===3 && <h1 className='bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===3 && <h1 className='bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            <div>
              <h1>Turm-<br/>Straße</h1>
              <h1>60$</h1>
            </div>
           
          </div>

          <div className='bg-gray-900 h-24 w-16 mt-4 ml-2 rounded-lg ring-2 ring-black grid grid-rows-6'>
            <div className='flex items-center justify-center row-span-2'>
              {props.positionP1===4 && <h1 className='bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===4 && <h1 className='bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===4 && <h1 className='bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===4 && <h1 className='bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===4 && <h1 className='bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===4 && <h1 className='bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            <div>
              <h1>Income<br/>Tax<br/>(10%)</h1>
            </div>
           
          </div>

          <div className='bg-gray-900 h-24 w-16 mt-4 ml-2 rounded-lg ring-2 ring-black grid grid-rows-6'>
            <div className='flex items-center justify-center row-span-2'>
              {props.positionP1===5 && <h1 className='bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===5 && <h1 className='bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===5 && <h1 className='bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===5 && <h1 className='bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===5 && <h1 className='bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===5 && <h1 className='bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            <div>
              <h1>Süd-<br/>Bahnhof</h1>
              <h1>200$</h1>
            </div>
            
          </div>

          <div className='bg-gradient-to-t from-blue-300/60 to-blue-400/60  h-24 w-16 mt-4 ml-2 rounded-lg ring-2 ring-black grid grid-rows-6'>
            <div className='flex items-center justify-center row-span-2'>
              {props.positionP1===6 && <h1 className='bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===6 && <h1 className='bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===6 && <h1 className='bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===6 && <h1 className='bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===6 && <h1 className='bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===6 && <h1 className='bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            <div>
              <h1>Chaussee<br/>Straße</h1>
              <h1>100$</h1>
            </div>
           
          </div>

          <div className='bg-questionMark bg-center bg-contain bg-no-repeat bg-slate-900 h-24 w-16 mt-4 ml-2 rounded-lg ring-2 ring-black grid grid-rows-6'>
            <div className='flex items-center justify-center row-span-2'>
              {props.positionP1===7 && <h1 className='bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===7 && <h1 className='bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===7 && <h1 className='bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===7 && <h1 className='bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===7 && <h1 className='bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===7 && <h1 className='bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
           
          </div>

          <div className='bg-gradient-to-t from-blue-300/60 to-blue-400/60 h-24 w-16 mt-4 ml-2 rounded-lg ring-2 ring-black grid grid-rows-6'>
            <div className='flex items-center justify-center row-span-2'>
              {props.positionP1===8 && <h1 className='bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===8 && <h1 className='bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===8 && <h1 className='bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===8 && <h1 className='bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===8 && <h1 className='bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===8 && <h1 className='bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            <div>
              <h1>Elisen-<br/>Straße</h1>
              <h1>100$</h1>
            </div>
           
          </div>

          <div className='bg-gradient-to-t from-blue-300/60 to-blue-400/60 h-24 w-16 mt-4 ml-2 rounded-lg ring-2 ring-black grid grid-rows-6'>
            <div className='flex items-center justify-center row-span-2'>
              {props.positionP1===9 && <h1 className='bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===9 && <h1 className='bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===9 && <h1 className='bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===9 && <h1 className='bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===9 && <h1 className='bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===9 && <h1 className='bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            <div>
              <h1>Post-<br/>Straße</h1>
              <h1>120$</h1>
            </div>
          
          </div>

          <div className='bg-gray-900 h-24 w-24 mt-4 ml-2 rounded-lg ring-2 ring-black'>
            <div className='flex items-start justify-center'>
              {props.positionP1===10 && <h1 className='bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===10 && <h1 className='bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===10 && <h1 className='bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===10 && <h1 className='bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===10 && <h1 className='bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===10 && <h1 className='bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>

          
          </div>

        </div>



        <div className='flex justify-between mx-6 text-white text-sm font-medium'>
          <div className='bg-gradient-to-l from-blue-600/40 to-blue-800/40 h-16 w-24 mt-2 rounded-lg ring-2 ring-black grid grid-cols-5'>
              
              <div class="flex items-center justify-center col-start-1 rotate-90">
                <h1>400$</h1>
              </div>
              
              <div class="flex items-center justify-center col-start-3 rotate-90">
                <h1>Schloss-<br/>allee</h1>
              </div>

            <div className='flex items-center justify-center rotate-90 col-start-4 col-span-2'>
              {props.positionP1===39 && <h1 className='bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===39 && <h1 className='bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===39 && <h1 className='bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===39 && <h1 className='bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===39 && <h1 className='bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===39 && <h1 className='bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>

          </div>

          <div className='bg-gradient-to-r from-pink-400/40 to-pink-500/40 h-16 w-24 mt-2 rounded-lg ring-2 ring-black grid grid-cols-5'>
            <div className='flex items-center justify-center col-start-1 rotate-90 col-span-2'>
              {props.positionP1===11 && <h1 className='bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===11 && <h1 className='bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===11 && <h1 className='bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===11 && <h1 className='bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===11 && <h1 className='bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===11 && <h1 className='bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>

            <div class="flex items-center justify-center col-start-3 -rotate-90">
              <h1>See-<br/>Straße</h1>
            </div>

            <div class="flex items-center justify-center col-start-5 -rotate-90">
              <h1>140$</h1>
            </div>

          </div>
        </div>

        <div className='flex justify-between mx-6 text-white text-sm font-medium'>
          <div className='bg-gray-900 h-16 w-24 mt-2 rounded-lg ring-2 ring-black grid grid-cols-8'>

            <div class="flex items-center justify-center col-start-3">
              <h1 className='rotate-90'>Luxury-<br/>Tax<br/>(75$)</h1>
            </div>

            <div className='flex items-center justify-center col-start-6 rotate-90 col-span-4'>
              {props.positionP1===38 && <h1 className=' bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===38 && <h1 className=' bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===38 && <h1 className=' bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===38 && <h1 className=' bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===38 && <h1 className=' bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===38 && <h1 className=' bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            
          </div>

          <div className='bg-gray-900 h-16 w-24 mt-2 rounded-lg ring-2 ring-black grid grid-cols-5'>
            <div className='flex items-center justify-center col-start-1 rotate-90 col-span-2'>
              {props.positionP1===12 && <h1 className=' bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===12 && <h1 className=' bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===12 && <h1 className=' bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===12 && <h1 className=' bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===12 && <h1 className=' bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===12 && <h1 className=' bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>

            <div class="flex items-center justify-center col-start-3 -rotate-90">
              <h1>Electric<br/>Company</h1>
            </div>

            <div class="flex items-center justify-center col-start-5 -rotate-90">
              <h1>150$</h1>
            </div>

          </div>
        </div>

        <div className='flex justify-between mx-6 text-white text-sm font-medium'>
          <div className='bg-gradient-to-l from-blue-600/40 to-blue-800/40 h-16 w-24 mt-2 rounded-lg ring-2 ring-black grid grid-cols-5'>
            
            <div class="flex items-center justify-center col-start-1 rotate-90">
              <h1>350$</h1>
            </div>
            
            <div class="flex items-center justify-center col-start-3 rotate-90">
              <h1>Park-<br/>Straße</h1>
            </div>

            <div className='flex items-center justify-center rotate-90 col-start-4 col-span-2'>
              {props.positionP1===37 && <h1 className=' bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===37 && <h1 className=' bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===37 && <h1 className=' bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===37 && <h1 className=' bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===37 && <h1 className=' bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===37 && <h1 className=' bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            
          </div>

          <div className='bg-gradient-to-r from-pink-400/40 to-pink-500/40 h-16 w-24 mt-2 rounded-lg ring-2 ring-black grid grid-cols-5'>
            <div className='flex items-center justify-center col-start-1 rotate-90 col-span-2'>
              {props.positionP1===13 && <h1 className=' bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===13 && <h1 className=' bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===13 && <h1 className=' bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===13 && <h1 className=' bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===13 && <h1 className=' bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===13 && <h1 className=' bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            <div class="flex items-center justify-center col-start-3 -rotate-90">
              <h1>Hafen-<br/>Straße</h1>
            </div>

            <div class="flex items-center justify-center col-start-5 -rotate-90">
              <h1>140$</h1>
            </div>

          </div>
        </div>

        <div className='flex justify-between mx-6 text-white text-sm font-medium'>
          <div className='bg-questionMarkLeft bg-center bg-contain bg-no-repeat bg-slate-900 h-16 w-24 mt-2 rounded-lg ring-2 ring-black grid grid-cols-8'>

            <div className='flex items-center justify-center col-start-6 rotate-90 col-span-4'>
              {props.positionP1===36 && <h1 className=' bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===36 && <h1 className=' bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===36 && <h1 className=' bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===36 && <h1 className=' bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===36 && <h1 className=' bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===36 && <h1 className=' bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>

          </div>

          <div className='bg-gradient-to-r from-pink-400/40 to-pink-500/40 h-16 w-24 mt-2 rounded-lg ring-2 ring-black grid grid-cols-5'>
            <div className='flex items-center justify-center col-start-1 rotate-90 col-span-2'>
              {props.positionP1===14 && <h1 className=' bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===14 && <h1 className=' bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===14 && <h1 className=' bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===14 && <h1 className=' bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===14 && <h1 className=' bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===14 && <h1 className=' bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            <div class="flex items-center justify-center col-start-3 -rotate-90">
              <h1>Neue-<br/>Straße</h1>
            </div>

            <div class="flex items-center justify-center col-start-5 -rotate-90">
              <h1>160$</h1>
            </div>

          </div>
        </div>

        <div className='flex justify-between mx-6 text-white text-sm font-medium'>
          <div className='bg-gray-900 h-16 w-24 mt-2 rounded-lg ring-2 ring-black grid grid-cols-5 '>

            <div class="flex items-center justify-center col-start-1 rotate-90">
              <h1>200$</h1>
            </div>

            <div class="flex items-center justify-center col-start-3 rotate-90">
              <h1>Haupt-<br/>Bahnhof</h1>
            </div>

            <div className='flex items-center justify-center col-start-4 rotate-90 col-span-2'>
              {props.positionP1===35 && <h1 className=' bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===35 && <h1 className=' bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===35 && <h1 className=' bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===35 && <h1 className=' bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===35 && <h1 className=' bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===35 && <h1 className=' bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>

          </div>

          <div className='bg-gray-900 h-16 w-24 mt-2 rounded-lg ring-2 ring-black grid grid-cols-5'>
            <div className='flex items-center justify-center col-start-1 rotate-90 col-span-2'>
              {props.positionP1===15 && <h1 className=' bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===15 && <h1 className=' bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===15 && <h1 className=' bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===15 && <h1 className=' bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===15 && <h1 className=' bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===15 && <h1 className=' bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            <div class="flex items-center justify-center col-start-3 -rotate-90">
              <h1>West-<br/>Bahnhof</h1>
            </div>

            <div class="flex items-center justify-center col-start-5 -rotate-90">
              <h1>200$</h1>
            </div>

          </div>
        </div>

        <div className='flex justify-between mx-6 text-white text-sm font-medium'>
          <div className='bg-gradient-to-l from-green-400/40 to-green-500/40 h-16 w-24 mt-2 rounded-lg ring-2 ring-black grid grid-cols-5'>

            <div class="flex items-center justify-center col-start-1 rotate-90">
              <h1>320$</h1>
            </div>

            <div class="flex items-center justify-center col-start-3 rotate-90">
              <h1>Bahnhof-<br/>Straße</h1>
            </div>

            <div className='flex items-center justify-center col-start-4 rotate-90 col-span-2'>
              {props.positionP1===34 && <h1 className=' bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===34 && <h1 className=' bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===34 && <h1 className=' bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===34 && <h1 className=' bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===34 && <h1 className=' bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===34 && <h1 className=' bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>

          </div>

          <div className='bg-gradient-to-r from-orange-400/60 to-orange-500/60 h-16 w-24 mt-2 rounded-lg ring-2 ring-black grid grid-cols-5'>
            <div className='flex items-center justify-center col-start-1 rotate-90 col-span-2'>
              {props.positionP1===16 && <h1 className=' bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===16 && <h1 className=' bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===16 && <h1 className=' bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===16 && <h1 className=' bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===16 && <h1 className=' bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===16 && <h1 className=' bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            <div class="flex items-center justify-center col-start-3 -rotate-90">
              <h1>Münchner<br/>Straße</h1>
            </div>

            <div class="flex items-center justify-center col-start-5 -rotate-90">
              <h1>180$</h1>
            </div>

          </div>
        </div>

        <div className='flex justify-between mx-6 text-white text-sm font-medium'>
          <div className='bg-chestLeft bg-center bg-contain bg-no-repeat bg-slate-900 h-16 w-24 mt-2 rounded-lg ring-2 ring-black grid grid-cols-8'>

            <div className='flex items-center justify-center col-start-6 rotate-90 col-span-4'>
              {props.positionP1===33 && <h1 className=' bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===33 && <h1 className=' bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===33 && <h1 className=' bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===33 && <h1 className=' bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===33 && <h1 className=' bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===33 && <h1 className=' bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>

          </div>

          <div className='bg-chestRight bg-center bg-contain bg-no-repeat bg-slate-900 h-16 w-24 mt-2 rounded-lg ring-2 ring-black grid grid-cols-8'>
            <div className='flex items-center justify-center col-start-1 rotate-90 col-span-4'>
              {props.positionP1===17 && <h1 className=' bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===17 && <h1 className=' bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===17 && <h1 className=' bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===17 && <h1 className=' bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===17 && <h1 className=' bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===17 && <h1 className=' bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>

          </div>
        </div>

        <div className='flex justify-between mx-6 text-white text-sm font-medium'>
          <div className='bg-gradient-to-l from-green-400/40 to-green-500/40 h-16 w-24 mt-2 rounded-lg ring-2 ring-black grid grid-cols-5'>

            <div class="flex items-center justify-center col-start-1 rotate-90">
              <h1>300$</h1>
            </div>

            <div class="flex items-center justify-center col-start-3 rotate-90">
              <h1>Haupt-<br/>Straße</h1>
            </div>

            <div className='flex items-center justify-center col-start-4 rotate-90 col-span-2'>
              {props.positionP1===32 && <h1 className=' bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===32 && <h1 className=' bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===32 && <h1 className=' bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===32 && <h1 className=' bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===32 && <h1 className=' bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===32 && <h1 className=' bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>

          </div>

          <div className='bg-gradient-to-r from-orange-400/60 to-orange-500/60 h-16 w-24 mt-2 rounded-lg ring-2 ring-black grid grid-cols-5'>
            <div className='flex items-center justify-center col-start-1 rotate-90 col-span-2'>
              {props.positionP1===18 && <h1 className=' bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===18 && <h1 className=' bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===18 && <h1 className=' bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===18 && <h1 className=' bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===18 && <h1 className=' bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===18 && <h1 className=' bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            <div class="flex items-center justify-center col-start-3 -rotate-90">
              <h1>Wiener-<br/>Straße</h1>
            </div>

            <div class="flex items-center justify-center col-start-5 -rotate-90">
              <h1>180$</h1>
            </div>

          </div>
        </div>

        <div className='flex justify-between mx-6 text-white text-sm font-medium'>
          <div className='bg-gradient-to-l from-green-400/40 to-green-500/40 h-16 w-24 mt-2 rounded-lg ring-2 ring-black grid grid-cols-5'>

            <div class="flex items-center justify-center col-start-1 rotate-90">
              <h1>300$</h1>
            </div>

            <div class="flex items-center justify-center col-start-3 rotate-90">
              <h1>Rathaus-<br/>Platz</h1>
            </div>

            <div className='flex items-center justify-center col-start-4 rotate-90 col-span-2'>
              {props.positionP1===31 && <h1 className=' bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===31 && <h1 className=' bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===31 && <h1 className=' bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===31 && <h1 className=' bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===31 && <h1 className=' bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===31 && <h1 className=' bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>

          </div>

          <div className='bg-gradient-to-r from-orange-400/60 to-orange-500/60 h-16 w-24 mt-2 rounded-lg ring-2 ring-black grid grid-cols-5'>
            <div className='flex items-center justify-center col-start-1 rotate-90 col-span-2'>
              {props.positionP1===19 && <h1 className=' bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===19 && <h1 className=' bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===19 && <h1 className=' bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===19 && <h1 className=' bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===19 && <h1 className=' bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===19 && <h1 className=' bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            <div class="flex items-center justify-center col-start-3 -rotate-90">
              <h1>Berliner-<br/>Straße</h1>
            </div>

            <div class="flex items-center justify-center col-start-5 -rotate-90">
              <h1>200$</h1>
            </div>

          </div>
        </div>




        <div className='flex justify-between items-center mx-6 text-white text-sm font-medium'>
          <div className='bg-gray-900 h-24 w-24 mt-2 ml-0 rounded-lg ring-2 ring-black'>
            <div className='flex items-center justify-center'>
              {props.positionP1===30 && <h1 className='bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===30 && <h1 className='bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===30 && <h1 className='bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===30 && <h1 className='bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===30 && <h1 className='bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===30 && <h1 className='bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>


          </div>

          <div className='bg-gradient-to-b from-yellow-300/60 to-yellow-400/60 h-24 w-16 mt-2 ml-2 rounded-lg ring-2 ring-black grid grid-rows-6'>
            <div className='flex items-center justify-center row-span-2'>
              {props.positionP1===29 && <h1 className='bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===29 && <h1 className='bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===29 && <h1 className='bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===29 && <h1 className='bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===29 && <h1 className='bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===29 && <h1 className='bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            <div>
              <h1>Goethe-<br/>Straße</h1>
              <h1>280$</h1>
            </div>

          </div>

          <div className='bg-gray-900 h-24 w-16 mt-2 ml-2 rounded-lg ring-2 ring-black grid grid-rows-6'>
            <div className='flex items-center justify-center row-span-2'>
              {props.positionP1===28 && <h1 className='bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===28 && <h1 className='bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===28 && <h1 className='bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===28 && <h1 className='bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===28 && <h1 className='bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===28 && <h1 className='bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            <div>
              <h1>Water-<br/>Company</h1>
              <h1>150$</h1>
            </div>

          </div>

          <div className='bg-gradient-to-b from-yellow-300/60 to-yellow-400/60 h-24 w-16 mt-2 ml-2 rounded-lg ring-2 ring-black grid grid-rows-6'>
            <div className='flex items-center justify-center row-span-2'>
              {props.positionP1===27 && <h1 className='bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===27 && <h1 className='bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===27 && <h1 className='bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===27 && <h1 className='bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===27 && <h1 className='bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===27 && <h1 className='bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            <div>
              <h1>Schiller-<br/>Straße</h1>
              <h1>260$</h1>
            </div>

          </div>

          <div className='bg-gradient-to-b from-yellow-300/60 to-yellow-400/60 h-24 w-16 mt-2 ml-2 rounded-lg ring-2 ring-black grid grid-rows-6'>
            <div className='flex items-center justify-center row-span-2'>
              {props.positionP1===26 && <h1 className='bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===26 && <h1 className='bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===26 && <h1 className='bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===26 && <h1 className='bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===26 && <h1 className='bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===26 && <h1 className='bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            <div>
              <h1>Lessing-<br/>Straße</h1>
              <h1>260$</h1>
            </div>

          </div>

          <div className='bg-gray-900 h-24 w-16 mt-2 ml-2 rounded-lg ring-2 ring-black grid grid-rows-6'>
            <div className='flex items-center justify-center row-span-2'>
              {props.positionP1===25 && <h1 className='bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===25 && <h1 className='bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===25 && <h1 className='bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===25 && <h1 className='bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===25 && <h1 className='bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===25 && <h1 className='bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            <div>
              <h1>Nord-<br/>Bahnhof</h1>
              <h1>200$</h1>
            </div>

          </div>

          <div className='bg-gradient-to-b from-red-500/60 to-red-600/60 h-24 w-16 mt-2 ml-2 rounded-lg ring-2 ring-black grid grid-rows-6'>
            <div className='flex items-center justify-center row-span-2'>
              {props.positionP1===24 && <h1 className='bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===24 && <h1 className='bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===24 && <h1 className='bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===24 && <h1 className='bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===24 && <h1 className='bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===24 && <h1 className='bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            <div>
              <h1>Opern-<br/>Platz</h1>
              <h1>240$</h1>
            </div>

          </div>

          <div className='bg-gradient-to-b from-red-500/60 to-red-600/60 h-24 w-16 mt-2 ml-2 rounded-lg ring-2 ring-black grid grid-rows-6'>
            <div className='flex items-center justify-center row-span-2'>
              {props.positionP1===23 && <h1 className='bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===23 && <h1 className='bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===23 && <h1 className='bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===23 && <h1 className='bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===23 && <h1 className='bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===23 && <h1 className='bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            <div>
              <h1>Museum-<br/>Straße</h1>
              <h1>220$</h1>
            </div>

          </div>

          <div className='bg-questionMark bg-center bg-contain bg-no-repeat bg-slate-900 h-24 w-16 mt-2 ml-2 rounded-lg ring-2 ring-black grid grid-rows-6'>
            <div className='flex items-center justify-center row-span-2'>
              {props.positionP1===22 && <h1 className='bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===22 && <h1 className='bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===22 && <h1 className='bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===22 && <h1 className='bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===22 && <h1 className='bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===22 && <h1 className='bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>

          </div>

          <div className='bg-gradient-to-b from-red-500/60 to-red-600/60 h-24 w-16 mt-2 ml-2 rounded-lg ring-2 ring-black grid grid-rows-6'>
            <div className='flex items-center justify-center row-span-2'>
              {props.positionP1===21 && <h1 className='bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===21 && <h1 className='bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===21 && <h1 className='bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===21 && <h1 className='bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===21 && <h1 className='bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===21 && <h1 className='bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>
            <div>
              <h1>Theater-<br/>Straße</h1>
              <h1>220$</h1>
            </div>

          </div>

          <div className='bg-gray-900 h-24 w-24 mt-2 ml-2 rounded-lg ring-2 ring-black'>
            <div className='flex items-center justify-center'>
              {props.positionP1===20 && <h1 className='bg-gradient-to-tl from-blue-600 to-blue-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player1} alt="player 1"></img></h1>}
              {props.positionP2===20 && <h1 className='bg-gradient-to-tl from-red-600 to-red-200  text-transparent bg-clip-text text-2xl font-bold'><img src={Player2} alt="player 2"></img></h1>}
              {props.positionP3===20 && <h1 className='bg-gradient-to-tl from-yellow-600 to-yellow-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP4===20 && <h1 className='bg-gradient-to-tl from-lime-600 to-lime-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP5===20 && <h1 className='bg-gradient-to-tl from-violet-600 to-violet-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
              {props.positionP6===20 && <h1 className='bg-gradient-to-tl from-fuchsia-600 to-fuchsia-200  text-transparent bg-clip-text text-2xl font-bold'>O</h1>}
            </div>


          </div>

        </div>
      </div>
  )
}

export default Feld;