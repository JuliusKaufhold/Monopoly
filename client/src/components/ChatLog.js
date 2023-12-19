import React, { useState } from 'react'

const ChatLog = (props) => {
  const [chatMessage,setChatMessage] = useState()
  return (
    <div className=' bg-gray-800 ring-2 ring-slate-500 h-[880px] w-[350px] rounded-xl'>
      <div className='h-64 w-full absolute bottom-20 flex justify-center'>
        <div className='bg-slate-700 h-64 w-full mx-5 rounded-xl flex justify-start'>
          <ul>
            {props.chat.map(message => (
              <li key={message.msg}>
                <div className='flex justify-start'>
                  <h1 className='text-white font-semibold font-mono'>{message.playername}:{message.msg}</h1>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <input placeholder='message...' className='bg-slate-600 text-white h-10 w-64 ring-1 ring-black rounded-lg absolute bottom-5 left-5'
      onChange={(e) => {setChatMessage(e.target.value)}}>
      </input>
      <button className='bg-slate-900 ring-1 ring-black rounded-xl absolute bottom-5 right-4 h-10 w-12'
      onClick={() => {props.sendChatMessage(chatMessage)}}>
        <h1 className='text-white font-semibold'>Send</h1>
      </button>
    </div>
  )
}

export default ChatLog