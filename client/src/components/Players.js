import React from 'react'

const Players = (props) => {

  return (
      <div className='bg-gradient-to-tr from-slate-800 to-slate-900 h-60 w-1/4 rounded-xl absolute top-12 ring-2 ring-slate-500'>
        <div className='text-white text-lg'>
          <ul className='px-3 py-1 space-y-3 font-semibold font-mono'>
            {props.playerArray && props.playerArray.map(player => (
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
  )
}

export default Players