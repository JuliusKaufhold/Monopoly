import React from 'react';
import { Feld, Players, Trades, Properties, ChatLog, ConnectWithName } from './components';

const App = () => {
  return (
    <main>
      <div className='flex justify-start bg-slate-900 absolute top-12 left-12 '>
        <ChatLog/>
      </div>
      <div className=' flex justify-center bg-slate-900 absolute top-12 left-1/4'>
        <Feld/>
        <ConnectWithName/>
      </div>
      <div class="flex justify-end pr-12 bg-slate-900 h-screen"> 
        <Players/>
        <Trades/>
        <Properties/>
      </div>
    </main>
  )
}

export default App;