import React from 'react'
import { useState } from 'react'

const Trades = () => {
    const [makeTrade, setMakeTrade] = useState(false);
  return (
    <div className="flex justify-center bg-gradient-to-r from-slate-700 to-slate-800 h-28 w-1/4 rounded-xl absolute top-[377px] font-mono font-bold text-lg ring-2 ring-slate-500">
        <h1 className='pt-2 py-2 text-slate-100 text-center text-xl'>Trades</h1>
        <button className='bg-gradient-to-tr from-slate-800 to-slate-900 absolute top-8 right-4 h-12 w-32 rounded-2xl ring-2 ring-black transition duration-300 ease-in-out hover:scale-105'>
            <h1 className='text-white absolute top-2.5 left-3.5'>Make Trade</h1>
        </button>
    </div>
  )
}

export default Trades